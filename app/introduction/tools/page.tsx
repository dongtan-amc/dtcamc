import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { INTRODUCTION_MENUS, VETS } from "@/constants/constants";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Tools from "./tools";

export default function ToolsPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="장비 소개"
        subMenus={INTRODUCTION_MENUS}
      />

      <Container>
        <Tools />
      </Container>

      <SubBanner imageClassName="tools_subbanner" />
    </main>
  );
}
