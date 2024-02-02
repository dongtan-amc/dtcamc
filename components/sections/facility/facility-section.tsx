import { NAME } from "@/constants/general-info";
import InfiniteCards from "./infinite-cards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SectionTitle from "@/components/common/section-title";

export default function FacilitySection() {
  return (
    <div className="bg-slate-950 py-20">
      <SectionTitle link="/introduction/facility" theme="dark" title="시설" />
      <InfiniteCards />
    </div>
  );
}
