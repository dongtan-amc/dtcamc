"use client";

import { SECTIONS } from "@/constants/sections";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ isScrollTop }: { isScrollTop: boolean }) {
  const path = usePathname();

  return (
    <ul className="flex divide-x-2">
      {SECTIONS.map((section) => (
        <li key={section.sectionTitle}>
          <Link href={`/${section.hash}`} className="text-white text-xl px-4">
            {section.sectionTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}
