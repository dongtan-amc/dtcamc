import Banner from "@/components/common/banner";
import SubBanner from "@/components/common/sub-banner";
import SubContentsMenus from "@/components/common/sub-contents-menus";
import mapBanner from "@/public/photo/feeds.jpeg";
import GoogleMap from "./google-map";
import MapInfo from "./map-info";
import { MAP_SUBCONTENTS } from "@/constants/subcontents";

export const dynamic = "force-dynamic";

export default function MapPage() {
  return (
    <main>
      <Banner image={mapBanner} subRoute="오시는 길" />

      <div className="flex py-10">
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
