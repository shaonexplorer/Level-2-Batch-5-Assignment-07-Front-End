"use server";

import { revalidateTag } from "next/cache";

interface IPayload {
  title: string;
  content: string;
  authorId: string;
  slug: string;
  image: File;
}

export const createBlog = async (payload: IPayload) => {
  try {
    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      const typedKey = key as keyof IPayload;
      formData.append(typedKey, payload[typedKey]);
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post`,
      {
        method: "POST",
        body: formData,
      }
    );
    const post = await response.json();

    console.log(post);

    revalidateTag("POST");

    return post.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
