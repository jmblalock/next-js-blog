import React from "react";
import Link from "next/link";
import Image from "next/image";

const MyLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src="/logo1.png" width={88} height={77} alt="logo" />
    </a>
  );
});

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-raisin-black p-6">
      <div className="flex items-center flex-shrink-0 mr-6 cursor-pointer hover:animate-pulse">
        <Link href="/">
          <MyLogo />
        </Link>
      </div>
      <Link href="/about">
        <a className="text-carolina-blue hover:text-orange-pantone">About</a>
      </Link>
      <Link href="/experience">
        <a className="text-carolina-blue hover:text-orange-pantone">
          Experience
        </a>
      </Link>
      <Link href="/work">
        <a className="text-carolina-blue hover:text-orange-pantone">Work</a>
      </Link>
      <Link href="/contact">
        <a className="text-carolina-blue hover:text-orange-pantone">Contact</a>
      </Link>
      <Link href="/resume">
        <a className="text-carolina-blue hover:text-orange-pantone">Resume</a>
      </Link>
    </nav>
  );
}
