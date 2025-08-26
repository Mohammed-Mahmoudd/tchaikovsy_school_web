"use client";
// src/app/page.js (Server Component)
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClientPageWrapper from "@/components/ClientPageWrapper";
import BackgroundShader from "@/components/ShaderGradient";

export default function HomePage() {
  return (
    <ClientPageWrapper>
      <div className="container">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ContactSection />
        <Footer />

        {/* الخلفية 3D */}
        <BackgroundShader />
      </div>
    </ClientPageWrapper>
  );
}
