import Container from "@/components/common/container";
import { TOOLS } from "@/constants/tools";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import ToolCard from "./tool-card";
import DividerBottom from "@/components/common/divider-bottom";

export default function ToolsSection() {
  return (
    <SectionLayout hash="tools" className="bg-olive-drab-50/80">
      <SectionTitle subtitle="동탄시티동물의료센터의 대학병원급 의료기기들을 소개합니다.">
        보유장비
      </SectionTitle>

      <Container>
        <ul className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 xl:grid-cols-3">
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
