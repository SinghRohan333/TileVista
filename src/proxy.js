import { NextResponse } from "next/server";
import { auth } from "./libs/auth";
import { headers } from "next/headers";

const protectedRoutes = ["/tile", "/my-profile"];
const authRoutes = ["/login", "/register"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If logged in and trying to access login/register → redirect to home
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // If not logged in and trying to access protected routes → redirect to login
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtected) return NextResponse.next();

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tile/:path*", "/my-profile/:path*", "/login", "/register"],
};
