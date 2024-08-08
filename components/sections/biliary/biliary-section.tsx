import biliarySectionImage from "@/public/sections/biliary/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import BiliaryContents from "./biliary-contents";
import DividerTop from "@/components/common/divider-top";
import DividerBottom from "@/components/common/divider-bottom";

export default function BiliarySection() {
  return (
    <SectionLayout hash="biliary " className="bg-olive-drab-50/80">
      <div className="py-28">
        <SectionImage image={biliarySectionImage} title="간담도계 클리닉" />

        <BiliaryContents />
      </div>
    </SectionLayout>
  );
}
