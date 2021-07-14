import Container from "../components/Container";
import CodeTag from "../components/CodeTag";

export default function About() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono">About Me</h2>
      <div className="grid grid-cols-4">
        <p className="col-span-3 pt-12 leading-7 tracking-wider text-2xl text-gray-400">
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
            alt="My Avatar"
          />
        </picture>
        <p className="col-start-2 col-span-3 pt-12 leading-7 tracking-wider text-2xl text-gray-400">
          When I'm not coding, I enjoy spending time with my beautiful wife and
          our two dogs, Remy and Quincy.
        </p>
      </div>
    </Container>
  );
}
