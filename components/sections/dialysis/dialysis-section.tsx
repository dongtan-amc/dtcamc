import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";

export default function DialysisSection() {
  return (
    <SectionLayout hash="dialysis">
      <SectionTitle
        subtitle={
          <>
            풍부한 임상경험과 노하우를 바탕으로 정밀한 진단을 시행한 척추관절
            1:1 맞춤치료,
            <br /> 과잉진료 없이 꼭 필요한 치료만으로 책임지고 진료합니다.
          </>
        }
      >
        청담탑의 <span className="text-primary font-bold">신장투석클리닉</span>
        은 <br />
        원인과 증상에 따른 근본있는 치료를 합니다.
      </SectionTitle>
    </SectionLayout>
  );
}
