import orthoSectionImage from "@/public/sections/orthopedics/section.jpg";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OrthopedicContents from "./orthopedic-contents";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="orthopedic">
      <SectionImage image={orthoSectionImage} title="정형외과 클리닉" />

      <OrthopedicContents />
    </SectionLayout>
  );
}
