"use client";

import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  KAKAO_MAP,
  NAME,
  NAVER_MAP,
  PHONE,
} from "@/constants/general-info";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiParkingBoxFill } from "react-icons/ri";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import SectionTitle from "../section-title";
import DividerTop from "@/components/common/divider-top";
import DividerBottom from "@/components/common/divider-bottom";

export default function MapSection() {
  return (
    <div
      id="info"
      className="relative scroll-mt-[64px] bg-white py-10 xl:scroll-mt-[96px]"
    >
      <DividerTop />
      <SectionTitle
        subtitle={
          <div className="space-y-2">
            <div>오시는 길 : {ADDRESS}</div>
            <div>전화번호 : {PHONE}</div>
            <div className="flex justify-center gap-2">
              <Button
                className="w-32 bg-[#03C75A] text-white hover:bg-[hsla(147,97%,40%,0.9)]"
                asChild
              >
                <Link href={NAVER_MAP} target="_blank">
                  네이버지도
                </Link>
              </Button>
              <Button className="w-32 bg-[#FAE200] text-black hover:bg-[hsla(54,100%,49%,0.9)]">
                <Link href={KAKAO_MAP} target="_blank">
                  카카오맵
                </Link>
              </Button>
            </div>
          </div>
        }
      >
        진료안내
      </SectionTitle>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Map
          center={{ lat: 37.209311, lng: 127.061813 }}
          style={{
            width: "100%",
            height: "480px",
            margin: "0 auto",
          }}
          level={2}
          scrollwheel={false}
        >
          <MapMarker position={{ lat: 37.209311, lng: 127.061813 }}>
            <div className="z-20 pl-1 text-center text-[14px] font-bold text-primary">
              {NAME.slice(3)}
            </div>
          </MapMarker>

          <CustomOverlayMap position={{ lat: 37.20936, lng: 127.06171 }}>
            <div>
              <RiParkingBoxFill className="text-rose-600" size={24} />
            </div>
          </CustomOverlayMap>
          <CustomOverlayMap position={{ lat: 37.209361, lng: 127.062823 }}>
            <div>
              <RiParkingBoxFill className="text-rose-600" size={24} />
            </div>
          </CustomOverlayMap>
        </Map>
      </motion.div>
    </div>
  );
}
