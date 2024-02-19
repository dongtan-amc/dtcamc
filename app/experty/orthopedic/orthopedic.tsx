import Title from "@/components/common/title";
import { NAME } from "@/constants/general-info";
import { LuBone } from "react-icons/lu";
import CclrSection from "./cclr-section";
import FractureSection from "./fracture-section";
import PatellaSection from "./patella-section";
import RehabilitationSection from "./rehabilitation-section";

const TAGS = [
  {
    label: "# 골절수술",
    hash: "#fracture",
  },
  {
    label: "# 십자인대수술",
    hash: "#fracture",
  },
  {
    label: "# 슬개골탈구교정술",
    hash: "#fracture",
  },
  {
    label: "# 정형외과재활치료",
    hash: "#fracture",
  },
];

export default function Orthopedic() {
  return (
    <div className="py-20">
      <Title
        description={
          <>
            {NAME}는 연간{" "}
            <span className="text-primary font-bold text-2xl">1,000건</span>의
            정형외과 수술 실적을 가지고 있습니다. 국내 동물병원 중 최고의 수술
            시스템을 자랑하며 환자 각자에게 가장 적합한 수술 환경을 제공합니다.
          </>
        }
        title="정형외과 수술센터"
        Icon={LuBone}
        tags={TAGS}
      />

      <FractureSection />

      <CclrSection />

      <PatellaSection />

      <RehabilitationSection />
    </div>
  );
}
