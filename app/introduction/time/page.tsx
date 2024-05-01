import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { NAME } from "@/constants/general-info";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import GoogleMap from "./google-map";
import MapInfo from "./map-info";
import TimeTable from "./time-table";

export const metadata: Metadata = {
  title: "진료 안내",
  description: `${NAME} 진료 안내`,
};

export default function TimePage() {
  return (
    <main>
      {/* <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="진료 안내"
        subMenus={INTRODUCTION_MENUS}
      /> */}

      <Container>
        <TimeTable />

        <div className="flex flex-col md:flex-row pb-10">
          <GoogleMap />
          <MapInfo />
        </div>
      </Container>

      <SubBanner imageClassName="time_subbanner" />
    </main>
  );
}
