import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import NotReadyPage from "@/components/common/not-ready-page";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CT촬영센터",
};

export default function CtPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="CT 촬영 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>
        <NotReadyPage />
      </Container>
    </main>
  );
}
