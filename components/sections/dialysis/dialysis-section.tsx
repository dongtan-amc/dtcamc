import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import dialysisSectionImage from "@/public/sections/dialysis/section.webp";
import DialysisContents from "./dialysis-contents";
import DividerTop from "@/components/common/divider-top";
import DividerBottom from "@/components/common/divider-bottom";

export default function DialysisSection() {
  return (
    <SectionLayout hash="dialysis">
      <DividerTop />

      <div className="py-28">
        <SectionImage image={dialysisSectionImage} title="신장투석 클리닉" />

        <DialysisContents />
      </div>

      <DividerBottom />
    </SectionLayout>
  );
}
