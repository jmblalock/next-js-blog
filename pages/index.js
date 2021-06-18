import Typing from "../components/Typing";

export default function Home() {
  return (
    <div>
      <Typing
        strings={[
          "Hi, my name is",
          "Justin Blalock",
          "I design and build things for the web.",
        ]}
      />
      ,
    </div>
  );
}
