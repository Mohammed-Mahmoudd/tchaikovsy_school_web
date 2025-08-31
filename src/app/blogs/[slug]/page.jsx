import { getBlogBySlug, getAllBlogs } from "../../lib/blog-utils";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import HeroBackground from "./heroBackground";
import FAQComponent from "./FAQ";
import FixedButton from "./FixedButton";
import LoadingLayer from "@/components/LoadingLayer";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    publishedTime: blog.date,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://yourdomain.com/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: blog.image ? [blog.image] : [],
    },
    twitter: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    datePublished: blog.date,
    dateModified: blog.modifiedDate || blog.date,
    publishedTime: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blogs/${blog.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Your App Name",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .blog-content p {
            margin-bottom: 20px;
          }
          
          .blog-content h2 {
            font-size: 1.8rem;
            color: #2c3e50;
            margin: 30px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          
          .blog-content h3 {
            font-size: 1.4rem;
            color: #34495e;
            margin: 25px 0 15px 0;
          }
          
          .whatsapp-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            text-decoration: none;
            color: #128C7E;
          }
          
          @media (max-width: 768px) {
            .blog-container {
              padding: 15px;
            }
            
            .blog-title {
              font-size: 2rem;
            }
            
            .blog-meta {
              flex-direction: column;
              gap: 10px;
            }
            
            .blog-content {
              font-size: 1rem;
            }
            
            .whatsapp-section {
              padding: 20px;
            }
          }
        `,
        }}
      />

      <section
        style={{
          marginTop: "40px",
          width: "100%",
          height: "600px",
          position: "relative",
          zIndex: 6,
        }}
      >
        <HeroBackground />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "100%",
            zIndex: 3,
            width: "100%",
          }}
        >
          <div>
            <h1>{blog.title}</h1>
            <nav
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                marginTop: "15px",
                color: "#ffffffa0",
              }}
            >
              <a href="./" style={{ color: "#ffffff", textDecoration: "none" }}>
                Home
              </a>
              <span style={{ margin: "0 8px", color: "#ffffff60" }}>›</span>
              <a
                href="/blogs"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Blogs
              </a>
              <span style={{ margin: "0 8px", color: "#ffffff60" }}>›</span>
              <span style={{ color: "#ffffffcf" }}>{blog.category}</span>
            </nav>

            <button
              className="btn-primary"
              style={{ marginTop: "20px", display: "inline-Block" }}
            >
              Chat With Us Now
            </button>
          </div>
        </div>
      </section>

      <section style={{ margin: "50px 50px" }}>
        <h1>{blog.title}: </h1>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>

      <FAQComponent />
      <FixedButton />
      <LoadingLayer />
      <Footer />
    </>
  );
}
