import { withAuth } from "next-auth/middleware"; //for protecting routes 

export default withAuth({
  pages: { signIn: "/login" }, // Redirect users to login if unauthorized
  callbacks: {
    authorized({ req, token }) {
      
      const path = req.nextUrl.pathname;// Get the current path

      // Allow public access to /home
      if (path === "/home") return true;

      // Require authentication for all other routes
      if (!token) return false;

      // Restrict access based on roles
      if (path.startsWith("/admin") && token?.role !== "Admin") return false;
      if (path.startsWith("/student") && token?.role !== "Student") return false;

      return true;
    },
  },
});

// Apply middleware to all pages except /home
export const config = { matcher: ["/((?!home).*)"] };
