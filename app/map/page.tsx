import Banner from "@/components/common/banner";
import SubBanner from "@/components/common/sub-banner";
import SubContentsMenus from "@/components/common/sub-contents-menus";
import { MAP_SUBCONTENTS } from "@/constants/subcontents";
import mapBanner from "@/public/photo/feeds.jpeg";
import { Metadata } from "next";
import GoogleMap from "./google-map";
import MapInfo from "./map-info";

export const metadata: Metadata = {
  title: "오시는길",
};

export default function MapPage() {
  return (
    <main>
      <Banner image={mapBanner} subRoute="오시는 길" />

      <div className="flex py-10 flex-col md:flex-row ">
        {/* <NaverMapProvider>
          <MyNaverMap />
        </NaverMapProvider> */}
        <GoogleMap />
        <MapInfo />
      </div>

      <SubBanner imageClassName="map_subbanner" />

      <SubContentsMenus subcontents={MAP_SUBCONTENTS} />
    </main>
  );
}
