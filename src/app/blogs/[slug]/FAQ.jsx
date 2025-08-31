// components/FAQ.js
"use client";
import { useState, useEffect } from "react";
import styles from "../../../components/FAQ.module.css";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const faqData = [
    {
      question: "What makes your service unique?",
      answer:
        "Our platform combines cutting-edge technology with intuitive design to deliver an unparalleled user experience. We focus on innovation, reliability, and exceptional customer support to ensure your success.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Sign up for a free account, complete the onboarding process, and you'll have access to all our core features. Our team is here to guide you through every step of your journey.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team consists of experts who are ready to help you solve any challenge you might face.",
    },
    {
      question: "Can I customize the platform for my needs?",
      answer:
        "Absolutely! Our platform is highly customizable with extensive API integrations, custom workflows, and personalized dashboards. You can tailor the experience to match your specific requirements and branding.",
    },
    {
      question: "What are your pricing plans?",
      answer:
        "We offer flexible pricing plans designed to scale with your business. From our free starter plan to enterprise solutions, we have options that fit every budget and requirement. Contact us for a personalized quote.",
    },
    {
      question: "Is my data secure with you?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with international data protection standards including GDPR and SOC 2. Your data is always protected and never shared with third parties.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className={styles.faqSection} onMouseMove={handleMouseMove}>
      {/* Background Effects */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingOrb} ${styles.orb1}`}></div>
        <div className={`${styles.floatingOrb} ${styles.orb2}`}></div>
        <div className={`${styles.floatingOrb} ${styles.orb3}`}></div>
        <div className={styles.gradientMesh}></div>
      </div>

      <div
        className={styles.cursorGlow}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      ></div>

      <div className={styles.faqContainer}>
        {/* Header */}
        <div className={styles.faqHeader}>
          <div className={styles.faqBadge}>
            <div className={styles.badgeDot}></div>
            <span>Frequently Asked Questions</span>
            <span className={styles.sparkle}>✨</span>
          </div>

          <h2 className={styles.faqTitle}>Got Questions?</h2>

          <p className={styles.faqSubtitle}>
            Find answers to the most common questions about our platform and
            services. Can't find what you're looking for? Reach out to our
            support team.
          </p>
        </div>

        {/* FAQ List */}
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={styles.faqQuestion}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <div
                  className={`${styles.faqIcon} ${
                    activeIndex === index ? styles.iconRotated : ""
                  }`}
                >
                  <span className={styles.iconLine}></span>
                  <span className={styles.iconLineCross}></span>
                </div>
              </button>

              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.answerOpen : ""
                }`}
              >
                <div className={styles.faqAnswerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.faqCta}>
          <div className={styles.ctaCard}>
            <span className={styles.ctaText}>Still have questions?</span>
            <button className={styles.ctaButton}>Contact Support</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
