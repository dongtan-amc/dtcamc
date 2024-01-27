"use client";

import Link from "next/link";
import Submenu from "./submenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    label: "병원소개",
    route: "/introduction",
    submenu: [
      {
        label: "인사말",
        route: "/salute",
      },
      {
        label: "의료진 소개",
        route: "/vets",
      },
      {
        label: "스태프 소개",
        route: "/staffs",
      },
      {
        label: "시설&장비 소개",
        route: "/facility",
      },
    ],
  },

  {
    label: "진료안내",
    route: "/subjects",
    submenu: [
      {
        label: "내과",
        route: "/internal",
      },
      {
        label: "외과",
        route: "/surgery",
      },
      {
        label: "영상의학과",
        route: "/radiology",
      },
      {
        label: "안과",
        route: "/Ophthalmology",
      },
      {
        label: "치과",
        route: "/dental",
      },
      {
        label: "예방의학",
        route: "/vaccine",
      },
    ],
  },
  {
    label: "공지사항",
    route: "/notice",
  },
  {
    label: "미용안내",
    route: "/grooming",
  },
  {
    label: "오시는 길",
    route: "/map",
  },
];

export default function Menu() {
  const path = usePathname();

  return (
    <ul className="flex gap-10 items-center">
      {SECTIONS.map((section) => {
        const currentPage = section.submenu
          ? section.route === `/${path.split("/")[1]}`
          : section.route === path;
        return (
          <li key={section.label}>
            {section.submenu ? (
              <Submenu
                submenu={section.submenu}
                menuLabel={section.label}
                mainRoute={section.route}
                currentPage={currentPage}
              />
            ) : (
              <Link
                href={section.route}
                className={cn(
                  currentPage && "border-b-2 border-olive-drab-600",
                  "font-semibold px-2 py-2 hover:text-olive-drab-600 transition"
                )}
              >
                {section.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
