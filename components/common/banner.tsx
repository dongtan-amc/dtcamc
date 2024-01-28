import { cn } from "@/lib/utils";
import React from "react";

export default function Banner({
  imageClassName,
  title,
  subTitle,
}: {
  imageClassName: string;
  title: string;
  subTitle: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        imageClassName,
        "relative flex items-center justify-center h-[480px] bg-fixed bg-center bg-cover"
      )}
    >
      <div className="absolute h-full w-full bg-black/40" />
      <div className="z-10 flex flex-col items-center gap-4 text-white">
        <h2 className="text-xl font-bold sm:text-3xl text-olive-drab-400">
          {title}
        </h2>
        <div className="text-sm sm:text-base">{subTitle}</div>
      </div>
    </div>
  );
}
