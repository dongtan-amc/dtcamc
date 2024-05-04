import { Ri24HoursFill } from "react-icons/ri";
import { FaUserDoctor, FaMicroscope, FaBed } from "react-icons/fa6";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import IntroCircle from "./intro-circle";
import vet1 from "@/public/vets/vet1.png";
import covidien from "@/public/tools/covidien.png";
import icu1 from "@/public/photo/icu1.jpeg";
import hr from "@/public/vets/24hr.png";
import IntroCard from "./intro-card";

const INTRODUCCTION = [
  {
    title: (
      <>
        최고의 실력을 보유한
        <br /> 석박사 출신 의료진
      </>
    ),
    icon: FaUserDoctor,
    image: vet1,
    subtitle: (
      <>
        청담탑은 대한민국 100대 명의 전문의가 상주하고 있으며,
        <br /> 전문의 3인 진료로 대기시간이 짧아 신속한 진료가 가능합니다.
      </>
    ),
  },
  {
    title: (
      <>
        대학병원급 첨단장비를
        <br /> 사용한 정밀한 치료
      </>
    ),
    icon: FaMicroscope,
    image: covidien,
    subtitle: (
      <>
        가장 고급의 최신 장비를 사용하여, 보다 빠른
        <br />
        증상 완화와 치료 효과를 기대할 수 있고,
        <br />
        안락한 치료 공간에서 편안하게 치료를 받을 수 있습니다.
      </>
    ),
  },
  {
    title: "수술실 입원실 완비",
    icon: FaBed,
    image: icu1,
    subtitle: (
      <>
        청담탑정형외과는 수술실과 1인 입원실이 완비되어 있으며,
        <br /> 하루에 오직 한 분의 환자만 정성을 다하여 수술을 진행합니다.
      </>
    ),
  },
  {
    title: "24시간 수의사 상주",
    icon: Ri24HoursFill,
    image: hr,
    subtitle: (
      <>
        최신 의학 정보 교류 및 학회 활동을 꾸준히 시행하여
        <br /> 지역의료의 수준을 TOP으로 유지하기 위해 협력합니다.
      </>
    ),
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

        <ul className="relative w-[1160px] h-[320px] mb-[120px]">
          {INTRODUCCTION.map(({ title, icon }, index) => (
            <IntroCircle key={index} title={title} icon={icon} index={index} />
          ))}
        </ul>

        <ul className="flex flex-col gap-20 w-full">
          {INTRODUCCTION.map(({ image, title, subtitle }, index) => (
            <IntroCard
              key={index}
              index={index}
              image={image}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
