import orthoSectionImage from "@/public/sections/orthopedics/ortho-section-image.png";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OrthopedicContents from "./orthopedic-contents";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="orthopedic">
      <SectionImage
        image={orthoSectionImage}
        title="정형외과 클리닉"
        subtitle="정형외과 관련된 설명 간단하게 20글자정도로 ~~"
      />

      <OrthopedicContents />
    </SectionLayout>
  );
}
