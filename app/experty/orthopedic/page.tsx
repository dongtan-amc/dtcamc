import Banner from "@/components/common/banner";
import operationBanner from "@/public/photo/operation-room1.jpeg";
import Orthopedic from "./orthopedic";
import { Metadata } from "next";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "정형외과 센터",
  description: `${NAME} 신장투석센터`,
};

export default function OrthopedicPage() {
  return (
    <main>
      {/* <Banner
        image={operationBanner}
        upperRoute="특성화 센터"
        subRoute="정형외과 센터"
        subMenus={EXPERTY_SUBMENUS}
      /> */}

      <Orthopedic />
    </main>
  );
}
