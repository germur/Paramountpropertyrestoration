// src/middleware.js
// Force trailing slash on all routes for URL consistency

export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);

  // Skip static assets (images, CSS, JS, etc.)
  if (
    url.pathname.includes('.') ||
    url.pathname.startsWith('/_') ||
    url.pathname.startsWith('/api')
  ) {
    return next();
  }

  // Force trailing slash on all routes
  if (!url.pathname.endsWith('/')) {
    url.pathname = url.pathname + '/';
    return redirect(url.toString(), 301);
  }

  return next();
}
