export default function Container({ children }) {
  return (
    <div className="container mx-auto pt-24 px-6 min-h-screen xsm:px-8 md:px-24 md:pt-48 bg-raisin-black">
      {children}
    </div>
  );
}
