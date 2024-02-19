import Container from "@/components/common/container";
import fracture1 from "@/public/experty/fracture1.png";
import fracture2 from "@/public/experty/fracture2.png";
import fixin from "@/public/experty/implant.png";
import Image from "next/image";
import Paragraph from "./paragraph";
import SectionTitle from "./section-title";

export default function FractureSection() {
  return (
    <section className="text-xl leading-relaxed bg-slate-100 py-10">
      <Container>
        <SectionTitle title="# 골절 수술" />

        <div className="flex gap-4 my-4">
          <Image alt="fracture image" src={fracture1} height={320} />
          <Image alt="fracture image" src={fracture2} height={320} />
        </div>

        <Paragraph>
          본원에서는 간단한 단순 골절부터 복잡한 복합 골절까지 다양한 골절
          수술을 본원에서 진행하고 있습니다.
        </Paragraph>

        <Paragraph>
          다양한 수술 방법 중에 환자에게 가장 적합한 수술 방법을 선택하여 골절
          교정 수술을 진행할 수 있다는 것이 저희 동탄 시티 동물병원의
          장점입니다.
        </Paragraph>

        <Image alt="fixin system" src={fixin} height={320} className="py-4" />

        <Paragraph>
          특히, 이탈리아 유명 정형외과 임플란트 회사인 intrauma사의{" "}
          <b>Fixin System</b>을 통하여, 신속 정확한 정형외과 수술을 진행하고
          있습니다.
        </Paragraph>

        <Paragraph>
          또한, 뼈의 유합 부전, 이식물 단열 및 이식물 비감염성 염증 반응에 의해
          재수술이 필요한 경우 동물 병원간의 리퍼 시스템을 운영하고 있습니다.
        </Paragraph>
      </Container>
    </section>
  );
}
