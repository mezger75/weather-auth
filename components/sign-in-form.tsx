'use client';

import { useState, type FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SignInForm = () => {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      });

      if (response && !response.error) {
        router.push('/weather');
      } else if (response && response.error) {
        setErrorMessage(response?.error);
      }
    } catch (error) {
      setErrorMessage('Internal error');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="flex-1 rounded-lg bg-gray-100 px-6 pb-4 pt-8">
          <h1 className={`mb-3 text-2xl`}>Please log in</h1>
          <div className="w-full">
            <Input
              label="Email"
              type="email"
              htmlForId="email"
              name="email"
              placeholder="Enter your email"
              onChange={() => setErrorMessage(null)}
              errorMessage={errorMessage}
            />
            <Input
              label="Password"
              type="password"
              htmlForId="password"
              name="password"
              placeholder="Enter password"
              autoComplete="off"
              minLength={4}
              onChange={() => setErrorMessage(null)}
              errorMessage={errorMessage}
            />
          </div>
          <Button type="submit" className="mt-4">
            {isLoggingIn ? 'Logging in...' : 'Log in'}
          </Button>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
      </form>
    </section>
  );
};
