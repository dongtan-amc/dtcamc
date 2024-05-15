import Container from "@/components/common/container";
import { NAME } from "@/constants/general-info";
import { TOOLS } from "@/constants/tools";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import ToolCard from "./tool-card";

export default function ToolsSection() {
  return (
    <SectionLayout hash="tools" className="bg-olive-drab-50/40">
      <SectionTitle subtitle="대학병원급 이상의 의료기기를 구비하여 보다 빠른 증상 완화 및 치료 효과를 기대할 수 있습니다.">
        국내 대형·대학병원에서도 사용하는 <br />
        <span className="text-primary font-bold">{`${NAME.slice(
          3
        )} 첨단장비`}</span>
      </SectionTitle>

      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
          {TOOLS.map((tool, index) => (
            <ToolCard
              index={index}
              key={tool.name}
              description={tool.description}
              image={tool.image}
              name={tool.name}
            />
          ))}
        </ul>
      </Container>
    </SectionLayout>
  );
}
