import SectionLayout from "../section-layout";
import LandingCarousel from "./landing-carousel";
import ReactYoutube from "./react-youtube";
export default function LandingSection() {
  return (
    <SectionLayout hash="home">
      <div className="w-full h-screen overflow-hidden">
        <ReactYoutube />
        <LandingCarousel />
      </div>
      <div className="absolute inset-0 z-20" />
    </SectionLayout>
  );
}
