import Banner from "@/components/common/banner";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import saluteBanner from "@/public/photo/entrance.jpeg";
import Paragraph from "./paragraph";
import SubBanner from "@/components/common/sub-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사말",
};

export default function SalutePage() {
  return (
    <main>
      <Banner
        image={saluteBanner}
        upperRoute="병원 소개"
        subRoute="인사말"
        subMenus={INTRODUCTION_MENUS}
      />

      <Paragraph />

      <SubBanner imageClassName="salute_subbanner" />
    </main>
  );
}
