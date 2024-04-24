import Banner from "@/components/common/banner";
import SubBanner from "@/components/common/sub-banner";
import { NAME } from "@/constants/general-info";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import mapBanner from "@/public/photo/feeds.jpeg";
import { Metadata } from "next";
import GoogleMap from "./google-map";
import MapInfo from "./map-info";

export const metadata: Metadata = {
  title: "오시는길",
  description: `${NAME} 오시는 길`,
};

export default function MapPage() {
  return (
    <main>
      <Banner
        image={mapBanner}
        upperRoute="병원소개"
        subRoute="오시는 길"
        subMenus={INTRODUCTION_MENUS}
      />

      <div className="flex flex-col md:flex-row ">
        <GoogleMap />
        <MapInfo />
      </div>

      <SubBanner imageClassName="map_subbanner" />
    </main>
  );
}
