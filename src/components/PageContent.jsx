export default function PageContent({ children }) {
  return (
    <div className="w-full flex flex-col gap-4 h-screen p-4">{children}</div>
  );
}
