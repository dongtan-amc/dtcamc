import Banner from "@/components/common/banner";
import Paragraph from "./paragraph";
import saluteBanner from "@/public/photo/entrance.jpeg";
import BannerSubtitle from "@/components/common/banner-subtitle";

export default function SalutePage() {
  return (
    <main>
      <Banner image={saluteBanner} upperRoute="병원 소개" subRoute="인사말" />

      <Paragraph />
    </main>
  );
}
