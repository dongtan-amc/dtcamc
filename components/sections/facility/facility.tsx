import { NAME } from "@/constants/general-info";
import InfiniteCards from "./infinite-cards";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Facility() {
  return (
    <div className="bg-slate-950">
      <div className="pt-10 pb-8 flex justify-center">
        <div className="flex items-end gap-2">
          <h2 className="text-4xl text-slate-50 font-bold">{NAME} 시설</h2>
          <Link href="/introduction/facility" className="inline">
            <Button variant="outline" className="bg-transparent text-slate-50">
              자세히
            </Button>
          </Link>
        </div>
      </div>

      <InfiniteCards />
    </div>
  );
}
