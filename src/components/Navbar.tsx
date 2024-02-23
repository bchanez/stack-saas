import Image from 'next/image';
import Link from 'next/link';

import NavItem from './NavItem';

const NAV_LINKS = [{ href: '/', key: 'dashboard', label: 'Dashboard' }];

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between bg-blue-600 px-6 py-3 text-white'>
      <Link href='/'>
        <Image src='/vercel.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='flex gap-1 font-bold'>
        {NAV_LINKS.map((link) => (
          <NavItem href={link.href} key={link.key}>
            {link.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
