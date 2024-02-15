import Link from 'next/link';
import { ReactNode } from 'react';

const NavItem = ({ href, children }: {href:string, children:ReactNode}) => {
  return (
    <li>
      <Link
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
