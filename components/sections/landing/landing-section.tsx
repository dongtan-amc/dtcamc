import Container from "@/components/common/container";
import LandingCarousel from "./landing-carousel";
export default function LandingSection() {
  return (
    <div id="home" className="pt-[120px] xl:pt-0">
      <Container>
        <div className="flex h-[50dvh] items-center justify-center xl:h-screen">
          <LandingCarousel />
        </div>
      </Container>
    </div>
  );
}
