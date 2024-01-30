import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { EXPERTY_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function DialysisPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="신장 투석 센터"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>투석</Container>
    </main>
  );
}
