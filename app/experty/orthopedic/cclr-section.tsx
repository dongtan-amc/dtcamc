import Container from "@/components/common/container";
import cclr1 from "@/public/experty/cclr1.png";
import cclr2 from "@/public/experty/cclr2.png";
import Image from "next/image";
import Paragraph from "./paragraph";
import SectionTitle from "./section-title";

export default function CclrSection() {
  return (
    <section className="py-10 text-xl leading-relaxedpy-10">
      <Container>
        <SectionTitle title="# 십자인대 수술" />

        <div className="flex gap-4 my-4">
          <Image alt="fracture image" src={cclr1} height={320} />
          <Image alt="fracture image" src={cclr2} height={320} />
        </div>

        <Paragraph>
          강아지에서 많이 발생하는 십자 인대 단열 질환은 퇴행성 관절염의 진행
          속도를 늦추기 위해서 반드시 수술적 교정이 필요합니다.
        </Paragraph>

        <Paragraph>
          본원에서는 다양한 방법의 십자인대 교정술 (TPLO, CBLO, TTA rapid,
          낭외고정술, SwiveLock, PushLock)을 진행하고 있습니다.
        </Paragraph>

        <Paragraph>
          환자의 크기, 나이, 다리 상태 (TPA 각도) 등을 고려하여 가장 적합한 수술
          방법을 채택하여 진행 할 수 있다는 것이 본원의 장점입니다.
        </Paragraph>
      </Container>
    </section>
  );
}
