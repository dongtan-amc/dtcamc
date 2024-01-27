import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Submenu({
  submenu,
  menuLabel,
  mainRoute,
  currentPage,
}: {
  submenu: { label: string; route: string }[];
  menuLabel: string;
  mainRoute: string;
  currentPage: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(currentPage);

  return (
    <div
      className="relative px-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          currentPage && "border-b-2 border-olive-drab-600",
          "font-semibold px-2 py-2 hover:text-olive-drab-600 transition"
        )}
      >
        {menuLabel}
      </div>
      {isHovered && (
        <ul className="absolute bg-white flex flex-col w-[150px] shadow-2xl border top-8">
          {submenu.map((menu) => (
            <li key={menu.label}>
              <Link
                href={`${mainRoute}${menu.route}`}
                className="block border p-4 hover:bg-olive-drab-600 hover:text-white"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
