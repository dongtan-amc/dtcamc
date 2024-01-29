import Banner from "@/components/common/banner";
import groomingBanner from "@/public/grooming/grooming2.jpeg";
import GroomingCarousel from "./grooming-carousel";
import GroomingInfo from "./grooming-info";

export default function GroomingPage() {
  return (
    <main>
      <Banner image={groomingBanner} subRoute="미용안내" />

      <div className="flex">
        <GroomingCarousel />
        <GroomingInfo />
      </div>
    </main>
  );
}
