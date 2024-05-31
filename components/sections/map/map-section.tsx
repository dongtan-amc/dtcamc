import { Button } from "@/components/ui/button";
import { ADDRESS, KAKAO_MAP, NAME, NAVER_MAP } from "@/constants/general-info";
import Link from "next/link";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import place from "@/public/placeholder.jpg";
import { FaParking } from "react-icons/fa";
import { LuParkingCircle, LuParkingSquare } from "react-icons/lu";
import { RiParkingBoxFill } from "react-icons/ri";

export default function MapSection() {
  return (
    <SectionLayout hash="info">
      <SectionTitle subtitle={`오시는 길 - ${ADDRESS}`}>진료안내</SectionTitle>

      <div className="flex justify-center mb-6 gap-2">
        <Button
          className="text-white bg-[#03C75A] hover:bg-[hsla(147,97%,40%,0.9)] w-32"
          asChild
        >
          <Link href={NAVER_MAP} target="_blank">
            네이버지도
          </Link>
        </Button>
        <Button className="text-black bg-[#FAE200] hover:bg-[hsla(54,100%,49%,0.9)] w-32">
          <Link href={KAKAO_MAP} target="_blank">
            카카오맵
          </Link>
        </Button>
      </div>

      <Map
        center={{ lat: 37.209311, lng: 127.061813 }}
        style={{
          width: "1280px",
          height: "480px",
          margin: "0 auto",
        }} // 지도 크기
        level={2}
        scrollwheel={false}
      >
        <MapMarker position={{ lat: 37.209311, lng: 127.061813 }}>
          <p className="text-center pl-1 text-[14px] font-bold text-primary z-20">
            {NAME.slice(3)}
          </p>
        </MapMarker>

        <CustomOverlayMap position={{ lat: 37.209231, lng: 127.061823 }}>
          <div>
            <RiParkingBoxFill className="text-rose-600" size={36} />
          </div>
        </CustomOverlayMap>
        <CustomOverlayMap position={{ lat: 37.209431, lng: 127.062823 }}>
          <div>
            <RiParkingBoxFill className="text-rose-600" size={36} />
          </div>
        </CustomOverlayMap>
      </Map>
    </SectionLayout>
  );
}
