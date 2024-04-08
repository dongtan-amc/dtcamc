import LandingCarousel from "./landing-carousel";
import LandingCopy from "./landing-copy";
import LandingInfo from "./landing-info";

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <LandingCarousel />
      {/* <LandingCopy /> */}
      <LandingInfo />
    </section>
  );
}
