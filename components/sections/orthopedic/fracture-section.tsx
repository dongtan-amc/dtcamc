import fracture1 from "@/public/experty/fracture1.png";
import fracture2 from "@/public/experty/fracture2.png";
import fixin from "@/public/experty/implant.png";
import Image from "next/image";
import SectionTitle from "../section-title";
import Paragraph from "@/app/experty/paragraph";
import Container from "@/components/common/container";
import SubsectionTitle from "@/components/common/subsection-title";

export default function FractureSection() {
  return (
    <Container>
      <SubsectionTitle
        title="사람과 다르게 반려동물의 골절은 수술이 필요합니다."
        subtitle="가만히 있지 못하는 환자의 특성상 골절수술은 선택이 아닌 필수입니다."
      />

      <div className="flex gap-10 my-4">
        <div className="relative w-1/2 h-[400px] rounded-3xl overflow-hidden">
          <Image
            alt="fracture image"
            src={fracture1}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-1/2 h-[400px] rounded-3xl overflow-hidden">
          <Image
            alt="fracture image"
            src={fracture2}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Paragraph>
        본원에서는 간단한 단순 골절부터 복잡한 복합 골절까지 다양한 골절 수술을
        본원에서 진행하고 있습니다.
      </Paragraph>

      <Paragraph>
        다양한 수술 방법 중에 환자에게 가장 적합한 수술 방법을 선택하여 골절
        교정 수술을 진행할 수 있다는 것이 저희 동탄 시티 동물병원의 장점입니다.
      </Paragraph>

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
  );
}
