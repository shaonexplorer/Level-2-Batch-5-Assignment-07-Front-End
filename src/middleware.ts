// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Define the protected routes
const protectedRoutes = ["/dashboard"];
const authRoutes = ["/login"];

export function middleware(request: NextRequest) {
  // 2. Check for an authentication token (e.g., in a cookie)
  const isAuthenticated =
    request.cookies.has("next-auth.session-token") ||
    request.cookies.has("__Secure-next-auth.session-token");
  const pathname = request.nextUrl.pathname;

  // 3. Logic for protecting routes
  if (protectedRoutes.includes(pathname) && !isAuthenticated) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    // Optional: add a 'redirect' search param to go back after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Prevent authenticated users from visiting auth pages
  if (authRoutes.includes(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }

  return NextResponse.next();
}

// 5. Specify which paths the middleware should run on
export const config = {
  // Match all paths except those starting with _next/static, _next/image, public assets, etc.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
