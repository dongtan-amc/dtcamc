import biliarySectionImage from "@/public/sections/biliary/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import BiliaryContents from "./biliary-contents";

export default function BiliarySection() {
  return (
    <SectionLayout hash="biliary " className="bg-olive-drab-50/80 pb-10 pt-10">
      <SectionImage image={biliarySectionImage} title="간담도계 클리닉" />

      <BiliaryContents />
    </SectionLayout>
  );
}
