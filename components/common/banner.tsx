import Image, { StaticImageData } from "next/image";
import BannerSubnavbar from "./banner-subnavbar";
import { NAME } from "@/constants/general-info";

export default function Banner({
  image,
  upperRoute,
  subRoute,
  subMenus,
  employment,
}: {
  image: StaticImageData;
  upperRoute?: string;
  subRoute: string;
  subMenus?: {
    upperRoute: string;
    label: string;
    route: string;
  }[];
  employment?: boolean;
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

        {/* 채용 페이지만 적용 */}
        {employment && (
          <p className="text-sm md:text-lg px-10 text-center">
            {NAME}은 상시 여러분들의 소중한 지원을 받고있습니다.
          </p>
        )}

        {subRoute && upperRoute && (
          <div className="flex gap-4">
            {upperRoute} <span>&gt;</span> {subRoute}
          </div>
        )}
      </div>
      {/* <BannerSubnavbar subMenus={subMenus} /> */}
    </div>
  );
}
