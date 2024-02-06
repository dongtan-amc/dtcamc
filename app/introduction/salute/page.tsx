import Banner from "@/components/common/banner";
import SubBanner from "@/components/common/sub-banner";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import saluteBanner from "@/public/photo/entrance.jpeg";
import { Metadata } from "next";
import SaluteCopy from "./salute-copy";

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

      <SaluteCopy />

      <SubBanner imageClassName="salute_subbanner" />
    </main>
  );
}
