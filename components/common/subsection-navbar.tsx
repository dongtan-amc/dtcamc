import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import Container from "./container";

export default function SubsectionNavbar({
  menus,
  selectedMenuId,
  setSelectedMenuId,
}: {
  menus: { id: number; label: string }[];
  selectedMenuId: number;
  setSelectedMenuId: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Container>
      <ul className="flex gap-2 justify-between w-full px-10">
        {menus.map((menu) => (
          <li key={menu.id}>
            <Button
              onClick={() => setSelectedMenuId(menu.id)}
              className={cn(
                "rounded-full bg-transparent text-slate-900 border-4 border-slate-900 font-bold hover:bg-transparent text-[22px] w-[300px] py-8",
                selectedMenuId === menu.id
                  ? "border-primary text-primary"
                  : "border-slate-900"
              )}
            >
              {menu.label}
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
