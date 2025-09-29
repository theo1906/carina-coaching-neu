import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const OLD_TO_NEW_PATHS = {
  '/dienstleistungen/essstoerungen-coaching': '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  '/dienstleistungen/spiritual': '/dienstleistungen/spirituelles-life-coaching',
} as const;

const NEW_PATHS = [
  '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  '/dienstleistungen/spirituelles-life-coaching',  
  '/dienstleistungen/essstoerung', // Allow direct access to the main Essstörungen page
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip if this is already a new URL or one of the allowed paths
  if (NEW_PATHS.some(path => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.next();
  }
  
  // Check if this is an old URL that needs to be redirected
  for (const [oldPath, newPath] of Object.entries(OLD_TO_NEW_PATHS)) {
    if (pathname === oldPath || pathname.startsWith(`${oldPath}/`)) {
      const newUrl = new URL(pathname.replace(oldPath, newPath), request.url);
      return NextResponse.redirect(newUrl, 308);
    }
  }

  return NextResponse.next();
}

// Match all paths that start with /dienstleistungen
export const config = {
  matcher: [
    '/dienstleistungen/:path*',
  ],
};
