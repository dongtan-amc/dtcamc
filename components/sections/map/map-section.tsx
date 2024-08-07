"use client";

import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  KAKAO_MAP,
  NAME,
  NAVER_MAP,
  PHONE,
} from "@/constants/general-info";
import Link from "next/link";
import { RiParkingBoxFill } from "react-icons/ri";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <SectionLayout hash="info">
      <SectionTitle
        subtitle={
          <div className="space-y-2">
            <div>오시는 길 : {ADDRESS}</div>
            <div>전화번호 : {PHONE}</div>
          </div>
        }
      >
        진료안내
      </SectionTitle>

      <motion.div
        className="flex justify-center mb-6 gap-2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Map
          center={{ lat: 37.209311, lng: 127.061813 }}
          style={{
            width: "1280px",
            height: "480px",
            margin: "0 auto",
          }}
          level={2}
          scrollwheel={false}
        >
          <MapMarker position={{ lat: 37.209311, lng: 127.061813 }}>
            <div className="text-center pl-1 text-[14px] font-bold text-primary z-20">
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
    </SectionLayout>
  );
}
