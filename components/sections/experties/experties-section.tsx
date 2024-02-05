import Container from "@/components/common/container";
import SectionTitle from "@/components/common/section-title";
import ExpertiesAccordion from "./experties-accordion";

export default function ExpertiesSection() {
  return (
    <div className="py-10 lg:py-20">
      <SectionTitle link="/experty/operation" theme="light" title="전문진료" />
      <Container>
        <ExpertiesAccordion />
      </Container>
    </div>
  );
}
