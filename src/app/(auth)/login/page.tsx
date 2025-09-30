import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  const logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  };
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Link href="/" className="flex items-center gap-2 my-8">
        <Image
          src={logo.src}
          width={32}
          height={32}
          className="max-h-8 dark:invert"
          alt={logo.alt}
        />
        <span className="text-lg font-semibold tracking-tighter">
          {logo.title}
        </span>
      </Link>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
