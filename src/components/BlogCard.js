"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  console.log(blog, "blogggggggggggggggggdfdfggggggggggggggggggg");
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        style={{
          background: "rgba(255, 255, 255, 0.05)", // شفافية زجاجية
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";
        }}
      >
        {/* Image */}
        <div
          style={{ position: "relative", height: "220px", overflow: "hidden" }}
        >
          <Image
            src={
              blog.image ||
              "https://cdn.sanity.io/images/qc6ng20a/production/5e841ffc4d2395fa10ffd35c6641d86f354bc020-1216x832.png"
            }
            alt={blog.title}
            fill
            style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />

          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "15px",
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            {blog.category}
          </div>

          {/* Read Time Badge */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "15px",
              fontSize: "0.8rem",
              fontWeight: "500",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            {blog.readTime}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Date and Author */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              fontSize: "0.9rem",
              color: "#ccc",
            }}
          >
            <time>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span>By {blog.author}</span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginBottom: "12px",
              lineHeight: "1.3",
              color: "#fff",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#ddd",
              marginBottom: "20px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: "0.95rem",
            }}
          >
            <span>Read Article</span>
            <span
              style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}
            >
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
