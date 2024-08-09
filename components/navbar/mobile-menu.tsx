import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { KAKAO } from "@/constants/general-info";
import { SECTIONS } from "@/constants/sections";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { DialogDescription, DialogTitle } from "../ui/dialog";

export default function MobileMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger className="xl:hidden" asChild>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-transparent"
        >
          <HamburgerMenuIcon className="h-8 w-8 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        {/* browser waring */}
        <DialogTitle />
        <DialogDescription />

        <ul className="flex h-full flex-col items-center justify-center gap-4 text-xl">
          <li>
            <Link href="/#home" onClick={() => setIsDrawerOpen(false)}>
              홈
            </Link>
          </li>

          {SECTIONS.map((section) => (
            <li key={section.sectionTitle}>
              <Link
                href={`/${section.hash}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                {section.sectionTitle}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={KAKAO}
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#FEE500] px-4 py-1 text-lg text-[#191919]"
              onClick={() => setIsDrawerOpen(false)}
            >
              <RiKakaoTalkFill className="h-6 w-6" />
              카카오톡
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
