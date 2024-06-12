import orthoSectionImage from "@/public/sections/orthopedics/ortho-section-image.png";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OrhopedicContents from "./orthopedic-contents";

export default function OrthopedicSection() {
  return (
    <SectionLayout hash="orthopedic">
      <SectionImage
        image={orthoSectionImage}
        title="정형외과 클리닉"
        subtitle="When your pet needs advanced orthopedic care, our board-certified veterinary surgeons are here to help."
      />

      <OrhopedicContents />
    </SectionLayout>
  );
}
