import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import NotReadyPage from "@/components/common/not-ready-page";
import { NAME } from "@/constants/general-info";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "신장투석센터",
  description: `${NAME} 신장투석센터`,
};

export default function DialysisPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="특성화 센터"
        subRoute="신장투석 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>
        <NotReadyPage />
      </Container>
    </main>
  );
}
