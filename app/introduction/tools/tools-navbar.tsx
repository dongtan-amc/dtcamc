import { Button } from "@/components/ui/button";
import { TOOLS } from "@/constants/tools";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

export default function ToolsNavbar({
  category,
  setCategory,
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <ul className="flex gap-4">
        {TOOLS.map((tool) => (
          <li key={tool.category}>
            <Button
              onClick={() => setCategory(tool.category)}
              className={cn(
                category === tool.category
                  ? "bg-olive-drab-600 text-white"
                  : "bg-olive-drab-100 text-olive-drab-700 hover:bg-olive-drab-100/80",
                " px-4 py-2 rounded-full font-bold"
              )}
            >
              {tool.category}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
