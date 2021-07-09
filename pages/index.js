import Typing from "../components/Typing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-12 px-6 xsm:px-8 md:px-12 md:py-24">
        <h1 className="py-4 text-green-cyan text-4xl font-mono">
          <Typing
            strings={[
              "Hi, my name is...",
              "Justin Blalock.",
              "I design and code things for the web.",
            ]}
          />
        </h1>
        <span className="py-4 text-green-cyan text-4xl font-mono">
          Full Stack Engineer
        </span>
        <p className="py-4 text-xl text-gray-400">
          I'm an Austin-based software engineer who specializes in designing and
          bulding digital experiences. Currently, I am seeking a full-time
          position as a front-end developer.
        </p>
        <div className="flex py-4">
          <Link href="mailto:justin.m.blalock@gmail.com">
            <a className="px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
              Get In Touch
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
