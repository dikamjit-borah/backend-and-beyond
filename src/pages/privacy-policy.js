import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./../styles/global.css";

const sections = [
  {
    num: "01",
    title: "Introduction",
    body: "We respect your privacy. This policy explains what information we collect when you visit our website, how we use it, and your choices. It applies to this site and to the contact form you may submit.",
  },
  {
    num: "02",
    title: "Information we collect",
    list: [
      { label: "Contact details you submit", text: ": name, email, company, and message from our contact form." },
      { label: "Usage data", text: ": basic, aggregated information about how the site is used (e.g., pages viewed, approximate geography from IP, device/browser). We aim to keep this data minimal and non-identifying." },
      { label: "Technical data", text: ": IP address and user agent may be processed by our hosting provider for security and reliability." },
    ],
  },
  {
    num: "03",
    title: "How we use your information",
    list: [
      { text: "Respond to your inquiries and provide requested information." },
      { text: "Operate, maintain, and improve the website." },
      { text: "Protect against malicious or fraudulent activity." },
      { text: "Comply with legal obligations." },
    ],
  },
  {
    num: "04",
    title: "Legal bases",
    body: "If you are in the EEA/UK, we process personal data based on: (i) consent (when you submit the contact form), (ii) legitimate interests (site security, basic analytics), and (iii) legal obligations where applicable.",
  },
  {
    num: "05",
    title: "Cookies and analytics",
    body: "We aim to use privacy-friendly approaches. If cookies or third-party analytics are enabled, they are used only to understand site performance and are not used to build marketing profiles across sites. You can control cookies through your browser settings.",
  },
  {
    num: "06",
    title: "Sharing your information",
    body: "We do not sell your data. We may share limited information with service providers who help us run the site (e.g., hosting, email). These providers may only process your data on our instructions and must protect it.",
  },
  {
    num: "07",
    title: "Data retention",
    body: "We keep contact submissions for as long as needed to respond and for reasonable backup, audit, and legal purposes. Usage data may be retained in aggregate form.",
  },
  {
    num: "08",
    title: "Security",
    body: "We use appropriate technical and organizational measures to protect your information. No method of transmission or storage is 100% secure, but we work to safeguard your data.",
  },
  {
    num: "09",
    title: "International transfers",
    body: "Our service providers may operate globally. Where required, we implement safeguards for international data transfers, such as standard contractual clauses.",
  },
  {
    num: "10",
    title: "Your rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object or request portability. To exercise these rights, contact us using the details below.",
  },
  {
    num: "11",
    title: "Contact",
    contact: true,
  },
  {
    num: "12",
    title: "Changes to this policy",
    body: 'We may update this policy from time to time. The "Last updated" date above reflects the latest version.',
  },
];

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div
        className="relative overflow-hidden"
        style={{ background: 'var(--cream-alt)', borderTop: '2px solid rgba(45,10,107,0.12)', minHeight: '100vh' }}
      >
        {/* "LEGAL" watermark */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
          style={{ fontSize: '100px', color: 'rgba(45,10,107,0.045)', letterSpacing: '0.05em', lineHeight: 1, zIndex: 0 }}
        >
          LEGAL
        </span>

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-28 pb-24">

          {/* Page header */}
          <div className="mb-12">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
              <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Legal
              </span>
            </div>

            <h1
              className="font-boowie leading-none mb-5"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
                lineHeight: 1.04,
              }}
            >
              Privacy<br />
              <span style={{ color: 'var(--accent)' }}>Policy.</span>
            </h1>

            <p
              className="font-jost text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(45,10,107,0.35)' }}
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: "1px", background: "rgba(45,10,107,0.10)", marginBottom: "3.5rem" }} />

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.num}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="font-jost text-xs font-bold uppercase tracking-widest flex-shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    {s.num}
                  </span>
                  <h2
                    className="font-boowie leading-tight"
                    style={{
                      fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                      color: 'var(--ink)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {s.title}
                  </h2>
                </div>

                {s.body && (
                  <p
                    className="font-jost text-base leading-relaxed"
                    style={{ color: 'var(--text-sub)', paddingLeft: '2.5rem' }}
                  >
                    {s.body}
                  </p>
                )}

                {s.list && (
                  <ul
                    className="space-y-2 font-jost text-base leading-relaxed"
                    style={{ color: 'var(--text-sub)', paddingLeft: '2.5rem', listStyle: 'none' }}
                  >
                    {s.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span
                          style={{
                            display: 'inline-block',
                            width: '5px',
                            height: '5px',
                            background: 'var(--accent)',
                            borderRadius: '50%',
                            flexShrink: 0,
                            marginTop: '0.55em',
                          }}
                        />
                        <span>
                          {item.label && (
                            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{item.label}</span>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.contact && (
                  <p
                    className="font-jost text-base leading-relaxed"
                    style={{ color: 'var(--text-sub)', paddingLeft: '2.5rem' }}
                  >
                    For privacy requests, please email us at{" "}
                    <a
                      href="mailto:hello@backendandbeyond.com"
                      style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      hello@backendandbeyond.com
                    </a>
                    .
                  </p>
                )}

                <div style={{ width: "100%", height: "1px", background: "rgba(45,10,107,0.06)", marginTop: "2.5rem" }} />
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const Head = () => (
  <>
    <title>Privacy Policy | Backend & Beyond</title>
    <meta name="description"  content="Learn how Backend & Beyond collects, uses, and protects the information you share with us." />
    <meta name="robots"       content="index, follow" />
    <meta name="viewport"     content="width=device-width, initial-scale=1" />
    <meta name="theme-color"  content="#2D0A6B" />
    <link rel="canonical"     href="https://backendandbeyond.com/privacy-policy/" />
    <meta property="og:type"        content="website" />
    <meta property="og:url"         content="https://backendandbeyond.com/privacy-policy/" />
    <meta property="og:site_name"   content="Backend & Beyond" />
    <meta property="og:title"       content="Privacy Policy | Backend & Beyond" />
    <meta property="og:description" content="Learn how Backend & Beyond collects, uses, and protects the information you share with us." />
  </>
);
