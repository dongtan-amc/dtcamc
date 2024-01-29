import clockIcon from "@/public/icons/clock.svg";
import mapPinLineIcon from "@/public/icons/map-pin-line.svg";
import phoenIcon from "@/public/icons/phone.svg";
import Image from "next/image";
import { FaPaw } from "react-icons/fa6";

export default function GroomingInfo() {
  return (
    <div className="w-1/2 px-14 text-olive-drab-950 bg-golden-dream-100 mask bg-cover bg-center">
      <div className="h-full flex flex-col justify-center">
        <div className="flex items-center gap-2 text-2xl font-bold pb-3">
          <FaPaw />
          <h1>시티독 애견미용</h1>
        </div>
        <p className="text-xl pb-10 font-bold">
          반려동물의 스트레스 없는 미용을노력하는 부속미용실 시티독입니다
        </p>

        <div className="pb-6">
          <div className="flex items-center gap-2 font-bold pb-3">
            <Image alt="clock icon" src={clockIcon} unoptimized />
            <h2>영업시간</h2>
          </div>
          <p className="leading-6 pl-8">오전 10시 - 오후 7시 </p>
        </div>

        <div className="pb-6">
          <div className="flex items-center gap-2 font-bold pb-3">
            <Image alt="phone icon" src={phoenIcon} unoptimized />
            <h2>전화번호</h2>
          </div>
          <p className="pl-8">031-8003-7535</p>
        </div>

        <div className="pb-10">
          <div className="flex items-center gap-2 font-bold pb-3">
            <Image alt="info icon" src={mapPinLineIcon} unoptimized />
            <h2>오시는 길</h2>
          </div>
          <p className="pl-8">경기도 화성시 동탄지성로 126, 정일프라자 1층</p>
        </div>
      </div>
    </div>
  );
}
