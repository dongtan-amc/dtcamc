import biliarySectionImage from "@/public/sections/biliary/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import BiliaryContents from "./biliary-contents";

export default function BiliarySection() {
  return (
    <SectionLayout hash="biliary">
      <SectionImage
        image={biliarySectionImage}
        title="간담도계 클리닉"
        subtitle="간담도계 관련된 설명 간단하게 20글자정도로 ~~"
      />

      <BiliaryContents />
    </SectionLayout>
  );
}
