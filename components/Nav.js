import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-300 p-3 ">
        <Link href="/">
          <a className="text-carolina-blue">Home</a>
        </Link>

        <Link href="/about">
          <a className="text-carolina-blue">About</a>
        </Link>

        <Link href="/experience">
          <a className="text-carolina-blue">Experience</a>
        </Link>

        <Link href="/work">
          <a className="text-carolina-blue">Work</a>
        </Link>

        <Link href="/contact">
          <a className="text-carolina-blue">Contact</a>
        </Link>
      </nav>
    </>
  );
}
