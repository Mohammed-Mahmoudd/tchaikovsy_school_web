"use client";

import React from "react";

function NewsletterSignup() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)", // شفافية زجاجية
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderRadius: "25px",
        padding: "60px 40px",
        textAlign: "center",
        color: "#fff",
        marginTop: "80px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
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
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "1rem",
            outline: "none",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        />

        <button
          style={{
            padding: "15px 30px",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.background = "rgba(255,255,255,0.25)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "rgba(255,255,255,0.15)";
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsletterSignup;
