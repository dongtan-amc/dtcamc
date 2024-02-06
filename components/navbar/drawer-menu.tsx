import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import DrawerAccordion from "./drawer-accordion";

export default function DrawerMenu({
  menu,
  index,
}: {
  index: number;
  menu:
    | {
        label: string;
        route: string;
        submenu: {
          label: string;
          upperRoute: string;
          route: string;
        }[];
      }
    | {
        label: string;
        route: string;
        submenu?: undefined;
      };
}) {
  return (
    <li>
      {menu.submenu ? (
        <DrawerAccordion menu={menu} />
      ) : (
        <SheetClose asChild>
          <Link
            href={menu.route}
            className={cn(
              index === 4 ? "border-b" : "border-none",
              "text-xl py-4 block text-slate-950 font-bold"
            )}
          >
            {menu.label}
          </Link>
        </SheetClose>
      )}
    </li>
  );
}
