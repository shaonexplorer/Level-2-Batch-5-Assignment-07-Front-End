import { Blog7 } from "@/components/blog7";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Portfolio App",
  description:
    "This is the all blogs page built with Next.js and Tailwind CSS.",
};

function BlogPage() {
  return <Blog7 />;
}

export default BlogPage;
