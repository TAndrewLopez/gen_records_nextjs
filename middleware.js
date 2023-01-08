import { NextResponse } from "next/server";
import * as jose from "jose";
const secret = process.env.JWT;

const middleware = async (req) => {
  const jwt = req.cookies.get("genRecords")?.value;
  const url = req.nextUrl.clone();

  if (url.pathname === "/profilePage") {
    if (jwt === undefined) {
      url.pathname = "/auth";
      return NextResponse.redirect(url);
    }

    try {
      await jose.jwtVerify(jwt, new TextEncoder().encode(`${secret}`));
      return NextResponse.next();
    } catch (error) {
      url.pathname = "/auth";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
};

export default middleware;
