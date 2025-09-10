import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const OLD_TO_NEW_PATHS = {
  '/dienstleistungen/essstorung': '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  '/dienstleistungen/essstoerungen-coaching': '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  '/dienstleistungen/spiritual': '/dienstleistungen/spirituelles-life-coaching',
} as const;

const NEW_PATHS = [
  '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  '/dienstleistungen/spirituelles-life-coaching',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip if this is already a new URL
  if (NEW_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // Check if this is an old URL that needs to be redirected
  for (const [oldPath, newPath] of Object.entries(OLD_TO_NEW_PATHS)) {
    if (pathname.startsWith(oldPath)) {
      const newUrl = new URL(pathname.replace(oldPath, newPath), request.url);
      return NextResponse.redirect(newUrl, 308); // 308 is permanent redirect
    }
  }

  return NextResponse.next();
}

// Match all paths that start with any of these patterns
export const config = {
  matcher: [
    '/dienstleistungen/:path*',
  ],
};
