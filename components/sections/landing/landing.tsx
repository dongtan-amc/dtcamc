import LandingCarousel from "./landing-carousel";
import LandingInfo from "./landing-info";

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <LandingCarousel />
      <LandingInfo />
    </section>
  );
}
