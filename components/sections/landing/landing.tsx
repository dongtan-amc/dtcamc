import { HERO_IMAGES } from "@/constants/hero-images";
import LandinCarousel from "./landing-carousel";
import LandingCopy from "./landing-copy";
import LandingInfo from "./landing-info";

export default function Landing() {
  return (
    <section className="landing_height bg-slate-100 relative overflow-hidden">
      <LandinCarousel images={HERO_IMAGES} />
      <LandingCopy />
      <LandingInfo />
    </section>
  );
}
