import Typing from "../components/Typing";

export default function Home() {
  return (
    <div className="text-carolina-blue text-center text-7xl">
      <Typing
        strings={[
          "Hi, my name is",
          "Justin Blalock",
          "I design and build things for the web.",
        ]}
      />
    </div>
  );
}
