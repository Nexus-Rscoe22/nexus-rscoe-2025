import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Web Development Community",
  description: "Privacy policy for the Web Development Community website."
}

export default function PrivacyPolicy() {
  return (
    <main className="py-16 bg-white dark:bg-[#1C2526]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-[#2F2F2F]/70 dark:text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2>1. Introduction</h2>
            <p>
              Welcome to the Web Development Community ("we," "our," or "us"). We respect your privacy and are committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and protect your 
              information when you use our website and services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> When you subscribe to our newsletter, register for an account, 
                or submit a contact form, we collect information such as your name, email address, and any other 
                information you provide voluntarily.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect information about how you interact with our 
                website, including pages visited, time spent, and other usage statistics.
              </li>
              <li>
                <strong>Technical Data:</strong> This includes your IP address, browser type and version, device 
                information, and other technical data when you access our website.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To provide you with news, special offers, and general information about other services and events</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our services, provide services on our 
              behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third 
              parties have access to your personal information only to perform these tasks and are obligated not to 
              disclose or use it for any other purpose.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If we become aware that a child under 13 has provided us with personal 
              information, we will take steps to remove that information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your data:</p>
            <ul>
              <li>Right to access the personal information we hold about you</li>
              <li>Right to rectify inaccurate or incomplete information</li>
              <li>Right to erasure of your personal data</li>
              <li>Right to restrict processing of your data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your data</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@webdevcommunity.com<br />
              <strong>Address:</strong> 123 Web Dev Street, Coding City, 12345
            </p>
          </section>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1E90FF] hover:bg-[#1E90FF]/90"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 