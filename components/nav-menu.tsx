'use client';

import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import { NavMenuList } from '@/components/nav-menu-list';
import { Button } from '@/components/ui/button';

export const NavMenu = () => {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <nav className="flex gap-7 items-center">
      <NavMenuList status={status} pathname={pathname} />
      {status === 'authenticated' && (
        <Button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Button>
      )}
    </nav>
  );
};
