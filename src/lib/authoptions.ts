// lib/authoptions.ts (update your existing file)
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import prisma from "@/db/index";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

let isNewUser = false;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() }
        });

        if (user && user.password) {
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (isValid) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            };
          }
        }

        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;

      if (account?.provider === 'google' || account?.provider === 'github') {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "User",
              image: user.image,
              signupDate: new Date(),
              companyType: "GENERAL", // Default company type for OAuth users
            },
          });
          isNewUser = true;
        } else {
          isNewUser = false;
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email }
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.companyType = dbUser.companyType;
          token.companyId = dbUser.companyId;
        }
      }
      return token;
    },
    redirect({ url, baseUrl }) {
      if (isNewUser) {
        isNewUser = false;
        return baseUrl + '/onboarding';
      }
      return baseUrl + '/dashboard';
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        // @ts-ignore
        session.user.id = token.id;
        // @ts-ignore
        session.user.companyType = token.companyType;
        // @ts-ignore
        session.user.companyId = token.companyId;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

