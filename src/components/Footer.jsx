"use client";

import React, { useState, useEffect, useRef } from "react";
import appLogo from "../../public/appLogo.png"; // Adjust path as needed
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);
  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Faculty", href: "#faculty" },
    { name: "Admissions", href: "#admissions" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Classical Piano", href: "#piano" },
    { name: "Music Theory", href: "#theory" },
    { name: "Composition", href: "#composition" },
    { name: "Performance", href: "#performance" },
    { name: "Music History", href: "#history" },
    { name: "Masterclasses", href: "#masterclass" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#facebook" },
    { name: "Instagram", icon: "📷", href: "#instagram" },
    { name: "YouTube", icon: "📹", href: "#youtube" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
  ];

  return (
    <footer ref={footerRef} className="footer">
      {/* Multi-layered Background */}
      <div className="background-layers">
        {/* Base gradient */}
        <div className="gradient-overlay"></div>

        {/* Interactive glow */}
        <div
          className="interactive-glow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        ></div>

        {/* Floating music elements */}
        <div className="floating-elements">
          <div className="music-note note-1">♪</div>
          <div className="music-note note-2">♫</div>
          <div className="music-note note-3">♬</div>
          <div className="music-note note-4">♩</div>

          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className={`footer-content ${isVisible ? "visible" : ""}`}>
          {/* Brand section */}
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo">
                <span className="logo-text">
                  <Image
                    src={appLogo}
                    alt="App Logo"
                    height={50}
                    width={50}
                    style={{
                      height: "50px",
                      width: "auto",
                    }}
                    priority
                  />
                </span>
              </div>
              <h3 className="brand-name">TCHAIKOVSKY</h3>
            </div>

            <p className="brand-description">
              Nurturing musical excellence through innovative teaching and
              classical tradition. Where passion meets precision.
            </p>

            {/* Newsletter signup */}
            <div className="newsletter-section">
              <div className="badge">
                <div className="badge-dot"></div>
                <span>Stay Updated</span>
              </div>

              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button className="subscribe-btn">
                  <span>Subscribe</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="links-grid">
            {/* Quick Links */}
            <div className="link-section">
              <h4 className="link-title">Quick Links</h4>
              <ul className="link-list">
                {quickLinks.map((link, index) => (
                  <li key={index} className="link-item">
                    <a href={link.href} className="link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="link-section">
              <h4 className="link-title">Programs</h4>
              <ul className="link-list">
                {programs.map((program, index) => (
                  <li key={index} className="link-item">
                    <a href={program.href} className="link">
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="link-section">
              <h4 className="link-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">
                    123 Music Avenue
                    <br />
                    Classical District, CD 12345
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">
                    hello@tchaikovskyschool.edu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`divider ${isVisible ? "visible" : ""}`}></div>

        {/* Bottom section */}
        <div className={`bottom-section ${isVisible ? "visible" : ""}`}>
          <div className="bottom-left">
            <p className="copyright">
              © 2024 Tchaikovsky School of Music. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#privacy" className="legal-link">
                Privacy Policy
              </a>
              <span className="separator">•</span>
              <a href="#terms" className="legal-link">
                Terms of Service
              </a>
              <span className="separator">•</span>
              <a href="#cookies" className="legal-link">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="social-section">
            <span className="social-label">Follow Us</span>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle signature */}
        <div className={`signature ${isVisible ? "visible" : ""}`}>
          <div className="signature-content">
            <span className="signature-text">
              "Music is the universal language of mankind"
            </span>
            <span className="signature-author">
              — Henry Wadsworth Longfellow
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
