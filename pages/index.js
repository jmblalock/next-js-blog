import Typing from "../components/Typing";
import CodeTag from "../components/CodeTag";
import Container from "../components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <section className="inline-block text-left md:flex-1 md:block">
        <span className="py-4 text-carolina-blue text-lg font-mono">
          <h2>Hi, my name is</h2>
        </span>
        <h1 className="py-4  text-gray-400 text-4xl font-mono">
          <Typing
            strings={[
              "Justin Blalock.",
              "I design and",
              "code things",
              "for the web.",
              "Justin Blalock,",
            ]}
          />
        </h1>
        <span className="text-green-cyan text-4xl font-mono">
          <h2>Full Stack Developer & Designer</h2>
        </span>
      </section>
      <p className="pt-12 leading-7 tracking-wider text-2xl text-gray-400">
        I'm an Austin-based software engineer who specializes in designing and
        bulding exceptional digital experiences. Currently, I am pursuing{" "}
        <CodeTag>React</CodeTag>, <CodeTag>Node.js</CodeTag>,{" "}
        <CodeTag>GraphQL</CodeTag>, and <CodeTag>TypeScript</CodeTag> based
        projects.
      </p>
      <button className="flex pt-12">
        <Link href="mailto:justin.m.blalock@gmail.com">
          <a className="px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
            Get In Touch
          </a>
        </Link>
      </button>
    </Container>
  );
}
