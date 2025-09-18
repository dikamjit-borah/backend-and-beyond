import React from "react";
import "./../styles/global.css";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-200">
      <section className="pt-16 md:pt-20 pb-12 px-4 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl text-white mb-3">1. Introduction</h2>
              <p className="leading-relaxed text-gray-300">
                We respect your privacy. This policy explains what information we collect when you
                visit our website, how we use it, and your choices. It applies to this site and to the
                contact form you may submit.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">2. Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <span className="text-white">Contact details you submit</span>: name, email, company, and message
                  from our contact form.
                </li>
                <li>
                  <span className="text-white">Usage data</span>: basic, aggregated information about how the site is used (e.g.,
                  pages viewed, approximate geography from IP, device/browser). We aim to keep this
                  data minimal and non-identifying.
                </li>
                <li>
                  <span className="text-white">Technical data</span>: IP address and user agent may be processed by our
                  hosting provider for security and reliability.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">3. How we use your information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Respond to your inquiries and provide requested information.</li>
                <li>Operate, maintain, and improve the website.</li>
                <li>Protect against malicious or fraudulent activity.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">4. Legal bases</h2>
              <p className="leading-relaxed text-gray-300">
                If you are in the EEA/UK, we process personal data based on: (i) consent (when you
                submit the contact form), (ii) legitimate interests (site security, basic analytics), and
                (iii) legal obligations where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">5. Cookies and analytics</h2>
              <p className="leading-relaxed text-gray-300">
                We aim to use privacy-friendly approaches. If cookies or third‑party analytics are
                enabled, they are used only to understand site performance and are not used to build
                marketing profiles across sites. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">6. Sharing your information</h2>
              <p className="leading-relaxed text-gray-300">
                We do not sell your data. We may share limited information with service providers
                who help us run the site (e.g., hosting, email). These providers may only process your
                data on our instructions and must protect it.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">7. Data retention</h2>
              <p className="leading-relaxed text-gray-300">
                We keep contact submissions for as long as needed to respond and for reasonable
                backup, audit, and legal purposes. Usage data may be retained in aggregate form.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">8. Security</h2>
              <p className="leading-relaxed text-gray-300">
                We use appropriate technical and organizational measures to protect your information.
                No method of transmission or storage is 100% secure, but we work to safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">9. International transfers</h2>
              <p className="leading-relaxed text-gray-300">
                Our service providers may operate globally. Where required, we implement safeguards
                for international data transfers, such as standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">10. Your rights</h2>
              <p className="leading-relaxed text-gray-300">
                Depending on your location, you may have rights to access, correct, delete, or restrict
                processing of your personal data, and to object or request portability. To exercise these
                rights, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">11. Contact</h2>
              <p className="leading-relaxed text-gray-300">
                For privacy requests, please email us at <a className="text-blue-400 hover:underline" href="mailto:hello@backendandbeyond.com">hello@backendandbeyond.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-3">12. Changes to this policy</h2>
              <p className="leading-relaxed text-gray-300">
                We may update this policy from time to time. The “Last updated” date above reflects
                the latest version.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

export const Head = () => (
  <>
    <title>Privacy Policy | Backend & Beyond</title>
    <meta name="description" content="Learn how Backend & Beyond collects and uses information." />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);


