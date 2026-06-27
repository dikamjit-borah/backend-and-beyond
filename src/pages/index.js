import React from "react";
import "./../styles/global.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BuildLaunchSection from "../components/BuildLaunchSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MVPSection from "../components/MVPSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <MVPSection />
      <BuildLaunchSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Backend & Beyond — AI & Software Engineering Studio</title>
    <meta name="description" content="Backend & Beyond builds AI agents, scalable backend systems, custom web applications, and analytics dashboards for startups and growing businesses." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Theme */}
    <meta name="theme-color" content="#2D0A6B" />

    {/* Open Graph */}
    <meta property="og:type"        content="website" />
    <meta property="og:url"         content="https://backendandbeyond.com/" />
    <meta property="og:site_name"   content="Backend & Beyond" />
    <meta property="og:title"       content="Backend & Beyond — Engineering Software That Performs" />
    <meta property="og:description" content="We build AI automation systems, custom software, and data-driven applications for founders, startups, and scaling businesses." />
    <meta property="og:image"       content="https://backendandbeyond.com/og-image.png" />
    <meta property="og:image:width"  content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt"    content="Backend & Beyond — AI & Software Engineering Studio" />

    {/* Twitter Card */}
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:site"        content="@backendandbeyond" />
    <meta name="twitter:creator"     content="@backendandbeyond" />
    <meta name="twitter:title"       content="Backend & Beyond — AI & Software Engineering Studio" />
    <meta name="twitter:description" content="We build AI agents, backend systems, and custom software for startups and scaling businesses." />
    <meta name="twitter:image"       content="https://backendandbeyond.com/og-image.png" />

    {/* Canonical */}
    <link rel="canonical" href="https://backendandbeyond.com/" />

    {/* FAQPage schema */}
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of projects do you take on?",   "acceptedAnswer": { "@type": "Answer", "text": "Custom software, AI automation systems, backend infrastructure, analytics dashboards, and web and mobile applications. Projects range from 4-week focused builds to longer-term engineering engagements." } },
        { "@type": "Question", "name": "How long does a project take?",             "acceptedAnswer": { "@type": "Answer", "text": "Scope determines timeline. A focused MVP ships in 4 to 6 weeks. Full-scale systems typically take 3 to 6 months." } },
        { "@type": "Question", "name": "Do you work with early-stage startups?",   "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have helped founders go from zero to deployed. Budget and timeline need to be realistic, but we are experienced with MVP-first thinking." } },
        { "@type": "Question", "name": "Who will I be working with?",              "acceptedAnswer": { "@type": "Answer", "text": "Directly with the engineers and designers building your product. No account managers, no third-party outsourcing." } },
        { "@type": "Question", "name": "What happens after launch?",               "acceptedAnswer": { "@type": "Answer", "text": "All projects include a 30-day support window post-launch. We also offer ongoing retainer engagements for teams that need continued engineering capacity." } },
        { "@type": "Question", "name": "Do you sign NDAs?",                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, on request before any project discussion." } }
      ]
    })}</script>

    {/* Organisation schema */}
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Backend & Beyond",
      "description": "Software engineering and AI systems studio specializing in AI agent development, backend engineering, custom software, and analytics dashboards.",
      "url": "https://backendandbeyond.com",
      "email": "hello@backendandbeyond.com",
      "serviceType": [
        "AI Agent Development",
        "Custom Software Development",
        "Backend Engineering",
        "Dashboard Development",
        "Web Application Development",
        "Mobile App Development",
        "Automation Systems",
        "Brand Identity Design",
        "SEO & Digital Visibility"
      ],
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.linkedin.com/company/backend-and-beyond",
        "https://x.com/backendandbeyond",
        "https://www.instagram.com/backendandbeyond/"
      ]
    })}</script>
  </>
);
