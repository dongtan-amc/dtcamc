import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Categories from "../categories";

export default function EyePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="안과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="안과" />
      </Container>
    </main>
  );
}
