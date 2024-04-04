"use client";

import { NAV_MENUS } from "@/constants/nav-menues";
import { usePathname } from "next/navigation";
import Submenu from "./submenu";

export default function Menu({ isScrollTop }: { isScrollTop: boolean }) {
  const path = usePathname();

  return (
    <ul className="lg:flex items-center h-full hidden">
      {NAV_MENUS.map((menu) => (
        <li key={menu.label} className="">
          <Submenu
            isScrollTop={isScrollTop}
            submenu={menu.submenu}
            menuLabel={menu.label}
            mainRoute={menu.route}
            currentPage={menu.route === `/${path.split("/")[1]}`}
          />
        </li>
      ))}
    </ul>
  );
}
