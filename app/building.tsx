import { KAKAO, NAVER_BLOG, NAVER_MAP, PHONE } from "@/constants/general-info";
import kakao from "@/public/icons/kakao.svg";
import map from "@/public/icons/map.png";
import blog from "@/public/icons/navar-blog.png";
import phone from "@/public/icons/phone.svg";
import Image from "next/image";
import Link from "next/link";

const CONTACTS = [
  {
    icon: phone,
    title: PHONE,
    value: `tel:${PHONE}`,
  },
  {
    icon: blog,
    title: "네이버 블로그",
    value: NAVER_BLOG,
  },

  {
    icon: kakao,
    title: "카카오채널",
    value: KAKAO,
  },
  {
    icon: map,
    title: "오시는 길",
    value: NAVER_MAP,
  },
];

export default function Building() {
  return (
    <main className="bg-slate-950 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
        24시 동탄시티동물의료센터입니다.
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="mb-10 font-semibold text-base sm:text-xl">
          죄송합니다. 현재 저희 홈페이지는 준비 중에 있습니다.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {CONTACTS.map((contact) => (
            <li key={contact.title} className="">
              <Link
                href={contact.value}
                target="_blank"
                className="flex flex-col items-center gap-2 hover:scale-110 transition"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={contact.icon}
                    alt={contact.title}
                    fill
                    quality={30}
                  />
                </div>
                <p>{contact.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
