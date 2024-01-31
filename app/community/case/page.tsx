import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { COMMUNITY_SUBMENUS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function CasePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="커뮤니티"
        subRoute="진료 케이스"
        subMenus={COMMUNITY_SUBMENUS}
      />

      <Container>케이스</Container>
    </main>
  );
}
