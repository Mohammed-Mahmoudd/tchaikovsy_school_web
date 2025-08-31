"use client";
import { useState } from "react";

export default function OtherNames({ names = [], initialCount = 2 }) {
  const [showAll, setShowAll] = useState(false);

  const visibleNames = showAll ? names : names.slice(0, initialCount);
  const remainingCount = names.length - initialCount;

  return (
    <div style={{ margin: "30px 0" }}>
      <p>Other Names:</p>

      {visibleNames.map((name, idx) => (
        <p
          key={idx}
          style={{
            background: "gray",
            padding: "2px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          {name}
        </p>
      ))}

      {names.length > initialCount && (
        <span
          onClick={() => setShowAll(!showAll)}
          style={{ cursor: "pointer", color: "blue", marginLeft: "5px" }}
        >
          {showAll ? "Show Less" : `+${remainingCount} More`}
        </span>
      )}
    </div>
  );
}
