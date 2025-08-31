"use client";

import React, { useState, useEffect } from "react";

const TchaikovskyLoading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);

  const musicalNotes = ["♪", "♫", "♬", "♭", "♯", "𝄞"];
  const loadingTexts = [
    "Tuning the instruments...",
    "Preparing the stage...",
    "Setting up the orchestra...",
    "Almost ready to begin...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete && onLoadingComplete();
            }, 500);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    // Rotate musical notes
    const noteTimer = setInterval(() => {
      setCurrentNote((prev) => (prev + 1) % musicalNotes.length);
    }, 200);

    return () => {
      clearInterval(timer);
      clearInterval(noteTimer);
    };
  }, [onLoadingComplete]);

  const currentTextIndex = Math.floor(
    (progress / 50) * (loadingTexts.length - 1)
  );

  return (
    <div className={`loading-overlay ${isExiting ? "exiting" : ""}`}>
      {/* Background Elements */}
      <div className="loading-background">
        <div className="gradient-mesh"></div>
        <div className="floating-notes">
          {musicalNotes.map((note, index) => (
            <div
              key={index}
              className={`floating-note note-${index + 1}`}
              style={{
                animationDelay: `${index * 0.8}s`,
              }}
            >
              {note}
            </div>
          ))}
        </div>
        <div className="glow-orbs">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="loading-content">
        {/* Logo/Brand */}
        <div className="loading-brand">
          <div className="brand-icon">
            <div className="musical-staff">
              <div className="staff-line"></div>
              <div className="staff-line"></div>
              <div className="staff-line"></div>
              <div className="staff-line"></div>
              <div className="staff-line"></div>
              <div className="treble-clef">𝄞</div>
            </div>
          </div>
          <h1 className="brand-title">Tchaikovsky School</h1>
          <p className="brand-subtitle">Where Music Comes Alive</p>
        </div>

        {/* Loading Progress */}
        <div className="loading-progress-section">
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="progress-glow"></div>
            </div>
            <div className="progress-text">
              <span className="progress-percentage">{progress}%</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="loading-text">
            <span className="current-note">{musicalNotes[currentNote]}</span>
            <span className="loading-message">
              {loadingTexts[currentTextIndex]}
            </span>
            <span className="current-note">{musicalNotes[currentNote]}</span>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="loading-animation">
          <div className="piano-keys">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`piano-key ${index % 2 === 0 ? "white" : "black"}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #171717;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .loading-overlay.exiting {
          opacity: 0;
          transform: scale(1.05);
        }

        .loading-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-mesh {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(255, 255, 255, 0.03) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(163, 163, 163, 0.04) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 60%,
              rgba(255, 255, 255, 0.02) 0%,
              transparent 50%
            );
          animation: meshFloat 20s ease-in-out infinite;
        }

        .floating-notes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .floating-note {
          position: absolute;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.1);
          font-weight: bold;
          animation: noteFloat 8s ease-in-out infinite;
          user-select: none;
        }

        .floating-note.note-1 {
          top: 15%;
          left: 10%;
          font-size: 2.5rem;
        }

        .floating-note.note-2 {
          top: 30%;
          right: 15%;
          font-size: 1.8rem;
        }

        .floating-note.note-3 {
          bottom: 25%;
          left: 15%;
          font-size: 2.2rem;
        }

        .floating-note.note-4 {
          top: 60%;
          right: 25%;
          font-size: 1.5rem;
        }

        .floating-note.note-5 {
          bottom: 40%;
          right: 10%;
          font-size: 2rem;
        }

        .floating-note.note-6 {
          top: 45%;
          left: 8%;
          font-size: 1.7rem;
        }

        .glow-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          animation: orbFloat 12s ease-in-out infinite;
        }

        .glow-orb.orb-1 {
          width: 150px;
          height: 150px;
          top: 15%;
          right: 12%;
          animation-delay: 0s;
        }

        .glow-orb.orb-2 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 8%;
          animation-delay: 4s;
        }

        .glow-orb.orb-3 {
          width: 80px;
          height: 80px;
          top: 50%;
          right: 5%;
          animation-delay: 8s;
          animation-direction: reverse;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          text-align: center;
          position: relative;
          z-index: 10;
          max-width: 600px;
          width: 100%;
          padding: 0 40px;
        }

        .loading-brand {
          animation: fadeInUp 1s ease-out;
        }

        .brand-icon {
          margin-bottom: 24px;
        }

        .musical-staff {
          position: relative;
          width: 120px;
          height: 80px;
          margin: 0 auto;
        }

        .staff-line {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          margin: 12px 0;
          border-radius: 1px;
          animation: staffGlow 3s ease-in-out infinite alternate;
        }

        .staff-line:nth-child(1) {
          animation-delay: 0s;
        }
        .staff-line:nth-child(2) {
          animation-delay: 0.2s;
        }
        .staff-line:nth-child(3) {
          animation-delay: 0.4s;
        }
        .staff-line:nth-child(4) {
          animation-delay: 0.6s;
        }
        .staff-line:nth-child(5) {
          animation-delay: 0.8s;
        }

        .treble-clef {
          position: absolute;
          top: -10px;
          left: -15px;
          font-size: 4rem;
          color: rgba(255, 255, 255, 0.8);
          animation: clefPulse 2s ease-in-out infinite;
        }

        .brand-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 12px 0;
          font-family: "Playfair Display", serif;
          letter-spacing: -0.02em;
        }

        .brand-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          font-family: "Raleway", sans-serif;
          font-weight: 300;
          margin: 0;
        }

        .loading-progress-section {
          width: 100%;
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .progress-container {
          margin-bottom: 24px;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          margin-bottom: 16px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 1)
          );
          border-radius: 2px;
          transition: width 0.3s ease;
          position: relative;
        }

        .progress-glow {
          position: absolute;
          top: -2px;
          right: 0;
          width: 20px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 4px;
          filter: blur(4px);
          animation: progressGlow 2s ease-in-out infinite;
        }

        .progress-text {
          text-align: center;
        }

        .progress-percentage {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: "Raleway", sans-serif;
          font-weight: 600;
        }

        .loading-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: "Raleway", sans-serif;
          font-weight: 400;
          animation: textPulse 3s ease-in-out infinite;
        }

        .current-note {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.5);
          animation: notePulse 1.5s ease-in-out infinite;
        }

        .loading-message {
          min-height: 1.2em;
          display: flex;
          align-items: center;
        }

        .loading-animation {
          animation: fadeInUp 1.4s ease-out 0.6s both;
        }

        .piano-keys {
          display: flex;
          gap: 2px;
          align-items: flex-end;
          justify-content: center;
        }

        .piano-key {
          width: 8px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.2);
          animation: keyPress 2s ease-in-out infinite;
        }

        .piano-key.white {
          height: 32px;
          background: rgba(255, 255, 255, 0.3);
        }

        .piano-key.black {
          height: 20px;
          background: rgba(255, 255, 255, 0.15);
        }

        /* Animations */
        @keyframes meshFloat {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }

        @keyframes noteFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
          75% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes staffGlow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes clefPulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05) rotate(2deg);
            opacity: 1;
          }
        }

        @keyframes progressGlow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes textPulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes notePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes keyPress {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: scaleY(1.3);
            opacity: 0.6;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .loading-content {
            gap: 40px;
            padding: 0 20px;
          }

          .brand-title {
            font-size: clamp(2rem, 8vw, 2.8rem);
          }

          .musical-staff {
            width: 100px;
            height: 70px;
          }

          .treble-clef {
            font-size: 3rem;
            top: -8px;
            left: -12px;
          }

          .floating-note {
            font-size: 1.5rem;
          }

          .floating-note.note-1 {
            font-size: 2rem;
          }
          .floating-note.note-3 {
            font-size: 1.8rem;
          }

          .glow-orb.orb-1 {
            width: 100px;
            height: 100px;
          }

          .glow-orb.orb-2 {
            width: 60px;
            height: 60px;
          }

          .glow-orb.orb-3 {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .loading-content {
            gap: 30px;
          }

          .loading-text {
            flex-direction: column;
            gap: 8px;
          }

          .piano-keys {
            gap: 1px;
          }

          .piano-key {
            width: 6px;
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component with Loading Integration
const TchaikovskyApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div>
      {/* Loading Layer */}
      {isLoading && (
        <TchaikovskyLoading onLoadingComplete={handleLoadingComplete} />
      )}
    </div>
  );
};

export default TchaikovskyApp;
