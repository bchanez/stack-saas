
import Image from "next/image";
import Link from 'next/link';
import NavItem from "./NavItem";

const NAV_LINKS = [
  { href: '/', key: "home", label: 'Home' },
];

const Navbar = () => {
  return (
    <nav>
    <Link href="/">
      <Image src="/vercel.svg" alt="logo" width={74} height={29}/>
    </Link>

    <ul>
      {NAV_LINKS.map((link) => (
        <NavItem href={link.href} key={link.key}>{link.label}</NavItem>
      ))}
    </ul>
  </nav>
  )
}

export default Navbar
