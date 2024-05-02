import { Ri24HoursFill } from "react-icons/ri";
import { FaUserDoctor, FaMicroscope, FaBed } from "react-icons/fa6";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import Circle from "./circle";

const INTRODUCCTION = [
  {
    title: "석박사 출신 의료진",
    icon: FaUserDoctor,
  },
  {
    title: (
      <>
        대학병원급 첨단장비를
        <br /> 사용한 정밀한 치료
      </>
    ),
    icon: FaMicroscope,
  },
  {
    title: "수술실 입원실 완비",
    icon: FaBed,
  },
  {
    title: "24시간 수의사 상주",
    icon: Ri24HoursFill,
  },
];

export default function IntroSection() {
  return (
    <SectionLayout hash="intro">
      <div className="flex flex-col items-center">
        <SectionTitle subtitle="전문의의 실력과 첨단 장비의 섬세함을 바탕으로 믿고 안심할 수 있는 진료를 약속드립니다.">
          <span className="text-primary font-bold">TOP</span> 의료시설!{" "}
          <span className="text-primary font-bold">TOP</span> 진료!{" "}
          <span className="text-primary font-bold">TOP</span> 친절! <br />{" "}
          청담탑정형외과가 3 TOP을 약속합니다.
        </SectionTitle>

        <ul className="relative w-[1160px] h-[320px]">
          {INTRODUCCTION.map(({ title, icon }, index) => (
            <Circle key={index} title={title} icon={icon} index={index} />
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
