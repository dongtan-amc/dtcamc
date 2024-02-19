import Title from "@/components/common/title";
import { NAME } from "@/constants/general-info";
import { GiLiver } from "react-icons/gi";
import ResectionSection from "./resection-section";

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
            {NAME}는 최신 장비와 우수한 외과 전문의들이 간담도계 수술을
            진행합니다. 높은 수술 성공률 그리고 수술 후 케어까지
            동탄시티동물의료센터만의 수술은 특별합니다.
          </>
        }
        title="간·담도 수술센터"
        Icon={GiLiver}
        tags={TAGS}
      />

      <ResectionSection />
    </div>
  );
}
