import LandingCarousel from "./landing-carousel";
export default function LandingSection() {
  return (
    <div id="home" className="pt-[60px] xl:pt-0">
      <div className="flex h-[50dvh] w-full items-center justify-center xl:h-screen">
        <LandingCarousel />
      </div>
    </div>
  );
}
