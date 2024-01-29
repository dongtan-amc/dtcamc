import consulting1 from "@/public/photo/consulting-room.jpeg";
import consulting2 from "@/public/photo/consulting-room1.jpeg";
import consulting3 from "@/public/photo/consulting-room2.jpeg";
import consulting4 from "@/public/photo/treatment-room.jpeg";
import LandinCarousel from "./landing-carousel";
import LandingCopy from "./landing-copy";
import LandingInfo from "./landing-info";

const LANDING_IMAGES = [consulting1, consulting2, consulting3, consulting4];

export default function Landing() {
  return (
    <section className="h-screen bg-slate-100 relative overflow-hidden">
      <LandinCarousel images={LANDING_IMAGES} />
      <LandingCopy />
      <LandingInfo />
    </section>
  );
}
