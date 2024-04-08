import LandingCarousel from "./landing-carousel";
import LandingCopy from "./landing-copy";
import LandingInfo from "./landing-info";

export default function Landing() {
  return (
    <section className="landing_height bg-slate-100 relative overflow-hidden">
      <LandingCarousel />
      {/* <LandingCopy /> */}
      <LandingInfo />
    </section>
  );
}
