import { NAME } from "@/constants/general-info";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import ClinicCard from "./clinic-card";
import {
  GiLiver,
  GiKidneys,
  GiBrokenBone,
  GiAbstract083,
} from "react-icons/gi";

const EXPERT_CLINICS = [
  {
    title: "정형외과클리닉",
    subtitle: "슬개골탈구, 십자인대수술, 고관절탈구, 골절수술 등",
    hash: "#orthopedic",
    bg: "#7ba43e",
    icon: GiBrokenBone,
  },
  {
    title: "간담도클리닉",
    subtitle:
      "간, 담낭과 관련된 전문 수술을 진행합니다. 간엽 절제술, 담낭 절제술 등",
    hash: "#biliary",
    bg: "#688f32",

    icon: GiLiver,
  },
  {
    title: "신장투석클리닉",
    subtitle:
      "만성콩팥질병 환자들의 삶의 질을 올릴 수 있는 신장 투석 클리닉을 운영합니다.",
    hash: "#biliary",
    bg: "#4a6427",
    icon: GiKidneys,
  },
  {
    title: "CT클리닉",
    subtitle: "ㅇㅇ급 최첨단 CT촬영 장비로 진단의 질을 높입니다.",
    hash: "#biliary",
    bg: "#3d5123",
    icon: GiAbstract083,
  },
];

export default function SubjectSection() {
  return (
    <SectionLayout>
      <div className="flex flex-col">
        <SectionTitle subtitle="석박사 출신의 전문 의료진들이 함께합니다!">
          {NAME.slice(3)}{" "}
          <span className="text-primary font-bold">전문클리닉</span>
        </SectionTitle>

        <ul className="grid grid-cols-4">
          {EXPERT_CLINICS.map((clinic) => (
            <li key={clinic.title}>
              <ClinicCard
                title={clinic.title}
                subtitle={clinic.subtitle}
                icon={clinic.icon}
                hash={clinic.hash}
                bg={clinic.bg}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
