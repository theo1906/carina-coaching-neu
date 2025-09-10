import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Redirects for service pages
  if (pathname.startsWith('/dienstleistungen/essstorung')) {
    const newPath = pathname.replace(
      '/dienstleistungen/essstorung', 
      '/dienstleistungen/essstoerungen-coaching'
    );
    return NextResponse.redirect(new URL(newPath, request.url));
  }
  
  if (pathname.startsWith('/dienstleistungen/spiritual')) {
    const newPath = pathname.replace(
      '/dienstleistungen/spiritual', 
      '/dienstleistungen/spirituelles-life-coaching'
    );
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/dienstleistungen/essstorung/:path*',
    '/dienstleistungen/spiritual/:path*',
  ],
};
