import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import NotReadyPage from "@/components/common/not-ready-page";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신장투석센터",
};

export default function DialysisPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="신장투석 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>
        <NotReadyPage />
      </Container>
    </main>
  );
}
