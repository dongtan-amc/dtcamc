import SectionTitle from "@/components/common/section-title";
import InfiniteCards from "./infinite-cards";

export default function FacilitySection() {
  return (
    <div className="bg-slate-950 py-10 lg:py-20">
      <SectionTitle link="/introduction/facility" theme="dark" title="시설" />
      <InfiniteCards />
    </div>
  );
}
