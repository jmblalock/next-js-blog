import Container from "../components/Container";
import CodeTag from "../components/CodeTag";

export default function About() {
  return (
    <Container>
      <h2 className="text-green-cyan text-4xl font-mono">About Me</h2>
      <p className="pt-12 leading-7 tracking-wider text-2xl text-gray-400">
        Hello! My name is Justin and I enjoy designing and creating things that
        live on the internet. My interest in development started back in 2017
        when I participated in my first{" "}
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
        <CodeTag>CSS</CodeTag> by helping with a new project in a short amount
        of time.
      </p>
    </Container>
  );
}
