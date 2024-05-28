import { SECTIONS } from "@/constants/sections";
import Link from "next/link";
import { Button } from "../ui/button";
import { KAKAO } from "@/constants/general-info";

export default function Menu() {
  return (
    <ul className="grid grid-cols-5 gap-2 items-center justify-center">
      {SECTIONS.map((section) => (
        <li key={section.sectionTitle} className="text-center">
          <Link
            href={`/${section.hash}`}
            className="text-white text-[20px] px-4 hover:text-olive-drab-400 transition"
          >
            {section.sectionTitle}
          </Link>
        </li>
      ))}
      <li className="w-full flex justify-center">
        <Link
          href={KAKAO}
          target="_blank"
          className="text-[#191919] bg-[#FEE500] hover:bg-[#FEE500] hover:opacity-70 w-[80%] text-[16px] text-center rounded-md py-1"
        >
          카카오톡
        </Link>
      </li>
    </ul>
  );
}
