import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function NeurosurgeryPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="신경외과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>신경</Container>
    </main>
  );
}
