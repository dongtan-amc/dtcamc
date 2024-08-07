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
        "min-h-[calc(100vh-96px)] scroll-mt-[64px] pb-12 xl:scroll-mt-[96px] xl:pb-24",
        className,
      )}
      id={hash}
    >
      {children}
    </section>
  );
}
