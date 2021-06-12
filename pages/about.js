import Header from "../components/Header";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h2>Hi my name is</h2>
        <h3>Justin Blalock.</h3>
        <h3>I build things for the web.</h3>
        <p>
          I'm a Austin-based developer who specializes in designing and building
          exceptional digital experiences. Currently, I'm seeking full-time
          employment as a software engineer.
        </p>
      </div>
    </div>
  );
}
