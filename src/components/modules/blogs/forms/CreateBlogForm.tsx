"use client";

import { createBlogSchema } from "@/schema/blog-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/actions/createBlog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CreateBlogForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createBlogSchema>) {
    const slug = `${values.title.toLowerCase()}-blog`;
    const post = await createBlog({ ...values, authorId: 7, slug });
    console.log(post);
    if (post.id) {
      toast.success("Blog created successfully");
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

export default CreateBlogForm;
