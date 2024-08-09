"use client";

import Container from "@/components/common/container";
import DividerBottom from "@/components/common/divider-bottom";
import {
  DAY_TIME,
  NIGHT_TIME,
  PHONE,
  SUNDAY_TIME,
} from "@/constants/general-info";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiParkingBoxFill } from "react-icons/ri";
import InfoCard from "./info-card";
import { Separator } from "@/components/ui/separator";

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
        <p>주간 : {DAY_TIME}</p>
        <p>야간 : {NIGHT_TIME}</p>
        <p>일요일 : {SUNDAY_TIME}</p>
        <p className="pt-[35px] text-base">
          ※ 야간 진료 시간 이후에는 <br />
          입원환자 관리에 집중하기 위해 <br /> 진료를 제한합니다.
        </p>
      </div>
    ),
    icon: FaClock,
  },
  {
    title: "주차안내",
    description: (
      <div className="space-y-2">
        <div>
          <p>화성시 동탄지성로 126, 정일프라자 2F</p>
          <p>은행사거리 (구)기업은행 위치</p>
        </div>
        <div>
          <p className="flex items-center gap-1 font-bold">
            <RiParkingBoxFill className="text-rose-600" size={24} />
            건물주차장
          </p>
          - 건물 지하 1층 (SUV 불가)
        </div>
        <div>
          <p className="flex items-center gap-1 font-bold">
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
    <div className="relative bg-white pb-28" id="time">
      <Container>
        <ul className="grid grid-cols-1 justify-evenly gap-10 py-10 md:grid-cols-3 md:gap-5">
          {INFOS.map((info, index) => (
            <>
              <Separator className="block md:hidden" />
              <InfoCard
                description={info.description}
                icon={info.icon}
                key={info.title}
                title={info.title}
                index={index}
              />
            </>
          ))}
        </ul>
      </Container>
      <DividerBottom />
    </div>
  );
}
