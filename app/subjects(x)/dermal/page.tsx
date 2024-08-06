import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Categories from "../categories";

export const metadata: Metadata = {
  title: "피부과",
};

export default function DermalPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 안내"
        subRoute="피부과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="피부과" />
      </Container>
    </main>
  );
}
