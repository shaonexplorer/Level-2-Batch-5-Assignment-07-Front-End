import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title is required and must be 3 characters long"),
  content: z
    .string()
    .min(10, "Content is required and must be 10 characters long"),
  image: z.string("Image is required"),
});
