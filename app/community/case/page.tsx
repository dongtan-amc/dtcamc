import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { COMMUNITY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import CasesGrid from "./cases-grid";
import Cases from "./cases";

export default function CasePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="커뮤니티"
        subRoute="진료 케이스"
        subMenus={COMMUNITY_SUBMENUS}
      />

      <Container>
        <Cases />
      </Container>
    </main>
  );
}
