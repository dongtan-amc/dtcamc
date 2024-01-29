import Image, { StaticImageData } from "next/image";
import React from "react";

export default function Banner({
  image,
  title,
  subTitle,
}: {
  image: StaticImageData;
  title: string;
  subTitle?: React.ReactNode;
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
        <h2 className="text-5xl">{title}</h2>
        {subTitle && <div className="">{subTitle}</div>}
      </div>
    </div>
  );
}
