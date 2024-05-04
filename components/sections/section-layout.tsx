import React from "react";
import Container from "../common/container";

export default function SectionLayout({
  children,
  hash,
}: {
  children: React.ReactNode;
  hash?: string;
}) {
  return (
    <section className="device_height" id={hash}>
      {children}
    </section>
  );
}
