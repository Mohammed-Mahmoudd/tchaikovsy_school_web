"use client";

import Link from "next/link";
import Image from "next/image";

function FeaturedBlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        className="featured-blog-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative", minHeight: "400px" }}>
          <Image
            src={blog.image || "/images/blog/default.jpg"}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            {blog.category}
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              style={{ color: "#ccc", fontSize: "0.9rem", marginLeft: "15px" }}
            >
              {blog.readTime}
            </span>
          </div>

          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "15px",
              lineHeight: "1.3",
              color: "#fff",
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#ddd",
              marginBottom: "20px",
            }}
          >
            {blog.excerpt}
          </p>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "auto" }}
          >
            <span style={{ color: "#fff", fontWeight: "500" }}>
              By {blog.author}
            </span>
            <div
              style={{
                marginLeft: "auto",
                padding: "10px 20px",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                borderRadius: "25px",
                fontSize: "0.9rem",
                fontWeight: "500",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                transition: "all 0.3s ease",
              }}
            >
              Read More →
            </div>
          </div>
        </div>
      </article>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .featured-blog-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Link>
  );
}

export default FeaturedBlogCard;
