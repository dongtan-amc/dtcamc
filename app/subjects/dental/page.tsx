import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Categories from "../categories";

export const metadata: Metadata = {
  title: "치과",
};

export default function DentalPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="치과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="치과" />
      </Container>
    </main>
  );
}
