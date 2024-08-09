import LandingCarousel from "./landing-carousel";
export default function LandingSection() {
  return (
    <div id="home" className="pt-[60px] xl:pt-0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-center xl:h-screen">
        <LandingCarousel />
      </div>
    </div>
  );
}
