import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { COMMUNITY_SUBMENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";

export default function NewsPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="커뮤니티"
        subRoute="병원 소식"
        subMenus={COMMUNITY_SUBMENUS}
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
