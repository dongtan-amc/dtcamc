export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1780px] mx-auto relative h-full px-10">
      {children}
    </div>
  );
}
