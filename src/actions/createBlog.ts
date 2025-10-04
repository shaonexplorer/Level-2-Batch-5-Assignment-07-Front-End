"use server";

import { revalidateTag } from "next/cache";

export const createBlog = async (payload: {
  title: string;
  content: string;
  authorId: number;
  slug: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const post = await response.json();

    console.log(post);

    revalidateTag("POST");

    return post.data;
  } catch (error) {
    console.log(error);
  }
};
