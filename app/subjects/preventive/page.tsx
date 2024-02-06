import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Categories from "../categories";

export const metadata: Metadata = {
  title: "예방의학과",
};

export default function PreventivePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="예방의학과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="예방의학과" />
      </Container>
    </main>
  );
}
