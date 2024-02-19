import Container from "@/components/common/container";
import sono from "@/public/experty/sonocure.png";
import sono1 from "@/public/experty/sonocure1.png";
import Image from "next/image";
import Paragraph from "../paragraph";
import SectionTitle from "../section-title";

export default function ResectionSection() {
  return (
    <section className="py-10 text-xl leading-relaxed bg-slate-100">
      <Container>
        <SectionTitle title="담낭, 간엽 절제수술" />

        <Paragraph>
          담낭은 간에서 쓸개즙을 생성하여 저장하는 곳으로 음식물을 먹으면 담관을
          통해 배출하는 기능을 하고 있으며, 노령견에서 황달, 구토, 설사 증상으로
          내원하여 초음파, X-RAY를 진행할 경우에 담낭점액종 혹은 담석을 확인하고
          수술을 하게 됩니다.
        </Paragraph>

        <Paragraph>
          딱딱한 담석이 담관을 막거나 담즙의 경로를 방해하게 되면 지방분해에
          문제가 발생할 수 있으며 담낭 파열, 복막염, 세균, 바이러스 등의 외부
          감염으로 담낭염이 발생할 수 있습니다.
        </Paragraph>

        <Paragraph>
          초기 치료는 항생제와 진통제, 수액요법을 진행하나 증상이 심해지면
          담낭절제술을 진행합니다.
        </Paragraph>

        <Paragraph>
          간엽 절제의 경우 임상증상과 관련된 조직 검사 또는 종양 제거 목적으로
          절제시 진행하며 동일한 SonoCure를 사용하여 안전하고 최소 침습적으로
          진행합니다.
        </Paragraph>

        <Image alt="fracture image" src={sono} height={320} className="py-10" />

        <Paragraph>
          본원에서는 최신 의료기기인 sonocure(미세침습 초음파)를 이용하여 간
          손상을 최소화 할 수 있으며 수술 시간을 줄일수 있어 빠른 회복에 도움을
          주고 있습니다.
        </Paragraph>

        <Image
          alt="fracture image"
          src={sono1}
          height={320}
          className="py-10"
        />

        <Paragraph>
          동물전용 초음파 수술장비로 25kHz의 초음파로 금속칩을 진동시켜
          수술부위를 파쇄하거나 빨아들여 수술 부위 주변 혈관이나 신경 등의
          탄력있는 조직은 초음파를 흡수하지않아 손상되지 않고, 불필요한 조직만을
          정확하고 섬세하게 제거가 가능하여 수술 시간을 단축시킵니다.
        </Paragraph>
      </Container>
    </section>
  );
}
