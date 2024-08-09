import DividerBottom from "@/components/common/divider-bottom";
import DividerTop from "@/components/common/divider-top";
import dialysisSectionImage from "@/public/sections/dialysis/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import DialysisContents from "./dialysis-contents";

export default function DialysisSection() {
  return (
    <SectionLayout hash="dialysis" className="py-20">
      <DividerTop />

      <SectionImage image={dialysisSectionImage} title="신장투석 클리닉" />

      <DialysisContents />

      <DividerBottom />
    </SectionLayout>
  );
}
