import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import * as jose from "jose";
const secret = process.env.JWT;

export default async function middleware(req) {
  const jwt = req.cookies.get("genRecords")?.value;
  const url = req.nextUrl.clone();

  if (url.pathname === "/profilePage") {
    if (jwt === undefined) {
      url.pathname = "/auth";
      return NextResponse.redirect(url);
    }
    try {
      console.log("trying to verify jwt");
      const verifying = await jose.jwtVerify(
        jwt,
        new TextEncoder().encode(`${secret}`)
      );
      console.log("verifying", verifying);
      return NextResponse.next();
    } catch (error) {
      url.pathname = "/auth";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

const verifyJWT = () => {};
