import Image from "next/image";
import SectionLayout from "../section-layout";
import placeholderLandingImage from "@/public/photo/icu2.jpeg";
export default function LandingSection() {
  return (
    <SectionLayout hash="home">
      <div className="h-screen relative">
        <Image
          src={placeholderLandingImage}
          alt="placeholder"
          fill
          className="object-cover"
        />

        <p className="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          동영상 또는 사진 슬라이드
        </p>
      </div>
      <div className="bg-black/50 absolute inset-0" />
    </SectionLayout>
  );
}
