import { NAME } from "@/constants/general-info";
import dogRunnging from "@/public/photo/dog-running.jpg";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="orthopedic">
      <SectionTitle>
        {NAME} <span className="text-primary font-bold">정형외과클리닉</span>
      </SectionTitle>

      <ExpertSection
        image={dogRunnging}
        points={[
          "십자인대 교정 (TPLO, CBLO, TTA rapid, SwiveLock)",
          "고관절 (PennHIP, FHNO)",
          "슬개골 탈구(재탈구 교정, DFO, PGR)",
          "골절 (다리, 골반, 복합&개방 골절)",
        ]}
        text={
          <>
            동탄시티동물의료센터 에서는 많은 경험을 갖고 계신
            <span className="font-bold text-primary">
              {" "}
              정형외과 전공 수의사
            </span>{" "}
            선생님 들이 진료를 보시고, 직접 상담 및 수술을 진행하고 있습니다.
            <br /> <u className="font-bold">Fixin System, Arthrex 장비</u> 등
            최신 수술 장비들의 도입으로 정확한 정형외과 수술이 가능합니다. 우리
            아이에게 가장 적합하고 좋은 수술 방법을 제시해주는 병원을
            선택해주세요.
          </>
        }
        title="정형외과클리닉"
      />
    </SectionLayout>
  );
}
