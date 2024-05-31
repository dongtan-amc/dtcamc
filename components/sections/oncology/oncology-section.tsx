import image from "@/public/placeholder.jpg";
import { GiLiver } from "react-icons/gi";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";

export default function OnncologySection() {
  return (
    <SectionLayout hash="oncology" className="bg-olive-drab-50">
      <SectionTitle
        subtitle={
          <>간담도계 질병은 수술뿐만 아니라, 수술 후 관리도 매우 중요합니다.</>
        }
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-olive-drab-400 rounded-full flex items-center justify-center">
            <GiLiver className="text-white" size={40} />
          </div>
          종양치료클리닉
        </div>
      </SectionTitle>
      <ExpertSection
        reverse
        image={image}
        points={[
          "화학요법(CHOP)",
          "메트로놈항암",
          "표적항암",
          "전기화학치료(ECT; Electrochemotherapy LEROY Biotech)",
        ]}
        text={
          <>
            동탄시티동물의료센터에서는 종양진단, 수술, 항암치료 모든 것을
            원스탑으로 진행 맞춤형 상담을 통해 환자에게 알맞은 최적의 치료계획을
            정하게 됩니다.
          </>
        }
        title="정형외과클리닉"
      />
    </SectionLayout>
  );
}
