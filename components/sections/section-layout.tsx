import { cn } from "@/lib/utils";
import React from "react";

export default function SectionLayout({
  children,
  hash,
  className,
}: {
  children: React.ReactNode;
  hash?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative min-h-[calc(100vh-96px)] scroll-mt-[64px] bg-gray-50 xl:scroll-mt-[96px]",
        className,
      )}
      id={hash}
    >
      {children}
    </section>
  );
}
