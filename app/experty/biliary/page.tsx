import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Biliary from "./biliary";

export const metadata: Metadata = {
  title: "수술센터",
};

export default function BiliaryPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="수술 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Biliary />
    </main>
  );
}
