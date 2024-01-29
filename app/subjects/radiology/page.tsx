import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function RadiologyPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="영상의학과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <ul className="grid grid-cols-2 gap-8 pt-10 pb-12">
          {VETS.map((vet) => (
            <Vet key={vet.name} {...vet} />
          ))}
        </ul>
      </Container>
    </main>
  );
}
