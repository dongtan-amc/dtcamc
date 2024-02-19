import Banner from "@/components/common/banner";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import operationBanner from "@/public/photo/operation-room1.jpeg";
import Orthopedic from "./orthopedic";

export default function OrthopedicPage() {
  return (
    <main>
      <Banner
        image={operationBanner}
        upperRoute="전문 진료"
        subRoute="정형외과 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Orthopedic />
    </main>
  );
}
