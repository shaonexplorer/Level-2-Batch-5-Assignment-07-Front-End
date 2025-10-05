import UpdateBlogForm from "@/components/modules/blogs/forms/updateBlogForm";

async function UpdateBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post/${id}`
  );
  const post = await res.json();

  return (
    <div className="container mx-auto max-w-2xl pt-10">
      <UpdateBlogForm postData={post.data} />
    </div>
  );
}

export default UpdateBlogPage;
