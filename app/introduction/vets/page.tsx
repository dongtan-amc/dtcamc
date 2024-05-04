import Vet from "@/app/introduction/vets/vet";
import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { NAME } from "@/constants/general-info";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "수의사소개",
  description: `${NAME} 수의사소개`,
};

export default function VetsPage() {
  return (
    <main className="pt-20">
      {/* <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="수의사 소개"
        subMenus={INTRODUCTION_MENUS}
      /> */}

      <SubBanner imageClassName="vets_subbanner" />
    </main>
  );
}
