import oncologySectionImage from "@/public/sections/onocology/section.webp";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OncologyContents from "./oncology-contents";

export default function OnncologySection() {
  return (
    <SectionLayout hash="oncology">
      <SectionImage
        image={oncologySectionImage}
        title="종양치료 클리닉"
        subtitle="종양치료클리닉 관련된 설명 간단하게 20글자정도로 ~~"
      />
      <OncologyContents />
    </SectionLayout>
  );
}
