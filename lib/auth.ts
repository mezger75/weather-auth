import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import { MockUsersApi } from '@/lib/mock-users-api';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;
        try {
          const user = await MockUsersApi(email);
          if (!user) return null;
          if (password === user.password) return user;
          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
