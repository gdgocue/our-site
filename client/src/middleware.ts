import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define a matcher for public routes
const isPublicRoute = createRouteMatcher(['/','/gallery/:id']);

// Middleware to protect routes
export default clerkMiddleware(async (auth, req) => {
  // If the route is not public, enforce authentication
  if (!isPublicRoute(req)) {
    await auth.protect(); // Protect private routes like '/admin'
  }
});

export const config = {
  matcher: [
    // Apply middleware to all dynamic routes except static files and internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Apply middleware to API routes
    '/(api|trpc)(.*)',
  ],
};
