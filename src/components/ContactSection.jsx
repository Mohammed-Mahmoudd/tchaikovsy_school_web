"use client";

import React, { useState, useEffect, useRef } from "react";

const ContactSection = () => {
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
    };
  }, []);

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our School",
      content:
        "123 Music Avenue\nSymphony District, New York\nNY 10001, United States",
      action: "Get Directions",
      link: "https://maps.google.com",
      gradient:
        "linear-gradient(135deg, rgba(107, 117, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
      accent: "#6b75ff",
      category: "Location",
    },
    {
      icon: "📞",
      title: "Call Us Now",
      content: "+1 (555) 123-MUSIC\nMon-Fri: 9AM - 8PM\nSat-Sun: 10AM - 6PM",
      action: "Call Now",
      link: "tel:+15551236874",
      gradient:
        "linear-gradient(135deg, rgba(0, 255, 136, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
      accent: "#00ff88",
      category: "Phone",
    },
    {
      icon: "✉️",
      title: "Email Us",
      content:
        "info@tchairovskyschool.com\nadmissions@tchairovskyschool.com\nResponse within 24 hours",
      action: "Send Email",
      link: "mailto:info@tchairovskyschool.com",
      gradient:
        "linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
      accent: "#ff6b6b",
      category: "Email",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com",
      color: "#1877f2",
    },
    {
      name: "Instagram",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "YouTube",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com",
      color: "#FF0000",
    },
    {
      name: "Twitter",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      url: "https://twitter.com",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com",
      color: "#0077B5",
    },
  ];

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      {/* Multi-layered Background Effects */}
      <div className="background-layers">
        <div className="gradient-overlay"></div>
        <div className="mesh-gradient"></div>
        <div
          className="interactive-glow"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        ></div>

        {/* Floating musical elements */}
        <div className="floating-elements">
          <div className="music-note note1">♪</div>
          <div className="music-note note2">♫</div>
          <div className="music-note note3">♬</div>
          <div className="music-note note4">♩</div>
          <div className="music-note note5">𝄞</div>

          <div className="glow-orb orb1"></div>
          <div className="glow-orb orb2"></div>
          <div className="glow-orb orb3"></div>
        </div>
      </div>

      <div className="container">
        <div className="content-wrapper">
          {/* Header Section */}
          <div className={`header ${isVisible ? "visible" : ""}`}>
            <div className="badge">
              <div className="badge-dot"></div>
              <span>Get In Touch</span>
            </div>

            <h2 className="title">
              Let's <span className="accent">Connect</span>
            </h2>

            <p className="subtitle">
              Ready to start your musical journey? Reach out to us through any
              of these channels and let's make beautiful music together
            </p>
          </div>

          {/* Main Contact Cards Section */}
          <div className="main-contact-section">
            {/* Contact Information Cards */}
            <div className={`contact-grid ${isVisible ? "visible" : ""}`}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`contact-card ${
                    hoveredCard === index ? "hovered" : ""
                  } ${isVisible ? "visible" : ""}`}
                  style={{
                    background: info.gradient,
                    transitionDelay: `${0.1 + index * 0.1}s`,
                    "--accent-color": info.accent,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card category badge */}
                  <div
                    className="category-badge"
                    style={{
                      background: `${info.accent}15`,
                      color: info.accent,
                      borderColor: `${info.accent}25`,
                    }}
                  >
                    {info.category}
                  </div>

                  {/* Card glow effect */}
                  <div
                    className="card-glow"
                    style={{
                      background: `radial-gradient(circle at center, ${info.accent}20 0%, transparent 70%)`,
                    }}
                  ></div>

                  <div className="card-content">
                    <div className="card-header">
                      <div className="icon-container">
                        <span className="card-icon">{info.icon}</span>
                      </div>
                      <h3 className="card-title">{info.title}</h3>
                    </div>

                    <div className="card-body">
                      <p className="card-text">{info.content}</p>
                    </div>

                    <div className="card-footer">
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button"
                      >
                        <span>{info.action}</span>
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Actions Section */}
          <div className="secondary-actions-grid">
            {/* WhatsApp CTA Section */}
            <div className={`whatsapp-section ${isVisible ? "visible" : ""}`}>
              <div className="whatsapp-card">
                <div className="whatsapp-content">
                  <div className="whatsapp-icon-wrapper">
                    <div className="whatsapp-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                      </svg>
                    </div>
                  </div>
                  <div className="whatsapp-text">
                    <h3 className="whatsapp-title">Start a Conversation?</h3>
                    <p className="whatsapp-subtitle">
                      Chat with us instantly for immediate assistance
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/15551236874?text=Hi! I'm interested in learning more about Tchaikovsky Music School programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className={`social-section ${isVisible ? "visible" : ""}`}>
              <div className="social-card">
                <div className="social-header">
                  <div className="social-icon-container">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 4H9c-2.76 0-5 2.24-5 5s2.24 5 5 5h6c1.1 0 2 .9 2 2s-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1H5v1c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5s-2.24-5-5-5H9c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2v1h2V9c0-2.76-2.24-5-5-5z" />
                    </svg>
                  </div>
                  <h3 className="social-title">Follow Our Musical Journey</h3>
                  <p className="social-subtitle">
                    Stay connected and see our students' amazing performances
                  </p>
                </div>

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${isVisible ? "visible" : ""}`}
                      style={{
                        "--social-color": social.color,
                        transitionDelay: `${0.1 * index}s`,
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
