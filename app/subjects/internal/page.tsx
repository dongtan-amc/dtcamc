import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Categories from "../categories";

export const metadata: Metadata = {
  title: "내과",
};

export default function InternalPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 안내"
        subRoute="내과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="내과" />
      </Container>
    </main>
  );
}
