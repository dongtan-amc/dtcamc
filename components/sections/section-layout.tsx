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
        "min-h-[calc(100vh-102px)] scroll-mt-[102px] pb-24",
        className
      )}
      id={hash}
    >
      {children}
    </section>
  );
}
