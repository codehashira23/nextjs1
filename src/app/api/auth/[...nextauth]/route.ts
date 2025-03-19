import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";
import {connectToDatabase} from "../../../../lib/db";


export const authOptions = {

    session: { strategy: "jwt" as SessionStrategy },
    secret: process.env.NEXTAUTH_SECRET,

providers: [
    CredentialsProvider({
      
        name: "Credentials",// Name of the provider
        credentials: { email: {}, password: {} }, // Define the shape of the credentials object
      
      async authorize(credentials) { 
        
        await connectToDatabase();  
        
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("User not found");
        
        const isValid = await bcrypt.compare(credentials?.password || "", user.password);// 
        if (!isValid) throw new Error("Invalid credentials");

        return { id: user._id, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user && 'id' in user && 'role' in user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
