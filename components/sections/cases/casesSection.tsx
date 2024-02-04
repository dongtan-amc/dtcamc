import Container from "@/components/common/container";
import SectionTitle from "@/components/common/section-title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CASES } from "@/constants/cases";

export default function CasesSection() {
  return (
    <div className="py-10 lg:py-20">
      <SectionTitle link="/community/case" theme="light" title="진료케이스" />

      <Container>
        <HoverEffect items={recentCases} />
      </Container>
    </div>
  );
}

const recentCases = [
  ...CASES.sort(() => 0.5 - Math.random())
    .slice(0, 7)
    .map((singleCase) => ({
      title: singleCase.title,
      image: singleCase.image,
      link: singleCase.link,
    })),
  { title: "더보기", image: null, link: "community/case" },
];
