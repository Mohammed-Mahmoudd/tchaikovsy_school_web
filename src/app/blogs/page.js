// src/app/blogs/page.js
import Link from "next/link";
import Image from "next/image";
import { getAllBlogs, getAllCategories } from "@/app/lib/blog-utils";
import BlogCard from "@/components/BlogCard";
import BlogFilters from "@/components/BlogFilters";
import FeaturedBlogCard from "@/components/FeatureBlogCard";
import NewsletterSignup from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import BlogBackground from "@/components/blogBackground";
import GlassmorphismHero from "@/components/BlogHero";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  const categories = getAllCategories();

  return (
    <main style={{ paddingTop: "90px", minHeight: "100vh" }}>
      {/* Hero Section */}
      <GlassmorphismHero />

      {/* Main Content */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}
      >
        {/* Filters */}

        {/* Featured Post */}
        {blogs.length > 0 && (
          <div style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "30px",
                textAlign: "center",
                background: "linear-gradient(135deg, #333 0%, #666 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Featured Article
            </h2>
            <FeaturedBlogCard blog={blogs[0]} />
          </div>
        )}

        {/* Blog Grid */}
        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "40px",
              textAlign: "center",
              color: "#333",
            }}
          >
            Latest Articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {blogs.slice(1).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </section>
      <Footer />
      <BlogBackground />
    </main>
  );
}
