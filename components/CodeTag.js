export default function CodeTag({ children }) {
  return (
    <code className="bg-gray-200 rounded-md font-bold text-carolina-blue text-sm p-1 xsm:mx-1 xsm:text-lg md:text-xl">
      {children}
    </code>
  );
}
