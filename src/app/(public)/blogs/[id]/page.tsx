import { Blogpost1 } from "@/components/blogpost1";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post`);
  const posts = await res.json();
  return posts.data.map((post: { id: number }) => {
    return { id: post.id.toString() };
  });
};

async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post/${id}`
  );
  const post = await res.json();
  return (
    <div className="container mx-auto">
      <Blogpost1 post={post.data} />
    </div>
  );
}

export default BlogDetailsPage;
