"use client";

import { KAKAO, PHONE } from "@/constants/general-info";
import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiKakaoTalkFill,
  RiPhoneFill,
  RiMapPin2Fill,
  RiTimer2Fill,
} from "react-icons/ri";

export default function MobileBottomButtons() {
  const { isScrollTop } = useScrollPosition();

  const path = usePathname();
  const isRoot = path === "/";

  return (
    <div
      className={
        "fixed bottom-0 z-50 flex w-full items-center justify-around border-t text-white lg:hidden"
      }
      style={{
        color: isScrollTop && isRoot ? "#fff" : "#1f2937",
        background: isScrollTop && isRoot ? "transparent" : "white",
        transition: "background 500ms ease-in-out",
      }}
    >
      <Link href="/introduction/time" className="p-3">
        <RiTimer2Fill size={30} />
      </Link>
      <Link href="/map" className="p-3">
        <RiMapPin2Fill size={30} />
      </Link>
      <Link href={`tel:${PHONE}`} className="p-3">
        <RiPhoneFill size={30} />
      </Link>
      <Link href={KAKAO} target="_blank" className="p-3">
        <RiKakaoTalkFill size={30} />
      </Link>
    </div>
  );
}
