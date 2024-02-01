import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Categories from "../categories";

export default function InternalPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="내과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="내과" />
      </Container>
    </main>
  );
}
