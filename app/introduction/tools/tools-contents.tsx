import { TOOLS } from "@/constants/constants";
import Image from "next/image";
import { useMemo } from "react";

export default function ToolsContents({ category }: { category: string }) {
  const tools = useMemo(
    () => TOOLS.filter((tool) => tool.category === category)[0].tools,
    [category]
  );

  return (
    <div className="pt-10">
      <div className="pt-5">
        <ul className="grid grid-cols-2 gap-16">
          {tools.map((tool) => (
            <li key={tool.name} className="flex">
              <div className="w-[200px] h-[200px] relative shrink-0">
                <Image
                  alt={tool.name}
                  src={tool.image}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-10 break-keep">
                <h3 className="text-lg pb-4 font-bold">{tool.name}</h3>
                <p className="leading-5 text-slate-900">{tool.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
