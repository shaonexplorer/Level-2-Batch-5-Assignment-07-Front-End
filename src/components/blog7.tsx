import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  content: string;
  label?: string;
  author?: string;
  published?: string;
  url?: string;
  imageUrl: string;
}

interface Blog7Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog7 = async ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
}: Blog7Props) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/post`,
    { next: { tags: ["POST"] } }
  );
  const posts = await res.json();
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          {/* <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.data.slice(0, 6).map((post: Post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 overflow-hidden"
            >
              <div className="aspect-16/9 w-full">
                <Link
                  href={`/blogs/${post.id}`}
                  className="transition-opacity duration-200 fade-in hover:opacity-70 "
                >
                  <Image
                    src={
                      post.imageUrl ||
                      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    }
                    alt={post.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl line-clamp-2">
                  <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent className=" ">
                <p className="text-muted-foreground line-clamp-5">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blogs/${post.id}`}
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
