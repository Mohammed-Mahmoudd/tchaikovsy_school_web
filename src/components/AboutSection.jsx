"use client";

import React, { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
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

  const features = [
    {
      icon: "🎼",
      title: "Classical Mastery",
      description:
        "Deep dive into Tchaikovsky's masterpieces and classical repertoire",
    },
    {
      icon: "🎹",
      title: "Modern Teaching",
      description: "Cutting-edge methods blended with time-honored traditions",
    },
    {
      icon: "🎵",
      title: "Artistic Expression",
      description: "Develop your unique voice through music and performance",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="about-section">
      {/* Multi-layered Background */}
      <div className="background-layers">
        {/* Layer 1: Base gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Layer 2: Animated mesh gradient */}
        <div className="mesh-gradient"></div>

        {/* Layer 3: Interactive glow */}
        <div
          className="interactive-glow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        ></div>

        {/* Layer 4: Floating elements */}
        <div className="floating-elements">
          <div className="music-note note-1">♪</div>
          <div className="music-note note-2">♫</div>
          <div className="music-note note-3">♬</div>

          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
      </div>

      <div className="about-container">
        <div className="content-wrapper">
          {/* Compact Header */}
          <div className={`about-header ${isVisible ? "visible" : ""}`}>
            <div className="about-badge">
              <div className="badge-dot"></div>
              <span>About Tchaikovsky School</span>
            </div>

            <h2 className="about-title">
              Where <span className="title-accent">Music</span> Lives
            </h2>

            <p className="about-subtitle">
              Nurturing musical excellence through innovative teaching and
              classical tradition
            </p>
          </div>

          {/* Main Content - Responsive Layout */}
          <div className={`main-content ${isVisible ? "visible" : ""}`}>
            {/* Features Grid - Responsive positioning */}
            <div className="features-section">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${
                    hoveredCard === index ? "hovered" : ""
                  } ${isVisible ? "visible" : ""}`}
                  style={{
                    transitionDelay: `${0.1 + index * 0.1}s`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="feature-card-content">
                    <div className="feature-icon-container">
                      <div className="feature-icon">{feature.icon}</div>
                    </div>
                    <div className="feature-text-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-text">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Story Card - Responsive positioning */}
            <div className="story-section">
              <div className="story-card">
                <h3 className="story-title">15 Years of Excellence</h3>
                <p className="story-text">
                  From passionate beginnings to becoming a renowned institution,
                  we've shaped over 500 musicians who now perform worldwide. Our
                  unique approach combines Tchaikovsky's emotional depth with
                  modern pedagogical innovation.
                </p>

                <div className="quick-stats">
                  <div className="stat-quick">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Graduates</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-quick">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-quick">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`cta-section ${isVisible ? "visible" : ""}`}>
            <button
              className="btn-primary"
              onClick={() => handleScrollToSection("program")}
            >
              <span>Discover Our Programs</span>
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
    </section>
  );
};

export default AboutSection;
