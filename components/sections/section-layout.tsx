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
        "bg-gray-50xl:scroll-mt-[96px] min-h-[calc(100vh-96px)] scroll-mt-[64px] bg-gray-50",
        className,
      )}
      id={hash}
    >
      {children}
    </section>
  );
}
