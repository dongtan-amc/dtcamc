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
      className={cn("device_height scroll-mt-[102px]", className)}
      id={hash}
    >
      {children}
    </section>
  );
}
