import Link from "next/link";
import { FLOATING_INFOS } from "@/constants/floating-infos";

export default function FloatingInfos() {
  return (
    <div className="hidden lg:block fixed right-3 top-[30%] z-40">
      <ul className="flex flex-col gap-4 py-4">
        {FLOATING_INFOS.map((info) => (
          <li key={info.label}>
            <Link
              href={info.href}
              target={info.label === "카톡상담" ? "_blank" : "_parent"}
              rel="noopener noreferrer"
              className="bg-slate-950 rounded-full w-16 h-16 flex items-center justify-center opacity-50 hover:bg-olive-drab-800 hover:opacity-100 transition hover:ring ring-white"
            >
              <div className="flex flex-col items-center gap-1 text-[10px] text-white">
                <info.icon size={info.size} />
                <p>{info.label}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
