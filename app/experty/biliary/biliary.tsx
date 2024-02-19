import Title from "@/components/common/title";
import { NAME } from "@/constants/general-info";
import { LuBone } from "react-icons/lu";

const TAGS = [
  {
    label: "# 간",
    hash: "#fracture",
  },
  {
    label: "# 담낭",
    hash: "#fracture",
  },
  {
    label: "# 간엽 절제술",
    hash: "#fracture",
  },
];

export default function Biliary() {
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
        title="간·담도 수술센터"
        Icon={LuBone}
        tags={TAGS}
      />
    </div>
  );
}
