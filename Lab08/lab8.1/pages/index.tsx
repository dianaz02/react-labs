import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { Post } from '../types';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog (SSG + ISR)</h1>
      {posts.map(post => (
        <div key={post.id} className="border-b py-4">
          <Link href={`/posts/${post.id}`} className="text-xl text-blue-600 font-semibold hover:underline">
            {post.title}
          </Link>
          <p className="text-gray-500">{post.excerpt}</p>
        </div>
      ))}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts }, revalidate: 60 }; // ISR включен [cite: 128]
};