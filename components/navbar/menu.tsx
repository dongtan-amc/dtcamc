"use client";

import { NAV_MENUS } from "@/constants/nav-menues";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Submenu from "./submenu";

export default function Menu({ isScrollTop }: { isScrollTop: boolean }) {
  const path = usePathname();

  return (
    <ul className="lg:flex gap-10 items-center h-full hidden">
      {NAV_MENUS.map((menu) => {
        const currentPage = menu.submenu
          ? menu.route === `/${path.split("/")[1]}`
          : menu.route === path;
        return (
          <li key={menu.label} className="h-full flex items-center">
            <Submenu
              isScrollTop={isScrollTop}
              submenu={menu.submenu}
              menuLabel={menu.label}
              mainRoute={menu.route}
              currentPage={currentPage}
            />
          </li>
        );
      })}
    </ul>
  );
}
