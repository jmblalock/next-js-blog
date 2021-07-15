import Container from "../components/Container";
import CodeTag from "../components/CodeTag";

export default function About() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono">About Me</h2>
      <div className="grid grid-cols-4 gap-8">
        <p className="self-center md:col-span-3 tracking-wider text-xl text-gray-400">
          Hello! My name is Justin and I enjoy designing and creating things
          that live on the internet. My interest in development started back in
          2017 when I participated in my first{" "}
          <a
            className="text-carolina-blue hover:underline"
            rel="noopener noreferrer"
            href="https://blog.box.com/3-box-skills-built-our-latest-hackathon"
            target="_blank"
          >
            hackathon
          </a>{" "}
          - coincidentally, I ended up learning a great deal about{" "}
          <CodeTag>JavaScript</CodeTag>, <CodeTag>HTML</CodeTag> &{" "}
          <CodeTag>CSS</CodeTag> by working on a team developing a new project
          from scratch in a short amount of time.
        </p>
        <picture className="">
          <img
            className="rounded-full border border-transparent hover:ring-4 hover:ring-dark-blue-grey"
            src="/images/avatar.jpeg"
            alt="My Avatar"
          />
        </picture>
        <picture className="">
          <img
            className="rounded-full border border-transparent hover:ring-4 hover:ring-dark-blue-grey"
            src="/images/remy.jpeg"
            alt="Remy Boy"
          />
        </picture>
        <p className="self-center col-start-2 col-span-3 tracking-wider text-xl text-gray-400">
          When I'm not coding, I enjoy biking, snowboarding and adventuring with
          my beautiful wife and our two troublemakers, Remy and Quincy.
        </p>
        <p className="self-start col-span-3 tracking-wider text-xl text-gray-400">
          Here are a few technologies I've been working with recently:
          <ul className="grid grid-cols-2 pt-4">
            <li>
              <CodeTag>JavaScript (ES6+)</CodeTag>
            </li>
            <li>
              <CodeTag>React</CodeTag>
            </li>
            <li>
              <CodeTag>GraphQL</CodeTag>
            </li>
            <li>
              <CodeTag>TailwindCSS</CodeTag>
            </li>
            <li>
              <CodeTag>Typescript</CodeTag>
            </li>
            <li>
              <CodeTag>Node.js</CodeTag>
            </li>
          </ul>
        </p>
        <picture className="">
          <img
            className="rounded-full border border-transparent hover:ring-4 hover:ring-dark-blue-grey"
            src="/images/quincy.jpeg"
            alt="Quincy Girl"
          />
        </picture>
      </div>
    </Container>
  );
}
