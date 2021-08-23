import Container from "../components/Container";
import Link from "next/dist/client/link";

export default function Contact() {
  return (
    <Container>
      <section className="flex flex-col place-items-center">
        <h2 className="py-4 text-carolina-blue text-lg font-mono pb-5">
          What's Next?
        </h2>
        <h2 className="text-green-cyan text-4xl font-mono pb-5">
          Get In Touch
        </h2>
        <p className="text-2xl text-gray-400">
          I am currently seeking new opportunities.
        </p>
        <button className="flex pt-12">
          <Link href="mailto:justin.m.blalock@gmail.com">
            <a className="px-4 py-4 leading-none border rounded text-carolina-blue border-orange-pantone hover:text-orange-pantone">
              Say Hello
            </a>
          </Link>
        </button>
      </section>
    </Container>
  );
}
