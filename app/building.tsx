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
    <main className="flex h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="mb-10 text-2xl font-semibold sm:text-3xl">
        24시 동탄시티동물의료센터입니다.
      </h1>
      <div className="flex flex-col items-center gap-2">
        <p className="mb-10 text-base font-semibold sm:text-xl">
          죄송합니다. 현재 저희 홈페이지는 준비 중에 있습니다.
        </p>
        <ul className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {CONTACTS.map((contact, index) => (
            <li key={index} className="">
              <Link
                href={contact.value}
                target="_blank"
                className="flex flex-col items-center gap-2 transition hover:scale-110"
              >
                <div className="relative h-10 w-10">
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
