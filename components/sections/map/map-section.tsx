import { Button } from "@/components/ui/button";
import { ADDRESS, KAKAO_MAP, NAME, NAVER_MAP } from "@/constants/general-info";
import Link from "next/link";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import Container from "@/components/common/container";

export default function MapSection() {
  return (
    <SectionLayout hash="info">
      <div className="flex flex-col items-center relative">
        <SectionTitle subtitle={`${ADDRESS} (동일 건물 주차 가능)`}>
          {NAME.slice(3)}{" "}
          <span className="text-primary font-bold">오시는길</span>
        </SectionTitle>

        <div className="flex gap-2 mb-6">
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
          style={{ width: "1280px", height: "480px" }} // 지도 크기
          level={3}
          scrollwheel={false}
        >
          <MapMarker position={{ lat: 37.209311, lng: 127.061813 }}>
            <p className="text-center pl-1 text-[14px] font-bold text-primary z-20">
              {NAME.slice(3)}
            </p>
          </MapMarker>
        </Map>
      </div>
    </SectionLayout>
  );
}
