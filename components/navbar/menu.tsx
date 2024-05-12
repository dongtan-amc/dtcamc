import { SECTIONS } from "@/constants/sections";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  return (
    <ul className="flex divide-x-2">
      {SECTIONS.map((section) => (
        <li key={section.sectionTitle}>
          <Link
            href={`/${section.hash}`}
            className="text-white text-[18px] px-4"
          >
            {section.sectionTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}
