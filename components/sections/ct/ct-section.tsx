import ctSection from "@/public/sections/ct/section.jpg";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import CtContents from "./ct-contents";
import DividerTop from "@/components/common/divider-top";
import DividerBottom from "@/components/common/divider-bottom";

export default function CTSection() {
  return (
    <SectionLayout hash="ct">
      <DividerTop />
      <div className="py-28">
        <SectionImage image={ctSection} title="영상진단센터" />
        <CtContents />
      </div>
      <DividerBottom />
    </SectionLayout>
  );
}
