export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto relative h-full px-4 xl:px-0">
      {children}
    </div>
  );
}
