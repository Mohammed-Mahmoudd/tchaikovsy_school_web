"use client";

import React from "react";

function NewsletterSignup() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
        borderRadius: "20px",
        padding: "60px 40px",
        textAlign: "center",
        color: "white",
        marginTop: "80px",
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        Stay in Tune with Our Latest Articles
      </h3>

      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "30px",
          opacity: "0.9",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        Get weekly insights on music education, technique tips, and classical
        music appreciation delivered to your inbox.
      </p>

      <div
        style={{
          display: "flex",
          maxWidth: "400px",
          margin: "0 auto",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            flex: "1",
            minWidth: "250px",
            padding: "15px 20px",
            borderRadius: "25px",
            border: "none",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        <button
          style={{
            padding: "15px 30px",
            background: "white",
            color: "#333",
            border: "none",
            borderRadius: "25px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsletterSignup;
