import { NAME } from "@/constants/general-info";
import image from "@/public/placeholder.jpg";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import { GiLiver } from "react-icons/gi";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="biliary" className="bg-olive-drab-50">
      <SectionTitle
        subtitle={
          <>간담도계 질병은 수술뿐만 아니라, 수술 후 관리도 매우 중요합니다.</>
        }
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-olive-drab-400 rounded-full flex items-center justify-center">
            <GiLiver className="text-white" size={40} />
          </div>
          간담도클리닉
        </div>
      </SectionTitle>
      <ExpertSection
        reverse
        image={image}
        points={[
          "간 종양, 간 생검 및 PSS(Portosystemic Shunt)",
          "담낭 파열, 담낭 점액종",
          "담석",
          "담관 종양",
        ]}
        text={
          <>
            동탄시티동물의료센터에서는{" "}
            <u className="font-bold">외과와 내과의 협진</u>시스템을 통해
            간담도계 환자들을 관리하고 있습니다.
            <br />
            동탄시티동물의료센터에서는 최신 수술 장비의 도입으로 간담도 수술에서
            출혈 및 부작용을 최소화 하였으며, 수술 후 협진 시스템을 통해 수술 후
            관리에도 최선을 다하고 있습니다.
          </>
        }
        title="정형외과클리닉"
      />
    </SectionLayout>
  );
}
