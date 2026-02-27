import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const PAGES_DIR = path.join(process.cwd(), "content", "pages");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  tags: string[];
  keywords: string[];
  reading_time: number;
  related_posts: string[];
  internal_links: { anchor: string; href: string }[];
  content: string;
  schema_type: string;
  hero_image?: string;
  hero_image_alt?: string;
  hero_image_credit?: string;
  hero_image_credit_url?: string;
  mid_image?: string;
  mid_image_alt?: string;
  mid_image_credit?: string;
  mid_image_credit_url?: string;
}

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  date: string;
  h1: string;
  category: string;
  keywords: string[];
  content: string;
  schema_type: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        ...data,
        slug: file.replace(".mdx", ""),
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...data, slug, content } as BlogPost;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getAllLandingPages(): LandingPage[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  const files = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(PAGES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      ...data,
      slug: file.replace(".mdx", ""),
      content,
    } as LandingPage;
  });
}

export function getLandingPage(slug: string): LandingPage | null {
  const filePath = path.join(PAGES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...data, slug, content } as LandingPage;
}

export interface FAQ {
  question: string;
  answer: string;
}

export function extractFAQs(content: string): FAQ[] {
  const faqs: FAQ[] = [];
  const lines = content.split("\n");
  let inFaqSection = false;
  let currentQuestion = "";
  let currentAnswer: string[] = [];

  for (const line of lines) {
    if (line.match(/^##\s+Frequently Asked Questions/)) {
      inFaqSection = true;
      continue;
    }

    if (inFaqSection && line.match(/^##\s/) && !line.match(/^###\s/)) {
      // Hit a new H2 section — end of FAQ
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join(" ").trim(),
        });
      }
      break;
    }

    if (inFaqSection && line.match(/^###\s/)) {
      // Save previous Q&A
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join(" ").trim(),
        });
      }
      currentQuestion = line.replace(/^###\s+/, "");
      currentAnswer = [];
      continue;
    }

    if (inFaqSection && currentQuestion) {
      const trimmed = line.trim();
      if (trimmed) {
        currentAnswer.push(trimmed);
      }
    }
  }

  // Capture last FAQ
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.join(" ").trim(),
    });
  }

  return faqs;
}

export function getAllLandingSlugs(): string[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
