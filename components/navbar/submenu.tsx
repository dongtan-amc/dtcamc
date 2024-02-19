import { cn } from "@/lib/utils";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Submenu({
  isScrollTop,
  submenu,
  menuLabel,
  mainRoute,
  currentPage,
}: {
  submenu: { label: string; route: string }[];
  menuLabel: string;
  mainRoute: string;
  currentPage: boolean;
  isScrollTop: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { push } = useRouter();

  return (
    <div
      className="relative px cursor-pointer h-full flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          isScrollTop && "text-white",
          currentPage && "border-b-2 border-olive-drab-600",
          "font-semibold px-2 py-2 hover:text-olive-drab-600 transition text-lg group-hover:text-olive-drab-600"
        )}
        onClick={() => push(`${mainRoute}${submenu[0].route}`)}
      >
        <div className="flex items-center gap-1">
          {menuLabel} <TriangleDownIcon />
        </div>
      </div>
      <ul
        className={cn(
          "absolute bg-white flex flex-col w-[150px] shadow-2xl border top-20 transition-opacity duration-300",
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
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
    </div>
  );
}
