import { NextResponse } from 'next/server';

export function proxy(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/products/:path*',
};
