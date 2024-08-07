import SectionLayout from "../section-layout";
import LandingCarousel from "./landing-carousel";
import ReactYoutube from "./react-youtube";
export default function LandingSection() {
  return (
    <div
      className="flex justify-center bg-white pt-[64px] xl:h-screen xl:pt-[96px]"
      id="home"
    >
      <ReactYoutube />

      <div className="absolute inset-0 h-[calc(100vh-64px)] w-full bg-black/5 xl:h-screen" />
    </div>
  );
}
