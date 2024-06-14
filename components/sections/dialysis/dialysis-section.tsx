import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import dialysisSectionImage from "@/public/sections/dialysis/1.png";
import DialysisContents from "./dialysis-contents";

export default function DialysisSection() {
  return (
    <SectionLayout hash="dialysis">
      <SectionImage
        image={dialysisSectionImage}
        title="신장투석 클리닉"
        subtitle="신장투석 관련된 설명 간단하게 20글자정도로 ~~"
      />

      <DialysisContents />
    </SectionLayout>
  );
}
