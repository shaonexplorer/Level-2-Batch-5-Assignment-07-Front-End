import { loginACtion } from "@/actions/login";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied

        try {
          const user = await loginACtion(
            credentials as { email: string; password: string }
          );

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: { signIn: "/login" },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};
