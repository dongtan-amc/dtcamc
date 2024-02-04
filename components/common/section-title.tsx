import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { NAME } from "@/constants/general-info";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  theme,
  title,
  link,
}: {
  title: string;
  theme: "dark" | "light";
  link: string;
}) {
  return (
    <div
      className={cn(
        theme === "dark" ? "text-slate-50" : "text-slate-950",
        "pb-4 flex justify-center "
      )}
    >
      <div className="flex items-center gap-2 pb-8">
        <h2 className="text-lg lg:text-4xl md:text-2xl font-bold">
          {NAME} <span className="text-primary">{title}</span>
        </h2>
        <Link href={link} className="inline">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              theme === "light" &&
                "text-slate-950 hover:bg-slate-950 hover:text-slate-50 border-slate-950",
              "rounded-full border bg-transparent"
            )}
          >
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
