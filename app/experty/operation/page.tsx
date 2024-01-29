import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import {
  EXPERTY_SUBMENUS,
  SUBJECTS_SUBMENUS,
  VETS,
} from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function OperationPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="전문 진료"
        subRoute="수술 센터"
        subMenus={EXPERTY_SUBMENUS}
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
