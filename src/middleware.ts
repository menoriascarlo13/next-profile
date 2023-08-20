/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { FORBIDDEN_PATH } from './configs/const';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // console.log(request.url);
  // return NextResponse.redirect(new URL('/', request.url));
  // const language = request.nextUrl.locale;
  // if (language) {
  //   const response = NextResponse.rewrite(new URL(`_static/home`, request.url));
  //   return response;
  // }
  // const forbiddenPath = FORBIDDEN_PATH.some((prefix) => request.nextUrl.pathname.startsWith(prefix));
  // const imagePathMatch = request.nextUrl.pathname.match(/(gif|jpg|jpeg|tiff|png)$/g);
  // if (!forbiddenPath || !imagePathMatch) {
  //   const response = NextResponse.rewrite(new URL(`_static${request.nextUrl.pathname}`, request.url));
  //   return response;
  // }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|^.png$).*)'
  ]
};
