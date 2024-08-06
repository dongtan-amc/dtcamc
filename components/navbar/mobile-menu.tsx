"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { KAKAO } from "@/constants/general-info";
import { SECTIONS } from "@/constants/sections";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from "../ui/button";

export default function MobileMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger className="xl:hidden" asChild>
        <Button
          size="icon"
          variant="ghost"
          className="w-8 h-8 hover:bg-transparent"
        >
          <HamburgerMenuIcon className="w-8 h-8 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="">
        <ul className="flex h-full flex-col justify-center text-xl items-center gap-4">
          <li className="">
            <Link
              href="/#home"
              className="hover:text-olive-drab-400 transition"
              onClick={() => setIsDrawerOpen(false)}
            >
              홈
            </Link>
          </li>

          {SECTIONS.map((section) => (
            <li key={section.sectionTitle}>
              <Link
                href={`/${section.hash}`}
                className="hover:text-olive-drab-400 transition"
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
              className="text-[#191919] bg-[#FEE500] hover:bg-[#FEE500] hover:opacity-70 rounded-md py-1 px-4 flex items-center gap-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <RiKakaoTalkFill className="w-6 h-6" />
              카카오톡
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
