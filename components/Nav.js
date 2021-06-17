import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MyLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src="/logo1.png" width={88} height={77} alt="logo" />
    </a>
  );
});

const MyLogoAlt = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src="/logo4.png" width={88} height={77} alt="logo" />
    </a>
  );
});

export default function Nav() {
  const [isShown, setIsShown] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-raisin-black p-6">
      <div
        className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <Link href="/">
            <MyLogoAlt />
          </Link>
        )}
        {!isShown && (
          <Link href="/">
            <MyLogo />
          </Link>
        )}
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
        <a className="px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
          Resume
        </a>
      </Link>
    </nav>
  );
}
