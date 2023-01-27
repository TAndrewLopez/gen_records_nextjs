import { NextResponse } from "next/server";

const handler = async (request) => {
  const cookie = request.cookies.get("genRecords")?.value;
  const { pathname } = request.nextUrl.clone();

  if (pathname === "/auth" && cookie) {
    return NextResponse.redirect(new URL("/profilePage", request.url));
  }
  if (pathname === "/profilePage" && !cookie) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
};

export default handler;
