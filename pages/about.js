import Container from "../components/Container";
import CodeTag from "../components/CodeTag";

export default function About() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono">About Me</h2>
      <div className="grid gap-8 md:grid-cols-4 ">
        <p className="order-1 md:order-1 md:self-center md:col-span-3 pt-12 tracking-wider text-xl text-gray-400">
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
        <div className="wrapper order-2 md:order-2">
          <picture className="z-10">
            <img
              className="rounded-full border border-transparent"
              src="/images/avatar.jpeg"
              alt="My Avatar"
            />
          </picture>
        </div>
        <div className="wrapper order-4 md:order-3">
          <picture className="order-4 md:order-3">
            <img
              className="rounded-full border border-transparent"
              src="/images/remy.jpeg"
              alt="Remy"
            />
          </picture>
        </div>
        <p className="order-3 md:order-4 md:self-center md:col-span-3 tracking-wider text-xl text-gray-400">
          When I'm not coding, I enjoy traveling, biking, snowboarding and
          adventuring with my beautiful wife and our two troublemakers, Remy and
          Quincy.
        </p>
        <div className="order-5 md:order-5 md:self-center md:col-span-3 tracking-wider text-xl text-gray-400">
          Here are a few technologies I've been working with recently:
          <ul className="grid grid-cols-2 pt-4">
            <li className="codeBullet">
              <CodeTag>JavaScript(ES6+)</CodeTag>
            </li>
            <li className="codeBullet">
              <CodeTag>React</CodeTag>
            </li>
            <li className="codeBullet">
              <CodeTag>GraphQL</CodeTag>
            </li>
            <li className="codeBullet">
              <CodeTag>TailwindCSS</CodeTag>
            </li>
            <li className="codeBullet">
              <CodeTag>Typescript</CodeTag>
            </li>
            <li className="codeBullet">
              <CodeTag>Node.js</CodeTag>
            </li>
          </ul>
        </div>
        <div className="wrapper order-6 md:order-6">
          <picture className="order-6 md:order-6">
            <img
              className="rounded-full border border-transparent"
              src="/images/quincy.jpeg"
              alt="Quincy"
            />
          </picture>
        </div>
      </div>
    </Container>
  );
}
