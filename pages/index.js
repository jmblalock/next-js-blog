import Typing from "../components/Typing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-green-cyan text-center text-6xl m-36 font-mono">
        <Typing
          strings={[
            "Hi, my name is",
            "Justin Blalock.",
            "I build things for the web.",
          ]}
        />
      </div>
      <div className="m-36 mb-12 text-2xl text-gray-400">
        I'm an Austin-based software engineer who specializes in designing and
        bulding digital experiences. Currently, I am seeking a full-time
        position as a front-end developer.
      </div>
      <Link href="mailto:justin.m.blalock@gmail.com">
        <a className="mt-0 m-36 px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
          Get In Touch
        </a>
      </Link>
    </>
  );
}
