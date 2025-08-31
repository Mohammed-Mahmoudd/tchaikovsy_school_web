"use client";
// src/app/page.js (Server Component)
import { useEffect } from "react";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClientPageWrapper from "@/components/ClientPageWrapper";
import BackgroundShader from "@/components/ShaderGradient";
import LoadingLayer from "@/components/LoadingLayer";

export default function HomePage() {
  useEffect(() => {
    const overlay = document.getElementById("scroll-overlay");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startOpacity = 0.1; // بداية الـ overlay
      const endOpacity = 0.6; // النهاية عند الـ scrollRange
      const scrollRange = 1200; // طول الانتقال

      const newOpacity = Math.min(
        endOpacity,
        startOpacity + (scrollY / scrollRange) * (endOpacity - startOpacity)
      );

      overlay.style.opacity = newOpacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <LoadingLayer />

        {/* Overlay لتغيير opacity حسب scroll */}
        <div
          id="scroll-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            background: "#000", // لون الـ overlay
            opacity: 0.1, // البداية
            transition: "opacity 0.2s ease-out",
            zIndex: 5, // فوق الخلفية الأساسية
          }}
        ></div>
      </div>
    </ClientPageWrapper>
  );
}
