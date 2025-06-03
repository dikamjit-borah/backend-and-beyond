import React from "react";
import "./../styles/global.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Backend & Beyond - Tech Agency</title>
    <meta
      name="description"
      content="Powering the future of web & blockchain technology"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
