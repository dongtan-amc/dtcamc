import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function EmergencPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="응급의학과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>응급</Container>
    </main>
  );
}
