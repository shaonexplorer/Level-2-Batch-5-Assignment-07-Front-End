"use server";

export const updateBlog = async (payload: {
  id: number;
  title: string;
  content: string;
  authorId: number;
  slug: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post/${payload.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const post = await response.json();

    console.log(post);

    return post.data;
  } catch (error) {
    console.log(error);
  }
};
