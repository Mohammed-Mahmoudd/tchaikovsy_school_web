"use client";

import React, { useState, useEffect } from "react";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Subtle floating elements */}
      <div className="ambient-elements">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Interactive cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
      ></div>

      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          {/* Status badge */}
          <div className="status-badge">
            <div className="status-dot"></div>
            <span>Enrollment Open — Limited Spots</span>
          </div>

          {/* Modern minimal title */}
          <h1 className="hero-title">
            <div className="title-line">
              <span className="word">TCHAIKOVSKY</span>
            </div>
          </h1>

          {/* Sleek subtitle */}
          <p className="hero-subtitle">
            Inspiring creativity and shaping the future of music education at
            Tchaikovsky School
          </p>

          {/* Modern CTA buttons */}
          <div className="cta-group">
            <button
              className="btn-primary"
              onClick={() => handleScrollToSection("contact")}
            >
              <span>Enroll Now</span>
              <div className="btn-shine"></div>
            </button>

            <button
              className="btn-ghost"
              onClick={() => handleScrollToSection("program")}
            >
              <span>View Programs</span>
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

          {/* Minimal stats */}
          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Instructors</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Student</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">3Y</span>
              <span className="stat-label">Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
