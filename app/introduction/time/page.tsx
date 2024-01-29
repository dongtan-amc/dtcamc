import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import Vet from "@/app/introduction/vets/vet";
import { VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function TimePage() {
  return (
    <main>
      <Banner image={vetBanner} upperRoute="병원 소개" subRoute="진료 안내" />

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
