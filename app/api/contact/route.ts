import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define interface for form data
interface ContactFormData {
  name: string;
  email: string;
  skillLevel: string;
  reason: string;
}

// Get environment variables with validation
const getEnvVar = (name: string, fallback?: string): string => {
  const value = process.env[name];
  if (!value && fallback === undefined) {
    console.error(`Missing required environment variable: ${name}`);
  }
  return value || fallback || '';
};

// Configure nodemailer transporter with more robust error handling
const createTransporter = () => {
  const host = getEnvVar('SMTP_HOST', 'smtp.gmail.com');
  const port = parseInt(getEnvVar('SMTP_PORT', '587'));
  const secure = getEnvVar('SMTP_SECURE', 'false') === 'true';
  const user = getEnvVar('SMTP_USER');
  const pass = getEnvVar('SMTP_PASSWORD');

  console.log(`Attempting to create email transporter with: host=${host}, port=${port}, secure=${secure}, user=${user ? '(set)' : '(not set)'}, pass=${pass ? '(set)' : '(not set)'}`);

  try {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    throw error;
  }
};

// Define admin email (recipient of form submissions)
const adminEmail = getEnvVar('ADMIN_EMAIL', 'your-admin-email@example.com');

export async function POST(request: Request) {
  console.log('Received form submission request');
  
  try {
    // Validate environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Server is not configured to send emails. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Get form data from request
    const formData: ContactFormData = await request.json();
    console.log('Received form data:', JSON.stringify(formData, null, 2));
    
    const { name, email, skillLevel, reason } = formData;

    // Validate form data
    if (!name || !email || !skillLevel || !reason) {
      console.error('Missing required fields:', { name, email, skillLevel, reason });
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();
    
    // Verify connection configuration
    try {
      const verificationResult = await transporter.verify();
      console.log('Transporter verification result:', verificationResult);
    } catch (verifyError) {
      console.error('Failed to verify email transporter:', verifyError);
      return NextResponse.json(
        { error: 'Unable to connect to the email server. Please try again later.' },
        { status: 500 }
      );
    }

    // Create email to admin
    const adminMailOptions = {
      from: `"Community Join Request" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Join Request from ${name}`,
      html: `
        <h1 style="color: #1E90FF; border-bottom: 2px solid #1E90FF; padding-bottom: 10px;">New Join Request</h1>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Skill Level:</strong> ${skillLevel}</p>
          <p><strong>Reason for Joining:</strong> ${reason}</p>
        </div>
        <p style="margin-top: 20px; font-style: italic; color: #666;">This request was submitted on ${new Date().toLocaleString()}</p>
      `,
    };

    // Create confirmation email to user
    const userMailOptions = {
      from: `"Web Dev Community" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for your interest in joining our community',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Interest</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background-color: #1E90FF; padding: 20px; text-align: center; }
            .header h1 { color: white; margin: 0; }
            .content { padding: 20px; }
            .summary { background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Thank You for Your Interest!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>We've received your request to join our community. Our team will review your application and get back to you soon.</p>
            <p>Here's a summary of your submission:</p>
            <div class="summary">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Skill Level:</strong> ${skillLevel}</p>
              <p><strong>Your Message:</strong> "${reason}"</p>
            </div>
            <p>We look forward to welcoming you to our community!</p>
            <p>Best regards,<br/>The Web Dev Community Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Web Development Community. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    };

    try {
      console.log('Attempting to send emails...');
      // Send emails
      const results = await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions),
      ]);
      
      console.log('Emails sent successfully:', results);
      return NextResponse.json({ 
        success: true,
        message: 'Your application has been submitted successfully!'
      }, { status: 200 });
    } catch (emailError: any) { // Type assertion for the error
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        { error: `Failed to send emails: ${emailError.message || 'Unknown error'}. Please try again later.` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
} 