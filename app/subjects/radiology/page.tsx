import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Categories from "../categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "영상의학과",
};

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
        <Categories subject="영상의학과" />
      </Container>
    </main>
  );
}
