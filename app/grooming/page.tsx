import Banner from "@/components/common/banner";
import SubBanner from "@/components/common/sub-banner";
import SubContentsMenus from "@/components/common/sub-contents-menus";
import { GROOMING_SUBCONTENTS } from "@/constants/subcontents";
import groomingBanner from "@/public/grooming/grooming2.jpeg";
import { Metadata } from "next";
import GroomingCarousel from "./grooming-carousel";
import GroomingInfo from "./grooming-info";

export const metadata: Metadata = {
  title: "미용안내",
};

export default function GroomingPage() {
  return (
    <main>
      <Banner image={groomingBanner} subRoute="미용안내" />

      <div className="flex flex-col md:flex-row pt-10 pb-8">
        <GroomingCarousel />
        <GroomingInfo />
      </div>

      <SubBanner imageClassName="map_subbanner" />

      <SubContentsMenus subcontents={GROOMING_SUBCONTENTS} />
    </main>
  );
}
