import Header from "./Header";

export default function Page({ children }) {
  return (
    <div className="bg-raisin-black">
      <Header />
      {children}
    </div>
  );
}
