"use client";

import { SUBJECTS_SUBMENUS } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubjectNavbar() {
  const path = usePathname();

  return (
    <ul className="flex gap-8 items-center py-10">
      {SUBJECTS_SUBMENUS.map((menu) => {
        const currentPage = menu.route === `/${path.split("/")[2]}`;
        return (
          <li key={menu.label}>
            <Link
              href={`/subjects/${menu.route}`}
              className={cn(
                currentPage &&
                  "text-olive-drab-600 border-b-2 border-olive-drab-600",
                "px-2 py-2 hover:text-olive-drab-600 transition"
              )}
            >
              {menu.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
