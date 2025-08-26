"use client";

export default function GlassmorphismHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Background Layers */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: "fiexed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
            zIndex: 1,
          }}
        />

        {/* Mesh Gradient */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: `
              radial-gradient(circle at 30% 20%, rgba(107, 117, 255, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(163, 163, 163, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
            `,
            animation: "meshFloat 20s ease-in-out infinite",
            zIndex: 2,
          }}
        />

        {/* Interactive Glow */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
            zIndex: 3,
            left: "50%",
            top: "50%",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 4,
        }}
      >
        {/* Music Notes */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 0.08)",
            fontWeight: "bold",
            animation: "noteFloat 8s ease-in-out infinite",
          }}
        >
          ♪
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "15%",
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.06)",
            fontWeight: "bold",
            animation: "noteFloat 8s ease-in-out infinite",
            animationDelay: "3s",
          }}
        >
          ♫
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "20%",
            fontSize: "1.8rem",
            color: "rgba(255, 255, 255, 0.07)",
            fontWeight: "bold",
            animation: "noteFloat 8s ease-in-out infinite",
            animationDelay: "6s",
          }}
        >
          ♬
        </div>

        {/* Glow Orbs */}
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "10%",
            right: "10%",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.04)",
            animation: "orbFloat 15s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            bottom: "30%",
            left: "5%",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.015)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.03)",
            animation: "orbFloat 15s ease-in-out infinite",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50px",
              marginBottom: "2rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.7)",
              fontFamily: '"Raleway", sans-serif',
              fontWeight: "500",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#00ff88",
                borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Discover Musical Excellence
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: "700",
              lineHeight: "1.1",
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.02em",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(1rem, 3vw, 2rem)",
                margin: "0.2rem 0",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                Music
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                Blog
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                & Insights
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "600px",
              margin: "0 auto 2.5rem auto",
              fontWeight: "300",
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Discover the world of music through our expert articles on
            technique, history, education, and the art of musical expression.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                position: "relative",
                padding: "14px 32px",
                background: "rgba(255, 255, 255, 0.9)",
                color: "#000",
                border: "none",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
                fontFamily: '"Raleway", sans-serif',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 8px 30px rgba(255, 255, 255, 0.2)";
                e.target.style.background = "rgba(255, 255, 255, 1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 20px rgba(255, 255, 255, 0.1)";
                e.target.style.background = "rgba(255, 255, 255, 0.9)";
              }}
            >
              Explore Articles
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "transparent",
                color: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                fontFamily: '"Raleway", sans-serif',
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#fff";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "rgba(255, 255, 255, 0.8)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <span>Learn More</span>
              <span style={{ fontSize: "0.8rem" }}>→</span>
            </button>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: "1",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Articles
              </div>
            </div>

            <div
              style={{
                width: "1px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: "1",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                50K+
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Readers
              </div>
            </div>

            <div
              style={{
                width: "1px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: "1",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                12
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes meshFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes noteFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .title-line {
            flex-direction: column;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
}
