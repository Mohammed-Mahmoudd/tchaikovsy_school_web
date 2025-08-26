"use client";

import React, { useState, useEffect, useRef } from "react";

const ProgramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
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
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  // Responsive helper functions
  const isMobile = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;
  const isSmallMobile = screenSize.width <= 480;

  const getResponsiveValue = (desktop, tablet, mobile, smallMobile) => {
    if (isSmallMobile && smallMobile !== undefined) return smallMobile;
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  const programs = [
    {
      icon: "🎹",
      title: "Piano Mastery",
      description:
        "From classical foundations to contemporary techniques. Master the keys with personalized instruction and performance opportunities.",
      level: "Beginner to Advanced",
      duration: "6-24 Months",
      gradient:
        "linear-gradient(135deg, rgba(107, 117, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      accent: "#6b75ff",
    },
    {
      icon: "🎻",
      title: "Violin Excellence",
      description:
        "Embrace the elegance of strings. Learn proper technique, musicality, and expression in our comprehensive violin program.",
      level: "All Levels",
      duration: "8-30 Months",
      gradient:
        "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      accent: "#ff6b6b",
    },
    {
      icon: "🎸",
      title: "Guitar Journey",
      description:
        "Acoustic and electric mastery. From fingerpicking to shredding, discover your unique sound and style.",
      level: "Beginner to Pro",
      duration: "4-18 Months",
      gradient:
        "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      accent: "#ffc107",
    },
    {
      icon: "🎤",
      title: "Vocal Artistry",
      description:
        "Unlock your voice's potential. Technique, breath control, and performance skills for every genre and style.",
      level: "All Ages",
      duration: "3-15 Months",
      gradient:
        "linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      accent: "#00ff88",
    },
  ];

  // Dynamic styles based on screen size
  const dynamicStyles = {
    programSection: {
      position: "relative",
      minHeight: getResponsiveValue("100vh", "auto", "auto", "auto"),
      padding: getResponsiveValue("80px 0", "60px 0", "40px 0", "30px 0"),
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    contentWrapper: {
      maxWidth: "1400px",
      width: "100%",
      padding: getResponsiveValue("0 40px", "0 32px", "0 20px", "0 16px"),
      display: "flex",
      flexDirection: "column",
      gap: getResponsiveValue("60px", "50px", "40px", "32px"),
    },

    programsGrid: {
      display: "grid",
      gridTemplateColumns: getResponsiveValue(
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "1fr",
        "1fr"
      ),
      gap: getResponsiveValue("30px", "24px", "20px", "16px"),
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
    },

    programCard: {
      position: "relative",
      background: "rgba(255, 255, 255, 0.04)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: getResponsiveValue("24px", "20px", "18px", "16px"),
      padding: getResponsiveValue("32px", "28px", "24px", "20px"),
      cursor: "pointer",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    },

    programIconContainer: {
      width: getResponsiveValue("56px", "52px", "48px", "44px"),
      height: getResponsiveValue("56px", "52px", "48px", "44px"),
      background: "rgba(255, 255, 255, 0.06)",
      backdropFilter: "blur(15px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: getResponsiveValue("16px", "14px", "12px", "10px"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    },

    programIcon: {
      fontSize: getResponsiveValue("1.8rem", "1.6rem", "1.4rem", "1.2rem"),
      display: "block",
    },

    programTitle: {
      fontSize: getResponsiveValue("1.4rem", "1.3rem", "1.2rem", "1.1rem"),
      fontWeight: 600,
      color: "#fff",
      marginBottom: "0",
      lineHeight: 1.3,
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    },

    programDescription: {
      fontSize: getResponsiveValue("0.95rem", "0.9rem", "0.85rem", "0.8rem"),
      lineHeight: 1.6,
      color: "rgba(255, 255, 255, 0.75)",
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      marginBottom: "8px",
    },

    programButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: getResponsiveValue(
        "10px 20px",
        "9px 18px",
        "8px 16px",
        "7px 14px"
      ),
      background: "rgba(255, 255, 255, 0.05)",
      color: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "12px",
      fontSize: getResponsiveValue("0.85rem", "0.8rem", "0.75rem", "0.7rem"),
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      marginTop: "4px",
    },

    ctaCard: {
      maxWidth: "600px",
      width: "100%",
      textAlign: "center",
      padding: getResponsiveValue("40px", "32px", "24px", "20px"),
      background: "rgba(255, 255, 255, 0.06)",
      backdropFilter: "blur(25px)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: getResponsiveValue("24px", "20px", "18px", "16px"),
    },

    ctaTitle: {
      fontSize: getResponsiveValue("1.8rem", "1.6rem", "1.4rem", "1.3rem"),
      fontWeight: 600,
      color: "#fff",
      marginBottom: "12px",
      lineHeight: 1.3,
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    },

    ctaButtons: {
      display: "flex",
      gap: getResponsiveValue("16px", "14px", "12px", "12px"),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
      flexWrap: "wrap",
    },

    primaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: getResponsiveValue(
        "14px 28px",
        "12px 24px",
        "12px 20px",
        "10px 18px"
      ),
      background: "rgba(255, 255, 255, 0.9)",
      color: "#000",
      border: "none",
      borderRadius: "50px",
      fontSize: getResponsiveValue("1rem", "0.95rem", "0.9rem", "0.85rem"),
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      width: isMobile ? "100%" : "auto",
      justifyContent: isMobile ? "center" : "flex-start",
    },

    secondaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: getResponsiveValue(
        "14px 28px",
        "12px 24px",
        "12px 20px",
        "10px 18px"
      ),
      background: "transparent",
      color: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50px",
      fontSize: getResponsiveValue("1rem", "0.95rem", "0.9rem", "0.85rem"),
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(20px)",
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      width: isMobile ? "100%" : "auto",
      justifyContent: isMobile ? "center" : "flex-start",
    },
  };

  return (
    <section ref={sectionRef} style={dynamicStyles.programSection} id="program">
      {/* Multi-layered Background Effects */}
      <div style={styles.backgroundLayers}>
        {/* Base gradient overlay */}
        <div style={styles.gradientOverlay}></div>

        {/* Animated mesh gradient */}
        <div style={styles.meshGradient}></div>

        {/* Interactive glow following mouse - hide on mobile */}
        {!isMobile && (
          <div
            style={{
              ...styles.interactiveGlow,
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
            }}
          ></div>
        )}

        {/* Floating musical elements - simplified on mobile */}
        <div style={styles.floatingElements}>
          <div
            style={{
              ...styles.musicSymbol,
              ...styles.symbol1,
              fontSize: getResponsiveValue("2rem", "1.5rem", "1.2rem", "1rem"),
              opacity: getResponsiveValue("0.06", "0.05", "0.03", "0.02"),
            }}
          >
            𝄞
          </div>
          <div
            style={{
              ...styles.musicSymbol,
              ...styles.symbol2,
              fontSize: getResponsiveValue(
                "1.5rem",
                "1.2rem",
                "1rem",
                "0.8rem"
              ),
              opacity: getResponsiveValue("0.06", "0.05", "0.03", "0.02"),
            }}
          >
            𝄢
          </div>
          <div
            style={{
              ...styles.musicSymbol,
              ...styles.symbol3,
              fontSize: getResponsiveValue(
                "1.3rem",
                "1.1rem",
                "0.9rem",
                "0.7rem"
              ),
              opacity: getResponsiveValue("0.06", "0.05", "0.03", "0.02"),
            }}
          >
            ♭
          </div>
          <div
            style={{
              ...styles.musicSymbol,
              ...styles.symbol4,
              fontSize: getResponsiveValue(
                "1.7rem",
                "1.3rem",
                "1.1rem",
                "0.9rem"
              ),
              opacity: getResponsiveValue("0.06", "0.05", "0.03", "0.02"),
            }}
          >
            ♯
          </div>

          {/* Hide glow orbs on mobile for performance */}
          {!isMobile && (
            <>
              <div style={{ ...styles.glowOrb, ...styles.orb1 }}></div>
              <div style={{ ...styles.glowOrb, ...styles.orb2 }}></div>
              <div style={{ ...styles.glowOrb, ...styles.orb3 }}></div>
            </>
          )}
        </div>
      </div>

      <div style={styles.container}>
        <div style={dynamicStyles.contentWrapper}>
          {/* Header Section */}
          <div
            style={{
              ...styles.header,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              style={{
                ...styles.badge,
                padding: getResponsiveValue(
                  "8px 20px",
                  "7px 18px",
                  "6px 16px",
                  "5px 14px"
                ),
                fontSize: getResponsiveValue(
                  "0.85rem",
                  "0.8rem",
                  "0.75rem",
                  "0.7rem"
                ),
              }}
            >
              <div style={styles.badgeDot}></div>
              <span>Our Programs</span>
            </div>

            <h2
              style={{
                ...styles.title,
                fontSize: getResponsiveValue(
                  "4.5rem",
                  "3.5rem",
                  "2.5rem",
                  "2rem"
                ),
              }}
            >
              Master Your <span style={styles.accent}>Craft</span>
            </h2>

            <p
              style={{
                ...styles.subtitle,
                fontSize: getResponsiveValue(
                  "1.25rem",
                  "1.1rem",
                  "1rem",
                  "0.9rem"
                ),
              }}
            >
              Choose your musical journey with world-class instruction and
              personalized learning paths
            </p>
          </div>

          {/* Programs Grid */}
          <div style={dynamicStyles.programsGrid}>
            {programs.map((program, index) => (
              <div
                key={index}
                style={{
                  ...dynamicStyles.programCard,
                  background: program.gradient,
                  transform:
                    hoveredProgram === index && !isMobile
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  opacity: isVisible ? 1 : 0,
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${0.1 + index * 0.1}s`,
                  borderColor:
                    hoveredProgram === index
                      ? `${program.accent}40`
                      : "rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={() => !isMobile && setHoveredProgram(index)}
                onMouseLeave={() => !isMobile && setHoveredProgram(null)}
              >
                {/* Card glow effect on hover */}
                <div
                  style={{
                    ...styles.cardGlow,
                    opacity: hoveredProgram === index && !isMobile ? 1 : 0,
                    background: `radial-gradient(circle at center, ${program.accent}20 0%, transparent 70%)`,
                  }}
                ></div>

                <div style={styles.programContent}>
                  {/* Icon Section */}
                  <div
                    style={{
                      ...styles.programIconSection,
                      flexDirection: isSmallMobile ? "column" : "row",
                      alignItems: isSmallMobile ? "flex-start" : "flex-start",
                      gap: isSmallMobile ? "12px" : "0",
                    }}
                  >
                    <div
                      style={{
                        ...dynamicStyles.programIconContainer,
                        borderColor:
                          hoveredProgram === index
                            ? `${program.accent}40`
                            : "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span style={dynamicStyles.programIcon}>
                        {program.icon}
                      </span>
                    </div>

                    <div
                      style={{
                        ...styles.programLevel,
                        alignSelf: isSmallMobile ? "flex-end" : "auto",
                      }}
                    >
                      <span
                        style={{
                          ...styles.levelText,
                          fontSize: getResponsiveValue(
                            "0.75rem",
                            "0.7rem",
                            "0.65rem",
                            "0.6rem"
                          ),
                        }}
                      >
                        {program.level}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={styles.programInfo}>
                    <h3 style={dynamicStyles.programTitle}>{program.title}</h3>
                    <p style={dynamicStyles.programDescription}>
                      {program.description}
                    </p>

                    <div style={styles.programMeta}>
                      <div style={styles.metaItem}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.5)"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12,6 12,12 16,14" />
                        </svg>
                        <span>{program.duration}</span>
                      </div>
                    </div>

                    <button
                      style={{
                        ...dynamicStyles.programButton,
                        backgroundColor:
                          hoveredProgram === index
                            ? `${program.accent}20`
                            : "rgba(255, 255, 255, 0.05)",
                        borderColor:
                          hoveredProgram === index
                            ? `${program.accent}60`
                            : "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <span>Learn More</span>
                      <svg
                        width="14"
                        height="14"
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
            ))}
          </div>

          {/* Call to Action */}
          <div
            style={{
              ...styles.ctaSection,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
            }}
          >
            <div style={dynamicStyles.ctaCard}>
              <h3 style={dynamicStyles.ctaTitle}>
                Ready to Begin Your Musical Journey?
              </h3>
              <p
                style={{
                  ...styles.ctaText,
                  fontSize: getResponsiveValue(
                    "1rem",
                    "0.95rem",
                    "0.9rem",
                    "0.85rem"
                  ),
                }}
              >
                Book a consultation to find the perfect program for your goals
              </p>

              <div style={dynamicStyles.ctaButtons}>
                <button
                  style={dynamicStyles.primaryButton}
                  onClick={() => handleScrollToSection("contact")}
                >
                  <span>Book Consultation</span>
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
                <button style={dynamicStyles.secondaryButton}>
                  <span>View Schedule</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes meshFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(3deg); }
          }

          @keyframes symbolFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(8deg); }
          }

          @keyframes orbFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  backgroundLayers: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.6) 100%)",
    zIndex: 1,
  },

  meshGradient: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: `
      radial-gradient(circle at 25% 25%, rgba(107, 117, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.02) 0%, transparent 50%)
    `,
    animation: "meshFloat 25s ease-in-out infinite",
    zIndex: 2,
  },

  interactiveGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s ease-out",
    zIndex: 3,
  },

  floatingElements: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 4,
  },

  musicSymbol: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.06)",
    fontWeight: "bold",
    animation: "symbolFloat 12s ease-in-out infinite",
  },

  symbol1: {
    top: "10%",
    left: "8%",
    animationDelay: "0s",
  },

  symbol2: {
    top: "20%",
    right: "10%",
    animationDelay: "3s",
  },

  symbol3: {
    bottom: "25%",
    left: "15%",
    animationDelay: "6s",
  },

  symbol4: {
    top: "65%",
    right: "20%",
    animationDelay: "9s",
  },

  glowOrb: {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.015)",
    backdropFilter: "blur(40px)",
    border: "1px solid rgba(255, 255, 255, 0.03)",
    animation: "orbFloat 18s ease-in-out infinite",
  },

  orb1: {
    width: "120px",
    height: "120px",
    top: "15%",
    right: "12%",
    animationDelay: "0s",
  },

  orb2: {
    width: "80px",
    height: "80px",
    bottom: "35%",
    left: "8%",
    animationDelay: "6s",
  },

  orb3: {
    width: "100px",
    height: "100px",
    top: "55%",
    right: "8%",
    animationDelay: "12s",
    animationDirection: "reverse",
  },

  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 10,
  },

  header: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "50px",
    marginBottom: "24px",
    backdropFilter: "blur(20px)",
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: "500",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    background: "#00ff88",
    borderRadius: "50%",
    animation: "pulse 2s ease-in-out infinite",
  },

  title: {
    fontWeight: 700,
    lineHeight: 1.1,
    margin: "0 0 24px 0",
    letterSpacing: "-0.02em",
    color: "rgba(255, 255, 255, 0.95)",
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  accent: {
    background: "linear-gradient(45deg, #6b75ff, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: 300,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  cardGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  },

  programContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  programIconSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  programLevel: {
    padding: "4px 12px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  levelText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: "500",
  },

  programInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  programMeta: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "8px",
  },

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.8rem",
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  ctaSection: {
    display: "flex",
    justifyContent: "center",
  },

  ctaText: {
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "32px",
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },
};

export default ProgramSection;
