import orthoSectionImage from "@/public/sections/orthopedics/section.jpg";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OrthopedicContents from "./orthopedic-contents";
import DividerTop from "@/components/common/divider-top";
import DividerBottom from "@/components/common/divider-bottom";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="orthopedic">
      <DividerTop />
      <div className="py-28">
        <SectionImage image={orthoSectionImage} title="정형외과 클리닉" />

        <OrthopedicContents />
      </div>
      <DividerBottom />
    </SectionLayout>
  );
}
