import Container from "@/components/common/container";
import SubjectsBentoGrid from "./subjects-bento-grid";
import { NAME } from "@/constants/general-info";
import SectionTitle from "@/components/common/section-title";

export default function SubjectsSection() {
  return (
    <div className="py-20">
      <SectionTitle link="/subjects/internal" theme="light" title="진료과목" />
      <Container>
        <SubjectsBentoGrid />
      </Container>
    </div>
  );
}
