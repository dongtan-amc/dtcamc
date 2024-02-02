import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CASES } from "@/constants/cases";
import { NAME } from "@/constants/general-info";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CasesSection() {
  return (
    <div className="py-20">
      <div className="flex justify-center pb-4">
        <div className="flex items-end gap-2">
          <h2 className="text-4xl text-slate-950 font-bold">
            {NAME} 진료케이스
          </h2>
          <Link href="/community/case" className="inline">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent text-slate-950 rounded-full border hover:bg-slate-950 hover:text-slate-50 border-slate-950"
            >
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
      <Container>
        <HoverEffect items={recentCases} />
      </Container>
    </div>
  );
}

const recentCases = [
  ...CASES.slice(0, 7).map((singleCase) => ({
    title: singleCase.title,
    image: singleCase.image,
    link: singleCase.link,
  })),
  { title: "더보기", image: null, link: "community/case" },
];
