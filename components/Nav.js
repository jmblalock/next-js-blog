import Link from "next/link";

export default function Page() {
  return (
    <div class="min-h-full">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/work">Work</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
