import { NAME } from "@/constants/general-info";
import image from "@/public/unsplash/news-banner.jpg";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="biliary">
      <SectionTitle>
        {NAME} <span className="text-primary font-bold">간담도클리닉</span>
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
            간, 담도 수술은 수술뿐만 아니라, 수술 후 중환자 관리도 중요하기
            때문에 외과와 내과의 협진이 매우 중요합니다.
            <span className="font-bold text-primary">동탄시티동물의료센터</span>
            에서는 최신 수술 장비의 도입으로 간담도 수술에서 출혈 및 부작용을
            최소화 하였으며, 수술 후 협진 시스템을 통해 수술 후 관리에도 최선을
            다하고 있습니다.
          </>
        }
        title="정형외과클리닉"
      />
    </SectionLayout>
  );
}
