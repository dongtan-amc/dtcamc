import { NAME } from "@/constants/general-info";
import image from "@/public/unsplash/sick-dog.jpg";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="dialysis">
      <SectionTitle>
        {NAME} <span className="text-primary font-bold">신장투석클리닉</span>
      </SectionTitle>

      <ExpertSection
        image={image}
        points={[
          "신장 혈액 투석",
          "multifiltrate pro CRRT(FMC, 지속적신대체요법),",
          "SUB3.0; Subcutaneous Ureteral ByPass System(Norfolk Vet)",
        ]}
        text={
          <>
            신장질환을 앓고 있는 반려동물에게 필수적인{" "}
            <span className="text-primary font-bold">신장/혈액투석클리닉</span>
            입니다.
            <u className="font-bold">
              신장은 한번 손상되기 시작하면, 회복하기 어려운 장기
            </u>
            이기 때문에 신속한 대응과 처치가 필수적입니다. 일반적인 치료로
            관리가 되지 않는 만성 신부전증 환자부터, 약물 중독 및 급성 신부전
            환자까지 다양한 신부전 환자에게 혈액투석이 필요할 수 있습니다. 또한,
            본원에서는 투석뿐 아니라 다양한 비뇨기계 수술(SUB, PU, 요관절개,
            방광결석, 비뇨기종양) 이 가능 합니다.
          </>
        }
        title="정형외과클리닉"
      />
    </SectionLayout>
  );
}
