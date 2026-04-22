import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostById, getAllPosts, getAuthorById } from '../../lib/api';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map(post => ({ params: { id: post.id } }));
  return { paths, fallback: 'blocking' }; // [cite: 158]
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  if (!post) return { notFound: true };
  const author = await getAuthorById(post.authorId);
  return { props: { post, author }, revalidate: 60 };
};

export default function PostPage({ post, author }: any) {
  return (
    <article className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="italic text-gray-600">By {author?.name}</p>
      <div className="mt-6 leading-relaxed">{post.content}</div>
    </article>
  );
}