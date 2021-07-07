import Typing from "../components/Typing";
import Link from "next/link";
import Triangle from "../components/Triangle";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="m-36 max-w-sm mx-auto">
      <h1 className="text-green-cyan text-4xl font-mono">
        <Typing
          strings={[
            "Hi, my name is^1000\n`Justin Blalock.`^1000\n`I design and code things for the web.`",
          ]}
        />
      </h1>
      <p className="text-xl text-gray-400">
        I'm an Austin-based software engineer who specializes in designing and
        bulding digital experiences. Currently, I am seeking a full-time
        position as a front-end developer.
      </p>
      <div className="flex">
        <Link href="mailto:justin.m.blalock@gmail.com">
          <a className="px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
            Get In Touch
          </a>
        </Link>
      </div>

      {/* <About />
      <Experience />
      <Work />
      <Contact /> */}
    </div>
  );
}
