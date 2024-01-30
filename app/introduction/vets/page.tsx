import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { INTRODUCTION_MENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function VetsPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="수의사 소개"
        subMenus={INTRODUCTION_MENUS}
      />

      <Container>
        <ul className="grid grid-cols-2 gap-8 pt-10 pb-12">
          {VETS.map((vet) => (
            <Vet key={vet.name} {...vet} />
          ))}
        </ul>
      </Container>

      <SubBanner imageClassName="salute_banner" />
    </main>
  );
}
