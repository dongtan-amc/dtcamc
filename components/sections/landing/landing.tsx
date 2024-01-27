import Container from "@/components/common/container";
import Heading from "./heading";
import { LandingCarousel } from "./landing-carousel";
import Divider from "./divider";
import Mask from "./mask";
import Blur from "./blur";

export default function Landing() {
  return (
    <section
      className="h-[90vh] relative bg-golden-dream-500 z-10"
      id="landing"
    >
      <Container>
        <Blur />
        <Heading />
        <LandingCarousel />
      </Container>
      <Divider />
      <Mask />
    </section>
  );
}
