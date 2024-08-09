import DividerBottom from "@/components/common/divider-bottom";
import DividerTop from "@/components/common/divider-top";
import ctSection from "@/public/sections/ct/section.jpg";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import CtContents from "./ct-contents";

export default function CTSection() {
  return (
    <SectionLayout hash="ct" className="py-20">
      <DividerTop />
      <SectionImage image={ctSection} title="영상진단센터" />
      <CtContents />
      <DividerBottom />
    </SectionLayout>
  );
}
