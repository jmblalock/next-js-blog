export default function CodeTag({ children }) {
  return (
    <code className="rounded-md font-bold text-orange-pantone text-sm p-1 xsm:mx-1 xsm:text-lg md:text-xl">
      {children}
    </code>
  );
}
