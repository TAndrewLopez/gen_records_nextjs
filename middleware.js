import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/profilePage")) {
    const { authorization } = request.headers;
    if (!authorization) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
}
