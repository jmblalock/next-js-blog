import Header from "./Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
