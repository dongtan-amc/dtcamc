import { cn } from "@/lib/utils";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Submenu({
  submenu,
  menuLabel,
  mainRoute,
  currentPage,
}: {
  submenu: { label: string; route: string }[] | null;
  menuLabel: string;
  mainRoute: string;
  currentPage: boolean;
  isScrollTop: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { push } = useRouter();
  const route = submenu ? `${mainRoute}${submenu[0].route}` : mainRoute;

  return (
    <div
      className="relative cursor-pointer group z-50 w-[160px] h-24 flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          currentPage && "text-primary",
          "hover:text-primary transition group-hover:text-primary text-center text-lg"
        )}
        onClick={() => push(route)}
      >
        {menuLabel}
      </div>
      <ul
        className={cn(
          "absolute bg-white flex flex-col w-[160px] shadow-2xl border top-[88px] transition-opacity duration-300",
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="h-2 bg-primary" />
        {submenu?.map((menu) => (
          <li key={menu.label}>
            <Link
              href={`${mainRoute}${menu.route}`}
              className="block border p-4 hover:bg-olive-drab-600 hover:text-white text-sm w-[160px] text-center"
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
