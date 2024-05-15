import Container from "@/components/common/container";
import SectionTitle from "../section-title";
import Paragraph from "@/app/experty/paragraph";
import SubsectionTitle from "@/components/common/subsection-title";

export default function PatellaSection() {
  return (
    <Container>
      <SubsectionTitle
        title="소형견의 약 40%가 슬개골 탈구 환자입니다."
        subtitle="슬개골 탈구는 ~~"
      />

      <Paragraph>
        강아지에서 흔하게 발생하는 무릎 관절 질환인 슬개골 탈구는, 슬개골 탈구
        기수, 아이의 다리 상태, 뼈의 변형 정도에 따라 수술의 난이도가
        다양합니다.
      </Paragraph>

      <Paragraph>
        본원에서는 다양한 슬개골 탈구 진료 경험을 갖고 계신 선생님들께서 슬개골
        탈구 환자가 수술이 필요한 환자인지 정확한 판단부터, 환자에게 맞는 슬개골
        탈구 교정술 방법을 선택하여 정밀하고 세심한 슬개골 탈구 진료 및 수술을
        진행하고 있습니다.
      </Paragraph>
    </Container>
  );
}
