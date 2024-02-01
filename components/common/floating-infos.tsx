import Link from "next/link";

import { FLOATING_INFOS } from "@/constants/floating-infos";
import { Separator } from "../ui/separator";

export default function FloatingInfos() {
  return (
    <div className="fixed right-0 top-[30%] z-40 border-primary bg-white shadow-2xl ring-1 ring-primary px-1 rounded-tl-xl rounded-bl-xl">
      <ul className="flex flex-col gap-4 py-4">
        {FLOATING_INFOS.map((info, index) => (
          <div key={info.label}>
            <li>
              <Link
                href={info.href}
                target={
                  info.label === "블로그" || info.label === "카톡상담"
                    ? "_blank"
                    : "_parent"
                }
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center gap-2 text-[10px] text-slate-950">
                  <info.icon size={info.size} />
                  <p>{info.label}</p>
                </div>
              </Link>
            </li>
            {index !== 3 && <Separator className="mt-4" />}
          </div>
        ))}
      </ul>
    </div>
  );
}
