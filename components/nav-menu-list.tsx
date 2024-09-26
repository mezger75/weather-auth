import Link from 'next/link';
import clsx from 'clsx';

import { links } from '@/lib/data';

export const NavMenuList = ({
  status,
  pathname,
}: {
  status: 'authenticated' | 'loading' | 'unauthenticated';
  pathname: string;
}) => {
  return (
    <ul className="flex gap-8 justify-between">
      {links.map((link) => (
        <li
          key={link.href}
          className={clsx({
            hidden:
              (link.label === 'Sign In' && status === 'authenticated') ||
              (link.label === 'Weather' && status !== 'authenticated'),
          })}
        >
          {(link.label === 'Sign In' && status === 'unauthenticated') ||
          (link.label === 'Weather' && status === 'authenticated') ||
          (link.label !== 'Sign In' && link.label !== 'Weather') ? (
            <Link
              href={link.href}
              className={clsx({
                'border-b-2 border-[var(--secondary)] transition':
                  pathname === link.href,
              })}
            >
              {link.label}
            </Link>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
