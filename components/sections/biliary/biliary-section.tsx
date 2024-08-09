import biliarySectionImage from "@/public/sections/biliary/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import BiliaryContents from "./biliary-contents";

export default function BiliarySection() {
  return (
    <div id="biliary" className="scroll-mt-[64px] xl:scroll-mt-[96px]">
      <SectionLayout className="bg-olive-drab-50/80 pb-10 pt-10">
        <SectionImage image={biliarySectionImage} title="간담도계 클리닉" />

        <BiliaryContents />
      </SectionLayout>
    </div>
  );
}
