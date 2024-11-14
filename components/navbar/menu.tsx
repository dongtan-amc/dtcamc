import { KAKAO } from "@/constants/general-info";
import { SECTIONS } from "@/constants/sections";
import Link from "next/link";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Menu() {
  return (
    <ul className="hidden grid-cols-5 items-center justify-center gap-1.5 xl:grid">
      {SECTIONS.map((section, index) => (
        <li key={index} className="text-center">
          <Link
            href={`/${section.hash}`}
            className="px-4 text-lg text-white transition hover:text-olive-drab-400"
          >
            {section.sectionTitle}
          </Link>
        </li>
      ))}
      <li className="flex w-full justify-center">
        <Link
          href={KAKAO}
          target="_blank"
          className="flex w-[80%] items-center justify-center gap-1 text-balance rounded-md bg-[#FEE500] py-1 text-center text-[#191919] hover:bg-[#FEE500] hover:opacity-70"
        >
          <RiKakaoTalkFill className="h-6 w-6" />
          카카오톡
        </Link>
      </li>
    </ul>
  );
}
