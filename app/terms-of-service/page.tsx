import Link from "next/link"

export const metadata = {
  title: "Terms of Service - Web Development Community",
  description: "Terms of service for the Web Development Community website."
}

export default function TermsOfService() {
  return (
    <main className="py-16 bg-white dark:bg-[#1C2526]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] dark:text-white mb-4">Terms of Service</h1>
          <p className="text-[#2F2F2F]/70 dark:text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Web Development Community website and services, you agree to be bound by these Terms of 
              Service. If you do not agree to all the terms and conditions, you must not access or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>2. Description of Service</h2>
            <p>
              Web Development Community provides a platform for web developers to connect, learn, and share knowledge about 
              web development. Our services may include forums, educational content, newsletters, online events, and other 
              web development resources.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and up-to-date information. You are 
              responsible for safeguarding the password and for all activities that occur under your account. You agree to 
              notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with 
              these Terms of Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>4. User Content</h2>
            <p>
              Our services may allow you to post, link, store, share, and otherwise make available certain information, text, 
              graphics, videos, or other material. You are responsible for the content you post and its legality, reliability, 
              and appropriateness.
            </p>
            <p>
              By posting content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and 
              distribute such content on and through our services. You retain any rights you may have in such content.
            </p>
            <p>
              You may not post content that:
            </p>
            <ul>
              <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, or invasive of another's privacy</li>
              <li>Infringes on any intellectual property rights</li>
              <li>Contains software viruses or any other code designed to disrupt, damage, or limit the functioning of software or hardware</li>
              <li>Impersonates any person or entity or misrepresents your affiliation with a person or entity</li>
              <li>Is spam, advertising, or promotional material without proper authorization</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>5. Intellectual Property</h2>
            <p>
              Our services and their original content (excluding content provided by users), features, and functionality are 
              owned by Web Development Community and are protected by international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including 
              without limitation if you breach the Terms of Service. Upon termination, your right to use our services will 
              immediately cease.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Web Development Community, nor its directors, employees, partners, agents, suppliers, or 
              affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including 
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>8. Disclaimer</h2>
            <p>
              Your use of our services is at your sole risk. Our services are provided on an "AS IS" and "AS AVAILABLE" basis. 
              We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the 
              implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law 
              provisions. Any legal action or proceeding relating to your access to or use of our services shall be instituted 
              in the courts, and you consent to the jurisdiction of such courts.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide 
              notice of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued 
              use of our services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> terms@webdevcommunity.com<br />
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