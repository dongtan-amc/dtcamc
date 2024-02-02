import { NAME } from "@/constants/general-info";
import InfiniteCards from "./infinite-cards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function FacilitySection() {
  return (
    <div className="bg-slate-950 py-20">
      <div className="pb-4 flex justify-center">
        <div className="flex items-end gap-2">
          <h2 className="text-4xl text-slate-50 font-bold">{NAME} 시설</h2>
          <Link href="/introduction/facility" className="inline">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent text-slate-50 rounded-full border"
            >
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>

      <InfiniteCards />
    </div>
  );
}
