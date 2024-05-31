import Container from "@/components/common/container";
import {
  DAY_TIME,
  NIGHT_TIME,
  PHONE,
  SUNDAY_TIME,
} from "@/constants/general-info";
import { FaClock, FaParking } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import InfoCard from "./info-card";

const INFOS = [
  {
    title: "대표전화",
    description: (
      <div className="space-y-2">
        <p className="text-[22px]">
          진료에 대한 문의 및<br />
          예약상담을 위해 항시 대기하여
          <br /> 친절히 상담해 드립니다.
        </p>
        <p className="text-primary font-bold text-4xl pt-[35px]">{PHONE}</p>
      </div>
    ),
    icon: FaPhone,
  },
  {
    title: "진료시간",
    description: (
      <div className="">
        <p>주간 : {DAY_TIME}</p>
        <p>야간 : {NIGHT_TIME}</p>
        <p>일요일 : {SUNDAY_TIME}</p>
        <p className="text-base pt-[35px]">
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
        <p>병원 건물 주차장 무료</p>
        <p>주차장 추가++</p>
      </div>
    ),
    icon: FaParking,
  },
];
export default function InfoSection() {
  return (
    <div>
      <Container>
        <ul className="flex justify-evenly pb-20">
          {INFOS.map((info) => (
            <InfoCard
              description={info.description}
              icon={info.icon}
              key={info.title}
              title={info.title}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}
