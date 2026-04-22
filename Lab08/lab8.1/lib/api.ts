import { Post, Author } from "../types";

const authors: Author[] = [
  { 
    id: "1", 
    name: "Altynai Ybraikhan", 
    bio: "Student & Developer", 
    avatar: "https://ui-avatars.com/api/?name=Altynai+Y&background=0D8ABC&color=fff" 
  },
  { 
    id: "2", 
    name: "Jane Smith", 
    bio: "React Expert", 
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=7b1fa2&color=fff" 
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Mastering Next.js SSR and SSG",
    excerpt: "Learn how to build high-performance applications with Next.js.",
    content: "Next.js allows you to pre-render pages using SSG and SSR...",
    authorId: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding Incremental Static Regeneration",
    excerpt: "How to update static content without rebuilding your entire site.",
    content: "ISR is one of the most powerful features of Next.js...",
    authorId: "2",
    date: "2026-03-05",
    tags: ["webdev", "isr"],
    readTime: 3,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((a) => a.id === id);
}