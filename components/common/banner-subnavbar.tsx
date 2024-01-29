"use client";

import { INTRODUCTION_MENUS } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BannerSubnavbar() {
  const subRoute = usePathname().split("/")[2];

  return (
    <div className="absolute h-[80px] bottom-0 w-[1280px] flex justify-evenly items-center bg-slate-950 left-[calc(50%-640px)] text-white py-5 rounded-t-xl">
      {INTRODUCTION_MENUS.map((menu) => {
        const currentSub = menu.route === `/${subRoute}`;
        return (
          <Link
            key={menu.label}
            className="flex items-center font-bold gap-3 hover:text-primary transition"
            href={`${menu.upperRoute}${menu.route}`}
          >
            <p className={cn("text-lg", currentSub && "text-primary")}>
              {menu.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
