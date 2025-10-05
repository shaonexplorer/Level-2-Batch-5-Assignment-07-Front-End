"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const deletePost = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post/${id}`,
      { method: "DELETE" }
    );

    const data = await res.json();
    revalidateTag("POST");
    revalidatePath("dashboard/blogs");
    return data;
  } catch (error) {
    console.log(error);
  }
};
