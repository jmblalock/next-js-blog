import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
