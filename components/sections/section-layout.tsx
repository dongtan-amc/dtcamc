import React from "react";

export default function SectionLayout({
  children,
  hash,
}: {
  children: React.ReactNode;
  hash: string;
}) {
  return (
    <section className="device_height border bg-slate-400" id={hash}>
      {children}
    </section>
  );
}
