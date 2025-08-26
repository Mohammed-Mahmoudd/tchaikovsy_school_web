// src/components/ClientPageWrapper.js
"use client";

import { useEffect } from "react";

export default function ClientPageWrapper({ children }) {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return <main>{children}</main>;
}
