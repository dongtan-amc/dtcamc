import Banner from "@/components/common/banner";
import NaverMapProvider from "./naver-map-provider";
import MyNaverMap from "./my-naver-map";
import MapInfo from "./map-info";
export default function MapPage() {
  return (
    <main>
      <Banner imageClassName="vets_banner" title="오시는 길" />

      <div className="flex">
        <NaverMapProvider>
          <MyNaverMap />
        </NaverMapProvider>
        <MapInfo />
      </div>
    </main>
  );
}
