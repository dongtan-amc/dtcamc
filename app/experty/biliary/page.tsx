import Banner from "@/components/common/banner";
import { EXPERTY_SUBMENUS } from "@/constants/sections";
import exprtyBanner from "@/public/photo/operation-room.jpeg";
import { Metadata } from "next";
import Biliary from "./biliary";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "간담도 수술센터",
  description: `${NAME} 간담도 수술센터`,
};

export default function BiliaryPage() {
  return (
    <main>
      <Banner
        image={exprtyBanner}
        upperRoute="특성화 센터"
        subRoute="간담도 수술센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Biliary />
    </main>
  );
}
