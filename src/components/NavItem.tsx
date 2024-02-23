import Link from 'next/link';
import type { ReactNode } from 'react';

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li className='hover:text-gray-300'>
      <Link href={href}>{children}</Link>
    </li>
  );
}
