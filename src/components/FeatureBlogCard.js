"use client";

// Featured Blog Card Component
import Link from "next/link";
import Image from "next/image";

function FeaturedBlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
        }}
      >
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
              background: "rgba(0,0,0,0.8)",
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

        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ color: "#666", fontSize: "0.9rem" }}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              style={{ color: "#666", fontSize: "0.9rem", marginLeft: "15px" }}
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
              color: "#333",
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            {blog.excerpt}
          </p>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "auto" }}
          >
            <span style={{ color: "#333", fontWeight: "500" }}>
              By {blog.author}
            </span>
            <div
              style={{
                marginLeft: "auto",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #333 0%, #666 100%)",
                color: "white",
                borderRadius: "25px",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Read More →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
export default FeaturedBlogCard;
