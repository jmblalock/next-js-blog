export default function Container({ children }) {
  return (
    <div className="container mx-auto py-12 px-6 xsm:px-8 md:px-12 md:py-24">
      {children}
    </div>
  );
}
