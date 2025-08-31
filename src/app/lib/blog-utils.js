// src/lib/blog-utils.js

import { sanityClient } from "@/../sanityClient";

// Helper function to map Sanity image to URL
const getImageUrl = (image) => {
  if (!image) return "";
  // If image is already a URL, return it directly
  if (typeof image === "string") return image;
  // If image has an asset with _ref
  if (image.asset?._ref) {
    const ref = image.asset._ref;
    const parts = ref.split("-");
    const id = parts[1];
    const format = parts[2];
    const dimensions = parts[3];
    const [width, height] = dimensions.split("x");
    return `https://cdn.sanity.io/images/${
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    }/${
      process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
    }/${id}-${format}.${format}?w=1200&h=630&fit=crop`;
  }
  // If image has a direct URL
  if (image.asset?.url) return image.asset.url;
  // If image has a URL field
  if (image.url) return image.url;
  return "";
};

// Helper function to format date
const formatDateString = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// Helper function to calculate read time
const calculateReadTime = (content) => {
  if (!content) return "2 min read";
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// Utility functions
export async function getAllBlogs() {
  try {
    const query = `*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      author,
      "image": image{
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      category,
      content,
      excerpt,
      tags,
      _createdAt,
      _updatedAt
    }`;

    const data = await sanityClient.fetch(query);

    // Transform data to match expected format
    return data.map((post) => ({
      ...post,
      image: getImageUrl(post.image),
      date: formatDateString(post._createdAt),
      modifiedDate: formatDateString(post._updatedAt),
      readTime: calculateReadTime(post.content),
      slug: post.slug?.current || "",
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      "image": image{
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      category,
      content,
      excerpt,
      tags,
      _createdAt,
      _updatedAt
    }`;

    const params = { slug };
    const post = await sanityClient.fetch(query, params);

    if (!post) return null;

    // Transform data to match expected format
    return {
      ...post,
      image: getImageUrl(post.image),
      date: formatDateString(post._createdAt),
      modifiedDate: formatDateString(post._updatedAt),
      readTime: calculateReadTime(post.content),
      slug: post.slug?.current || "",
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getBlogsByCategory(category) {
  try {
    const query = `*[_type == "post" && category == $category] | order(_createdAt desc) {
      _id,
      title,
      slug,
      author,
      "image": image{
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      category,
      excerpt,
      _createdAt,
      _updatedAt
    }`;

    const params = { category };
    const posts = await sanityClient.fetch(query, params);

    return posts.map((post) => ({
      ...post,
      image: getImageUrl(post.image),
      date: formatDateString(post._createdAt),
      modifiedDate: formatDateString(post._updatedAt),
      readTime: calculateReadTime(post.content),
      slug: post.slug?.current || "",
    }));
  } catch (error) {
    console.error(`Error fetching blogs for category ${category}:`, error);
    return [];
  }
}

export async function getBlogsByTag(tag) {
  try {
    const query = `*[_type == "post" && $tag in tags[]->title] | order(_createdAt desc) {
      _id,
      title,
      slug,
      author,
      "image": image{
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      category,
      excerpt,
      tags[]->{title},
      _createdAt,
      _updatedAt
    }`;

    const params = { tag };
    const posts = await sanityClient.fetch(query, params);

    return posts.map((post) => ({
      ...post,
      image: getImageUrl(post.image),
      date: formatDateString(post._createdAt),
      modifiedDate: formatDateString(post._updatedAt),
      readTime: calculateReadTime(post.content),
      slug: post.slug?.current || "",
      tags: post.tags?.map((t) => t.title) || [],
    }));
  } catch (error) {
    console.error(`Error fetching blogs with tag ${tag}:`, error);
    return [];
  }
}

export async function getRelatedBlogs(currentSlug, limit = 3) {
  try {
    const currentBlog = await getBlogBySlug(currentSlug);
    if (!currentBlog) return [];

    // Get all blogs except the current one
    const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  author,
  "imageUrl": image.asset->url,   
  category,
  content,
  excerpt,
  tags,
  _createdAt,
  _updatedAt
}
`;

    const params = { currentSlug };
    const allBlogs = await sanityClient.fetch(query, params);

    // Transform and filter related blogs
    const related = allBlogs
      .map((post) => ({
        ...post,
        image: getImageUrl(post.image),
        date: formatDateString(post._createdAt),
        modifiedDate: formatDateString(post._updatedAt),
        readTime: calculateReadTime(post.content),
        slug: post.slug?.current || "",
        tags: post.tags?.map((t) => t.title) || [],
      }))
      .filter(
        (blog) =>
          blog.category === currentBlog.category ||
          (blog.tags &&
            blog.tags.some((tag) => currentBlog.tags?.includes(tag)))
      )
      .slice(0, limit);

    return related;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

export async function getAllCategories() {
  try {
    const query = `*[_type == "post"] {
      category
    }`;

    const categories = await sanityClient.fetch(query);
    const uniqueCategories = [
      ...new Set(categories.map((item) => item.category)),
    ];
    return uniqueCategories.sort();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getAllTags() {
  try {
    const query = `*[_type == "tag"] {
      title
    }`;

    const tags = await sanityClient.fetch(query);
    return tags.map((tag) => tag.title).sort();
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}

export function generateBlogSlug(title) {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
