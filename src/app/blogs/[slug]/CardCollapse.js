"use client";
import { useState } from "react";

export default function ExpandableCard({
  title,
  content,
  initialHeight = 100,
  id,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "15px",
      }}
    >
      <h1 id={id} style={{ marginLeft: "10px" }}>
        {title}
      </h1>
      <div
        style={{
          maxHeight: expanded ? "none" : `${initialHeight}px`,
          overflow: "hidden",
          margin: "30px 0",
          transition: "max-height 0.3s ease",
        }}
      >
        <p>{content}</p>
      </div>
      <span
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {expanded ? "Show Less" : "Show More"}
      </span>
    </div>
  );
}
