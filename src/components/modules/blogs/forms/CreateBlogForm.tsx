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
import ImageUploader from "@/components/comp-545";
import { useFileUpload } from "@/hooks/use-file-upload";

function CreateBlogForm() {
  const router = useRouter();
  const maxSizeMB = 2;
  const maxSize = maxSizeMB * 1024 * 1024; // 2MB default

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  });
  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createBlogSchema>) {
    const id = toast.loading("Creating Post...");
    const slug = `${values.title.toLowerCase()}-blog`;
    const post = await createBlog({
      ...values,
      authorId: "7",
      slug,
      image: files[0].file as File,
    });
    console.log(post);
    if (post?.id) {
      toast.success("Blog created successfully", { id });
      router.push("/dashboard/blogs");
    }
    if (!post) {
      toast.error("Something went wrong", { id });
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

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <ImageUploader
                  handleDragEnter={handleDragEnter}
                  handleDragLeave={handleDragLeave}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  isDragging={isDragging}
                  getInputProps={getInputProps}
                  previewUrl={previewUrl}
                  files={files}
                  maxSizeMB={maxSizeMB}
                  openFileDialog={openFileDialog}
                  removeFile={removeFile}
                  errors={errors}
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
