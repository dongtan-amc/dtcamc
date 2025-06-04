"use client";

import Container from "@/components/common/container";
import DividerBottom from "@/components/common/divider-bottom";
import {
  DAY_TIME,
  LUNCH_TIME,
  NIGHT_TIME,
  PHONE,
} from "@/constants/general-info";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiParkingBoxFill } from "react-icons/ri";
import InfoCard from "./info-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import map from "@/public/map.png";

const INFOS = [
  {
    title: "대표전화",
    description: (
      <div className="space-y-2">
        <p>
          진료에 대한 문의 및<br />
          예약상담을 위해 항시 대기하여
          <br /> 친절히 상담해 드립니다.
        </p>
        <p className="pt-2 text-2xl font-bold text-primary md:pt-[35px] md:text-4xl">
          {PHONE}
        </p>
      </div>
    ),
    icon: FaPhone,
  },
  {
    title: "진료시간",
    description: (
      <div>
        <p>365일 24시간 연중무휴</p>
        <p>주간 : {DAY_TIME}</p>
        <p>야간 : {NIGHT_TIME}</p>
        <p>점심시간 : {LUNCH_TIME}</p>
      </div>
    ),
    icon: FaClock,
  },
  {
    title: "주차안내",
    description: (
      <div className="space-y-2">
        <Image alt="map" src={map} width={400} />

        <div>
          <p className="flex gap-1 font-bold">
            <RiParkingBoxFill className="text-rose-600" size={24} />
            건물주차장
          </p>
          - 건물 지하 1층 (SUV 불가)
        </div>
        <div>
          <p className="flex gap-1 font-bold">
            <RiParkingBoxFill className="text-rose-600" size={24} />
            패밀리타운주차장(뒷편 주차빌딩)
          </p>
          - 1시간 주차 무료입니다.
          <br />- 수납시 주차권을 꼭 받아가시기 바랍니다.
        </div>
      </div>
    ),
    icon: RiParkingBoxFill,
  },
];
export default function InfoSection() {
  return (
    <div
      className="b relative scroll-mt-[64px] bg-white pb-28 xl:scroll-mt-[96px]"
      id="time"
    >
      <Container>
        <ul className="grid grid-cols-1 justify-evenly gap-10 py-10 md:grid-cols-3 md:gap-5">
          {INFOS.map((info, index) => (
            <div key={index}>
              <Separator className="mb-10 block md:hidden" />
              <InfoCard
                description={info.description}
                icon={info.icon}
                title={info.title}
                index={index}
              />
            </div>
          ))}
        </ul>
      </Container>
      <DividerBottom />
    </div>
  );
}
