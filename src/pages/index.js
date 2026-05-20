import React from "react";
import "./../styles/global.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer showLegal={true} />
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

    {/* Schema */}
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
        "Automation Systems"
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
