import { CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";

export default function CarouselCard({
  title,
  subtitle,
  tags,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  tags: { label: string; hash: string }[];
}) {
  return (
    <CarouselItem className="p-1 select-none">
      <div className="text-white flex flex-col items-center text-center gap-12">
        <h2 className="text-[32px] font-bold">{title}</h2>
        <p className="text-lg">{subtitle}</p>

        <div className="flex gap-5">
          {tags.map((tag) => (
            <Link
              href={`#${tag.hash}`}
              key={tag.label}
              className="border border-drab-400 text-center px-4 py-2"
            >
              # {tag.label} &gt;
            </Link>
          ))}
        </div>
      </div>
    </CarouselItem>
  );
}
