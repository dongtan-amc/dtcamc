import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { COMMUNITY_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function NoticePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="커뮤니티"
        subRoute="공지사항"
        subMenus={COMMUNITY_SUBMENUS}
      />

      <Container>공지</Container>
    </main>
  );
}
