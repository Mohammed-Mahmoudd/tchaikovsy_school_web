import { getBlogBySlug, getAllBlogs } from "../../lib/blog-utils";
import { notFound } from "next/navigation";
import WhatsAppButton from "./WhatsappButton";
import Footer from "@/components/Footer";

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

  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hi! I read your blog post "${blog.title}" and would like to get in touch.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", serif',
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
    paddingBottom: "30px",
    borderBottom: "2px solid #eee",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "20px",
    fontWeight: "700",
    lineHeight: "1.2",
  };

  const metaStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "20px",
  };

  const authorStyle = {
    fontWeight: "600",
    color: "#34495e",
  };

  const dateStyle = {
    background: "#f8f9fa",
    padding: "5px 12px",
    borderRadius: "15px",
    border: "1px solid #e9ecef",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const contentStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "40px",
  };

  const whatsappSectionStyle = {
    background: "linear-gradient(135deg, #25D366, #128C7E)",
    color: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    margin: "40px 0",
    boxShadow: "0 8px 25px rgba(37, 211, 102, 0.3)",
  };

  const whatsappTitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const whatsappTextStyle = {
    fontSize: "1rem",
    marginBottom: "25px",
    opacity: "0.9",
  };

  const whatsappBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "white",
    color: "#25D366",
    padding: "12px 25px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
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

      <main style={{ paddingTop: "70px" }}>
        <div className="blog-container" style={containerStyle}>
          <article>
            <header className="blog-header" style={headerStyle}>
              <h1 className="blog-title" style={titleStyle}>
                {blog.title}
              </h1>
              <div className="blog-meta" style={metaStyle}>
                <span className="blog-author" style={authorStyle}>
                  By {blog.author}
                </span>
                <time
                  className="blog-date"
                  style={dateStyle}
                  dateTime={blog.date}
                >
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {blog.image && (
                <img src={blog.image} alt={blog.title} style={imageStyle} />
              )}
            </header>

            <div
              className="blog-content"
              style={contentStyle}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* WhatsApp CTA Section */}
            <div className="whatsapp-section" style={whatsappSectionStyle}>
              <h3 style={whatsappTitleStyle}>💬 Let's Connect!</h3>
              <p style={whatsappTextStyle}>
                Have questions about this article or want to discuss your
                project? I'm just a message away!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                style={whatsappBtnStyle}
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </article>
        </div>

        {/* Client Component for Sticky Button */}
        <WhatsAppButton whatsappUrl={whatsappUrl} />
        <Footer />
      </main>
    </>
  );
}
