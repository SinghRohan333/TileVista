import { NextResponse } from "next/server";
import { auth } from "./libs/auth";
import { headers } from "next/headers";

const protectedRoutes = ["/tile", "/my-profile"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtected) return NextResponse.next();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tile/:path*", "/my-profile/:path*"],
};
