import { Button } from "@/components/ui/button";
import { KAKAO_MAP, NAME, NAVER_MAP } from "@/constants/general-info";
import Link from "next/link";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapSection() {
  return (
    <section className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`}
        strategy="beforeInteractive"
      />
      <Map
        center={{ lat: 37.209311, lng: 127.061813 }}
        style={{ width: "100%", height: "400px" }} // 지도 크기
        level={3}
      >
        <MapMarker position={{ lat: 37.209311, lng: 127.061813 }}>
          <p className="text-[11px] pt-1.5 text-center pl-1">{NAME}</p>
        </MapMarker>

        {/* 카카오맵, 네이버맵 */}
        <div className="absolute top-10 right-10 z-10 flex flex-col gap-2">
          <Button
            className="text-white bg-[#03C75A] hover:bg-[hsla(147,97%,40%,0.9)]"
            asChild
          >
            <Link href={NAVER_MAP} target="_blank">
              네이버 지도로 보기
            </Link>
          </Button>
          <Button className="text-black bg-[#FAE200] hover:bg-[hsla(54,100%,49%,0.9)]">
            <Link href={KAKAO_MAP} target="_blank">
              카카오 지도로 보기
            </Link>
          </Button>
        </div>
      </Map>
    </section>
  );
}
