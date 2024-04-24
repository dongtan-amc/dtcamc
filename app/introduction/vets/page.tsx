import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { NAME } from "@/constants/general-info";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import { VETS } from "@/constants/vets";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "수의사소개",
  description: `${NAME} 수의사소개`,
};

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
        <ul className="grid grid-col-1 md:grid-cols-2 gap-10 pt-10 pb-12">
          {VETS.map((vet) => (
            <Vet key={vet.name} {...vet} />
          ))}
        </ul>
      </Container>

      <SubBanner imageClassName="vets_subbanner" />
    </main>
  );
}
