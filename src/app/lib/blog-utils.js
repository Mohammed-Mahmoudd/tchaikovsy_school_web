// src/lib/blog-utils.js

// Mock blog data for testing
const mockBlogs = [
  {
    id: 1,
    slug: "introduction-to-classical-music",
    title: "Introduction to Classical Music: A Beginner's Guide",
    excerpt:
      "Discover the beauty and complexity of classical music with our comprehensive beginner's guide. Learn about different periods, composers, and how to appreciate this timeless art form.",
    content: `
      <h2>What is Classical Music?</h2>
      <p>Classical music is a broad term that typically refers to the formal musical tradition of the Western world, considered distinct from Western folk music or popular music traditions.</p>
      
      <h3>Historical Periods</h3>
      <p>Classical music is generally divided into several periods:</p>
      <ul>
        <li><strong>Baroque (1600-1750):</strong> Bach, Vivaldi, Handel</li>
        <li><strong>Classical (1750-1820):</strong> Mozart, Haydn, early Beethoven</li>
        <li><strong>Romantic (1820-1900):</strong> Chopin, Liszt, Tchaikovsky</li>
        <li><strong>Modern (1900-present):</strong> Stravinsky, Debussy, contemporary composers</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>The best way to appreciate classical music is to listen actively. Start with popular pieces like Beethoven's Symphony No. 9 or Mozart's Eine kleine Nachtmusik.</p>
      
      <blockquote>
        <p>"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p>
      </blockquote>
    `,
    author: "Maria Tchaikovsky",
    date: "2024-12-15",
    modifiedDate: "2024-12-15",
    image: "/images/blog/classical-music-intro.png",
    tags: ["classical music", "beginner", "education", "music theory"],
    category: "Education",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "piano-practice-techniques",
    title: "Essential Piano Practice Techniques for Students",
    excerpt:
      "Master effective piano practice methods that will accelerate your learning and improve your technique. These proven strategies work for beginners and advanced students alike.",
    content: `
      <h2>The Foundation of Good Practice</h2>
      <p>Effective piano practice is not about the quantity of time spent, but the quality of that time. Here are essential techniques every student should know.</p>
      
      <h3>1. Slow Practice</h3>
      <p>Always start slowly. This allows you to:</p>
      <ul>
        <li>Focus on accuracy</li>
        <li>Build muscle memory correctly</li>
        <li>Identify and fix mistakes early</li>
      </ul>
      
      <h3>2. Mental Practice</h3>
      <p>Practice doesn't always require a piano. Mental rehearsal can be incredibly effective:</p>
      <ul>
        <li>Visualize finger movements</li>
        <li>Hear the music in your mind</li>
        <li>Analyze the musical structure</li>
      </ul>
      
      <h3>3. Targeted Practice</h3>
      <p>Instead of playing through entire pieces, focus on problem areas. Break difficult passages into small sections and practice them repeatedly.</p>
      
      <h3>4. Use a Metronome</h3>
      <p>A metronome is your best friend for developing steady rhythm and tempo control. Start slow and gradually increase the speed.</p>
    `,
    author: "Alexander Petrov",
    date: "2024-12-10",
    modifiedDate: "2024-12-12",
    image: "/images/blog/piano-practice.png",
    tags: ["piano", "practice", "technique", "students"],
    category: "Technique",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "benefits-of-music-education",
    title: "The Cognitive Benefits of Music Education for Children",
    excerpt:
      "Research shows that music education significantly enhances cognitive development in children. Discover how learning music can improve academic performance and brain function.",
    content: `
      <h2>Science-Backed Benefits</h2>
      <p>Numerous studies have demonstrated the positive impact of music education on children's cognitive development.</p>
      
      <h3>Enhanced Memory and Attention</h3>
      <p>Learning to play an instrument requires intense focus and memory work, which strengthens these cognitive abilities for use in other areas of life.</p>
      
      <h3>Improved Mathematical Skills</h3>
      <p>Music and mathematics share many similarities:</p>
      <ul>
        <li>Pattern recognition</li>
        <li>Fractional understanding (rhythms)</li>
        <li>Spatial-temporal reasoning</li>
      </ul>
      
      <h3>Language Development</h3>
      <p>Music education enhances language skills by:</p>
      <ul>
        <li>Improving phonological awareness</li>
        <li>Enhancing listening skills</li>
        <li>Developing better pronunciation</li>
      </ul>
      
      <h3>Social and Emotional Benefits</h3>
      <p>Group music activities teach cooperation, empathy, and emotional expression while building confidence and self-esteem.</p>
      
      <h2>Starting Early</h2>
      <p>While it's never too late to start learning music, early exposure (ages 3-7) can maximize these cognitive benefits during critical brain development periods.</p>
    `,
    author: "Dr. Elena Rostova",
    date: "2024-12-08",
    modifiedDate: "2024-12-08",
    image: "/images/blog/music-education-benefits.png",
    tags: ["music education", "children", "cognitive development", "research"],
    category: "Education",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "famous-composers-history",
    title: "Famous Composers Who Changed Music History",
    excerpt:
      "Explore the lives and contributions of legendary composers whose innovations shaped the musical landscape. From Bach's mathematical precision to Beethoven's revolutionary spirit.",
    content: `
      <h2>The Giants of Classical Music</h2>
      <p>Throughout history, certain composers have fundamentally changed how we understand and appreciate music.</p>
      
      <h3>Johann Sebastian Bach (1685-1750)</h3>
      <p>Bach perfected the art of counterpoint and created mathematical masterpieces that continue to influence musicians today. His Well-Tempered Clavier remains essential study material for all pianists.</p>
      
      <h3>Wolfgang Amadeus Mozart (1756-1791)</h3>
      <p>A child prodigy who composed over 600 works in his short life. Mozart's music represents the perfect balance of technical skill and emotional expression.</p>
      
      <h3>Ludwig van Beethoven (1770-1827)</h3>
      <p>Beethoven bridged the Classical and Romantic periods, expanding the emotional and structural possibilities of music despite his progressive hearing loss.</p>
      
      <h3>Frédéric Chopin (1810-1849)</h3>
      <p>Known as the "poet of the piano," Chopin elevated piano music to new artistic heights with his nocturnes, études, and ballades.</p>
      
      <h3>Pyotr Ilyich Tchaikovsky (1840-1893)</h3>
      <p>Russia's most famous composer, Tchaikovsky created beloved ballets like Swan Lake and The Nutcracker, along with powerful symphonies and concertos.</p>
      
      <h2>Their Lasting Impact</h2>
      <p>These composers didn't just create beautiful music—they established techniques, forms, and styles that continue to influence musicians across all genres today.</p>
    `,
    author: "Prof. Vladimir Stasov",
    date: "2024-12-05",
    modifiedDate: "2024-12-06",
    image: "/images/blog/famous-composers.png",
    tags: ["composers", "history", "classical music", "biography"],
    category: "History",
    readTime: "8 min read",
  },
];

// Utility functions
export async function getAllBlogs() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogBySlug(slug) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockBlogs.find((blog) => blog.slug === slug) || null;
}

export async function getBlogsByCategory(category) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockBlogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getBlogsByTag(tag) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockBlogs.filter((blog) =>
    blog.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export async function getRelatedBlogs(currentSlug, limit = 3) {
  const currentBlog = await getBlogBySlug(currentSlug);
  if (!currentBlog) return [];

  // Find blogs with similar tags or same category
  const related = mockBlogs
    .filter((blog) => blog.slug !== currentSlug)
    .filter(
      (blog) =>
        blog.category === currentBlog.category ||
        blog.tags.some((tag) => currentBlog.tags.includes(tag))
    )
    .slice(0, limit);

  return related;
}

export function getAllCategories() {
  const categories = [...new Set(mockBlogs.map((blog) => blog.category))];
  return categories.sort();
}

export function getAllTags() {
  const tags = [...new Set(mockBlogs.flatMap((blog) => blog.tags))];
  return tags.sort();
}

export function generateBlogSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
