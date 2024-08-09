"use client";

import { KAKAO, PHONE } from "@/constants/general-info";
import Link from "next/link";
import {
  RiKakaoTalkFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTimer2Fill,
} from "react-icons/ri";

export default function MobileBottomButtons() {
  return (
    <div
      className={
        "fixed bottom-0 z-50 flex w-full items-center justify-around border-t bg-white lg:hidden"
      }
    >
      <Link href="/#time" className="flex items-center gap-2 p-3">
        <RiTimer2Fill size={30} />
        <p className="hidden sm:block">진료시간</p>
      </Link>
      <Link href="/#info" className="flex items-center gap-2 p-3">
        <RiMapPin2Fill size={30} />
        <p className="hidden sm:block">오시는길</p>
      </Link>
      <Link href={`tel:${PHONE}`} className="flex items-center gap-2 p-3">
        <RiPhoneFill size={30} />
        <p className="hidden sm:block">전화안내</p>
      </Link>
      <Link
        href={KAKAO}
        target="_blank"
        className="flex items-center gap-2 p-3"
      >
        <RiKakaoTalkFill size={30} />
        <p className="hidden sm:block">카카오톡</p>
      </Link>
    </div>
  );
}
