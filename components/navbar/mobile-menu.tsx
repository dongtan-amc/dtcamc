import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_MENUS } from "@/constants/nav-menues";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import DrawerMenu from "./drawer-menu";

export default function MobileMenu({ isScrollTop }: { isScrollTop: boolean }) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 hover:bg-transparent"
        >
          <HamburgerMenuIcon className="w-8 h-8" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="">
        <ul className="flex h-full flex-col justify-center text-xl">
          {NAV_MENUS.map((menu, index) => (
            <DrawerMenu key={menu.label} menu={menu} index={index} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
