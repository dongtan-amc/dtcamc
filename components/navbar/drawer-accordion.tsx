import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

export default function DrawerAccordion({
  menu,
}: {
  menu: {
    label: string;
    route: string;
    submenu: {
      label: string;
      upperRoute: string;
      route: string;
    }[];
  };
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl text-slate-950 font-bold">
          {menu.label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="pl-2">
            {menu.submenu.map((menu) => (
              <li key={menu.route}>
                <SheetClose asChild>
                  <Link
                    href={`${menu.upperRoute}/${menu.route}`}
                    className="text-xl py-2 block"
                  >
                    {menu.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
