"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BannerSubnavbar({
  subMenus,
}: {
  subMenus?: {
    upperRoute: string;
    label: string;
    route: string;
  }[];
}) {
  const subRoute = usePathname().split("/")[2];

  return (
    <>
      {subMenus && (
        <ul className="absolute lg:h-20 h-14 bottom-0 lg:max-w-5xl w-full flex lg:justify-evenly items-center bg-slate-950 text-white lg:rounded-t-xl overflow-x-auto gap-10 px-10">
          {subMenus.map((menu) => {
            const currentSub = menu.route === `/${subRoute}`;
            return (
              <li key={menu.label}>
                <Link
                  className="hover:text-primary transition"
                  href={`${menu.upperRoute}${menu.route}`}
                >
                  <p
                    className={cn(
                      "text-sm lg:text-base font-bold text-nowrap",
                      currentSub && "text-primary"
                    )}
                  >
                    {menu.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
