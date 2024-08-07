export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-full max-w-screen-xl px-4 xl:px-0">
      {children}
    </div>
  );
}
