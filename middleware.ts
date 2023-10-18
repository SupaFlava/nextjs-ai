import { authMiddleware } from "@clerk/nextjs";

export default {
  publicRoutes: ["/"],
};
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
