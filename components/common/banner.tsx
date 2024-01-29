import { cn } from "@/lib/utils";
import React from "react";

export default function Banner({
  imageClassName,
  title,
  subTitle,
}: {
  imageClassName: string;
  title: string;
  subTitle?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        imageClassName,
        "relative flex items-center justify-center h-[360px] bg-fixed bg-center bg-cover"
      )}
    >
      {/* <div className="absolute h-full w-full bg-black/40" /> */}
      <div className="z-10 flex flex-col items-center gap-4 relative font-bold ">
        {/* <div className="w-[400px] h-full bg-olive-drab-50 absolute blur-2xl rounded-full -z-10" /> */}
        <h2 className="text-xl sm:text-3xl text-olive-drab-600">{title}</h2>
        {subTitle && (
          <div className="text-sm sm:text-base text-gray-800">{subTitle}</div>
        )}
      </div>
    </div>
  );
}
