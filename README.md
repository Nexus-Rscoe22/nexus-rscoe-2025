# Web Development Community Site

A Next.js application with a contact form system that sends emails to both administrators and users.

## Features

- Modern UI built with Next.js, Tailwind CSS, and Shadcn/UI components
- Responsive design with animations powered by Framer Motion
- Contact form with email notifications for both admin and users
- Server-side email handling with Nodemailer
- Toast notifications for form submission feedback

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- Yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Configure environment variables:

Copy the `.env.local.example` file to `.env.local` and update the values:

```
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=admin@yourdomain.com
```

> **Note for Gmail users**: You need to generate an App Password:
> 1. Enable 2-Step Verification on your Google account
> 2. Go to Google Account > Security > App passwords
> 3. Generate a new app password for "Mail" and your device
> 4. Use that password as SMTP_PASSWORD

### Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build the application:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

## Contact Form System

The system sends two emails when a user submits the form:

1. **User Email**: A confirmation email sent to the user with a summary of their submission.
2. **Admin Email**: A notification email sent to the admin (specified in ADMIN_EMAIL) with the user's details.

### Customizing Email Templates

To customize the email templates, edit the HTML in the `app/api/contact/route.ts` file:

- Admin email template: Look for the `adminMailOptions` object
- User email template: Look for the `userMailOptions` object

## License

This project is licensed under the MIT License. 