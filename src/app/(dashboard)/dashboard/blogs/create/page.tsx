"use client";

import CreateBlogForm from "@/components/modules/blogs/forms/CreateBlogForm";
import { SessionProvider } from "next-auth/react";

function CreateBlogPage() {
  return (
    <div className="container mx-auto max-w-2xl pt-10">
      <SessionProvider>
        <CreateBlogForm />
      </SessionProvider>
    </div>
  );
}

export default CreateBlogPage;
