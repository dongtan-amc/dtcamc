import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import TimeTable from "./time-table";

export default function TimePage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="진료 안내"
        subMenus={INTRODUCTION_MENUS}
      />

      <Container>
        <TimeTable />
      </Container>

      <SubBanner imageClassName="time_subbanner" />
    </main>
  );
}
