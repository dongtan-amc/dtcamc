import Image, { StaticImageData } from "next/image";
import BannerSubnavbar from "./banner-subnavbar";

export default function Banner({
  image,
  upperRoute,
  subRoute,
  subMenus,
}: {
  image: StaticImageData;
  upperRoute?: string;
  subRoute: string;
  subMenus?: {
    upperRoute: string;
    label: string;
    route: string;
  }[];
}) {
  return (
    <div className="relative flex items-center justify-center h-[320px] lg:h-[420px] text-white group overflow-hidden">
      <Image
        alt="banner image"
        src={image}
        fill
        className="object-cover group-hover:scale-[1.01] transition duration-500"
        placeholder="blur"
        sizes="100vw"
      />
      <div className="absolute h-full w-full bg-black/50" />
      <div className="z-10 flex flex-col items-center gap-10 relative font-bold ">
        <h2 className="text-xl lg:text-3xl">{subRoute}</h2>
        {subRoute && upperRoute && (
          <div className="flex gap-4">
            {upperRoute} <span>&gt;</span> {subRoute}
          </div>
        )}
      </div>
      <BannerSubnavbar subMenus={subMenus} />
    </div>
  );
}
