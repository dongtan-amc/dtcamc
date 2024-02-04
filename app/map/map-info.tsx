import { Button } from "@/components/ui/button";
import mapPinLineIcon from "@/public/icons/map-pin-line.svg";
import phoenIcon from "@/public/icons/phone.svg";
import infoIcon from "@/public/icons/Info.svg";
import parkingIcon from "@/public/icons/parking.svg";
import toiletIcon from "@/public/icons/toiletsvg.svg";
import Image from "next/image";
import { FaPaw } from "react-icons/fa6";
import Link from "next/link";
import { ADDRESS, NAME, PHONE } from "@/constants/general-info";

export default function MapInfo() {
  return (
    <div className="p-4 md:px-14 h-full my-auto text-olive-drab-950 md:w-1/2 md:py-10">
      <div className="flex items-center gap-2 text-2xl font-bold pb-3">
        <FaPaw />
        <h1>{NAME}</h1>
      </div>
      <p className="text-xl pb-10 font-bold">{ADDRESS}</p>

      <div className="pb-6">
        <div className="flex items-center gap-2 font-bold pb-3">
          <Image alt="map icon" src={mapPinLineIcon} unoptimized />
          <h2>오시는 길</h2>
        </div>
        <p className="leading-6 pl-8">
          능동은행사거리, 국민은행 맞은편정일프라자 2층
          <br />
          대중교통 이용 능동은행사거리, 동탄시티병원 정류장 하차 (도보1분)
          <br />
          일반 : 64, 200, 205, 710, H65, H67, H101, 12, 27-1, H4, H6
          <br />
          직행 : 1552
          <br />
          주차정보 :무료주차 (본 건물 지하주차장 또는 패밀리타운주차장 이용)
        </p>
      </div>

      <div className="pb-6">
        <div className="flex items-center gap-2 font-bold pb-3">
          <Image alt="phone icon" src={phoenIcon} unoptimized />
          <h2>전화번호</h2>
        </div>
        <p className="pl-8">{PHONE}</p>
      </div>

      <div className="pb-10">
        <div className="flex items-center gap-2 font-bold pb-3">
          <Image alt="info icon" src={infoIcon} unoptimized />
          <h2>이용안내</h2>
        </div>

        <div className="flex items-center gap-6  pl-8">
          <div className="flex items-center gap-2">
            <Image alt="parking icon" src={parkingIcon} unoptimized />
            <p>주차 </p>
          </div>
          <div className="flex items-center gap-2">
            <Image alt="toilet icon" src={toiletIcon} unoptimized />
            <p>남/녀 화장실 구분 </p>
          </div>
        </div>
      </div>

      <div className="space-x-2">
        <Button
          className="text-white bg-[#03C75A] hover:bg-[hsla(147,97%,40%,0.9)]"
          asChild
        >
          <Link
            href="https://map.naver.com/p/entry/place/1954210980?c=19.00,0,0,0,dh"
            target="_blank"
          >
            네이버 지도로 보기
          </Link>
        </Button>
        <Button className="text-black bg-[#FAE200] hover:bg-[hsla(54,100%,49%,0.9)]">
          <Link
            href="
            https://map.kakao.com/?urlX=513717&urlY=1030622&urlLevel=3&itemId=1809300423&q=24%EC%8B%9C%EB%8F%99%ED%83%84%EC%8B%9C%ED%8B%B0%EB%8F%99%EB%AC%BC%EC%9D%98%EB%A3%8C%EC%84%BC%ED%84%B0&srcid=1809300423&map_type=TYPE_MAP"
            target="_blank"
          >
            카카오 지도로 보기
          </Link>
        </Button>
      </div>
    </div>
  );
}
