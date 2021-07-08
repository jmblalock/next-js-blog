import Typing from "../components/Typing";
import Link from "next/link";
import Container from "../components/Container";
import Triangle from "../components/Triangle";
import About from "./about";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Container>Hello</Container>
      <div className="m-36">
        <h1 className="py-4 text-green-cyan text-4xl font-mono">
          <Typing
            strings={[
              "Hi, my name is...",
              "Justin Blalock.",
              "I design and code things for the web.",
            ]}
          />
        </h1>
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

        {/* <About />
      <Experience />
      <Work />
      <Contact /> */}
      </div>
    </>
  );
}
