import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Tools from "./tools";

export const metadata: Metadata = {
  title: "장비소개",
};

export default function ToolsPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="병원소개"
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
