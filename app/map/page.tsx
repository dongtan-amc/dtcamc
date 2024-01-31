import Banner from "@/components/common/banner";
import mapBanner from "@/public/photo/feeds.jpeg";
import MapInfo from "./map-info";
import MyNaverMap from "./my-naver-map";
import NaverMapProvider from "./naver-map-provider";

export const dynamic = "force-dynamic";

export default function MapPage() {
  return (
    <main>
      <Banner image={mapBanner} subRoute="오시는 길" />

      <div className="flex">
        <NaverMapProvider>
          <MyNaverMap />
        </NaverMapProvider>
        <MapInfo />
      </div>
    </main>
  );
}
