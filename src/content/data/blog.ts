import { BlogPost } from '../types/types';

export const blogHero = {
  title: "Blog",
  description: "Insights, copywriting tips, and strategies to help you communicate better and grow your business."
};

export const featuredCategories = [
  "Copywriting",
  "Marketing",
  "Branding",
  "Career Advice",
  "Business Tips"
];

export const blogPosts: BlogPost[] = [
  {
    id: "rewriting-career-story",
    title: "Rewriting Your Career Story: How I Pivoted to Copywriting in My 30s (and You Can Too)",
    excerpt: "Changing careers in your 30s might sound scary, but it could be the best decision you ever make. Here's my journey from legal billing to copywriting, and the lessons I learned along the way.",
    coverImage: "/images/new_chapter.jpeg",
    date: "2025-02-15",
    slug: "rewriting-career-story",
    tags: ["Career Advice", "Copywriting", "Personal Story"]
  },
  {
    id: "website-copy-tips",
    title: "Blog Post Title Two",
    excerpt: "It all begins with an idea.",
    coverImage: "/images/new_chapter.jpeg",
    date: "2025-02-01",
    slug: "website-copy-tips",
    tags: ["Copywriting", "Website Copy"]
  },
  {
    id: "client-communication",
    title: "Blog Post Title Three",
    excerpt: "It all begins with an idea.",
    coverImage: "/images/new_chapter.jpeg",
    date: "2025-01-15",
    slug: "client-communication",
    tags: ["Business Tips", "Client Relations"]
  },
  {
    id: "seo-basics",
    title: "Blog Post Title Four",
    excerpt: "It all begins with an idea.",
    coverImage: "/images/new_chapter.jpeg",
    date: "2025-01-01",
    slug: "seo-basics",
    tags: ["SEO", "Marketing"]
  }
];

// Sample blog post content - this could go in a separate file for each post
// e.g., src/content/blog-posts/rewriting-career-story.ts
export const sampleBlogPostContent = {
  id: "rewriting-career-story",
  title: "Rewriting Your Career Story: How I Pivoted to Copywriting in My 30s (and You Can Too)",
  publishDate: "February 15, 2025",
  author: "Ashley Rudolph",
  authorBio: "Founder of The Copy Social, copywriter, and career changer who's passionate about helping others find their voice.",
  coverImage: "/images/new_chapter.jpeg",
  featured: true,
  tags: ["Career Advice", "Copywriting", "Personal Story"],
  content: [
    {
      type: "paragraph",
      text: "When I turned 30, I was settled in a stable career as a legal billing specialist. It paid the bills (no pun intended), I was good at it, and it offered security. But something was missing—passion, creativity, and a sense of purpose. Sound familiar?"
    },
    {
      type: "heading",
      level: "h2",
      text: "The Moment I Knew I Needed a Change"
    },
    {
      type: "paragraph",
      text: "It wasn't a dramatic realization or a sudden epiphany. Instead, it was the quiet Sunday evening dread that grew louder each week. The feeling that I was merely existing rather than thriving. As each year passed, I found myself wondering: Is this it? Is this all there is to my professional life?"
    },
    {
      type: "paragraph",
      text: "That's when I started exploring copywriting. The idea of using words to help businesses connect with their audience—of blending creativity with strategy—felt like exactly what I'd been looking for."
    },
    {
      type: "heading",
      level: "h2",
      text: "Taking the Leap (Without Falling Flat on My Face)"
    },
    {
      type: "paragraph",
      text: "Changing careers in your 30s comes with real concerns. Mortgage payments don't pause while you figure things out. Responsibilities don't disappear because you're reinventing yourself. So how did I do it? Step by careful step."
    },
    // Additional content sections would go here
    {
      type: "callout",
      text: "Changing careers isn't about throwing away your experience—it's about reframing it. Every skill you've developed has value, even in a completely different field."
    },
    // More content sections
    {
      type: "conclusion",
      text: "If you're feeling that same Sunday evening dread, know that it's never too late to rewrite your career story. The skills that make you successful in one field often translate to another in surprising ways. My background in legal billing gave me attention to detail and client management skills that serve me well as a copywriter. Your unique background is an asset, not a limitation."
    }
  ],
  relatedPosts: ["website-copy-tips", "client-communication"],
  cta: {
    heading: "Ready to explore copywriting as a career?",
    text: "I offer 1:1 mentoring sessions for aspiring copywriters looking to break into the industry.",
    buttonText: "Learn More",
    buttonLink: "/services#mentoring"
  }
};

export const blogCta = {
  text: "Want to stay updated with the latest insights and tips?",
  buttonText: "Subscribe to the Newsletter",
  buttonLink: "/subscribe"
};

export const metaInfo = {
  title: "Blog | The Copy Social",
  description: "Tips, strategies, and insights on copywriting, marketing, and building a successful business through effective communication."
};
