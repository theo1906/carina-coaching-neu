import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const OLD_TO_NEW_PATHS = {
  '/dienstleistungen/essstorung': '/dienstleistungen/essstoerungen-coaching',
  '/dienstleistungen/spiritual': '/dienstleistungen/spirituelles-life-coaching',
} as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip if this is already a new URL
  if (pathname.startsWith('/dienstleistungen/essstoerungen-coaching') || 
      pathname.startsWith('/dienstleistungen/spirituelles-life-coaching')) {
    return NextResponse.next();
  }
  
  // Check if this is an old URL that needs to be redirected
  for (const [oldPath, newPath] of Object.entries(OLD_TO_NEW_PATHS)) {
    if (pathname.startsWith(oldPath)) {
      const newUrl = new URL(pathname.replace(oldPath, newPath), request.url);
      return NextResponse.redirect(newUrl);
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/dienstleistungen/essstorung/:path*',
    '/dienstleistungen/spiritual/:path*',
    // Add new paths to handle redirects
    '/dienstleistungen/essstoerungen-coaching/:path*',
    '/dienstleistungen/spirituelles-life-coaching/:path*',
  ],
};
