import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import dialysisSectionImage from "@/public/sections/dialysis/section.webp";
import DialysisContents from "./dialysis-contents";

export default function DialysisSection() {
  return (
    <SectionLayout hash="dialysis">
      <SectionImage image={dialysisSectionImage} title="신장투석 클리닉" />

      <DialysisContents />
    </SectionLayout>
  );
}
