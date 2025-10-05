"use client";

import { updateBlog } from "@/actions/updateBlog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlogSchema } from "@/schema/blog-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

function UpdateBlogForm({
  postData,
}: {
  postData: { title: string; content: string; id: number };
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: postData.title,
      content: postData.content,
    },
  });

  async function onSubmit(values: z.infer<typeof createBlogSchema>) {
    console.log("*** from update form ***", values);
    const slug = `${values.title.toLowerCase()}-blog`;
    const post = await updateBlog({
      ...values,
      authorId: 1,
      slug,
      id: postData.id,
    });
    console.log(post);
    if (post.id) {
      toast.success("Blog updated successfully");
      router.push("/dashboard/blogs");
    }
    if (!post) {
      toast.error("Something went wrong");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your blog"
                  className="resize-none"
                  rows={10}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default UpdateBlogForm;
