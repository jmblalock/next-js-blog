import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-raisin-black p-6 border-b-2 border-carolina-blue">
      <Logo />
      <Link href="/about">
        <a className="text-carolina-blue hover:text-orange-pantone">About Me</a>
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
