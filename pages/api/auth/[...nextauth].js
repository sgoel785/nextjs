import NextAuth from 'next-auth';
import Providers from 'next-auth/react';
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/mongodb';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Username", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        let { db } = await connectToDatabase();

        
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { email: user.email };
      }
    })
  ],
  callbacks: {
  },
  secret: process.env.NEXTAUTH_SECRET,
});
