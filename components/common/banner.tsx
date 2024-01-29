import Image, { StaticImageData } from "next/image";
import React from "react";
import BannerSubnavbar from "./banner-subnavbar";

export default function Banner({
  image,
  upperRoute,
  subRoute,
}: {
  image: StaticImageData;
  upperRoute: string;
  subRoute: string;
}) {
  return (
    <div className="relative flex items-center justify-center h-[560px] text-white group overflow-hidden">
      <Image
        alt=""
        src={image}
        fill
        className="object-cover group-hover:scale-[1.01] transition duration-500"
      />
      <div className="absolute h-full w-full bg-black/40" />
      <div className="z-10 flex flex-col items-center gap-10 relative font-bold ">
        <h2 className="text-5xl">{subRoute}</h2>
        {subRoute && (
          <div className="flex gap-4">
            {upperRoute} <span>&gt;</span> {subRoute}
          </div>
        )}
      </div>
      <BannerSubnavbar />
    </div>
  );
}
