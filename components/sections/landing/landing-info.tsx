import { Separator } from "@/components/ui/separator";
import kakao from "@/public/icons/kakao.svg";
import map from "@/public/icons/map.png";
import naverBlog from "@/public/icons/navar-blog.png";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function LandingInfo() {
  return (
    <div className="absolute h-[120px] bottom-0 w-[1280px] flex justify-evenly items-center bg-slate-950 left-[calc(50%-640px)] text-white py-5 rounded-t-xl">
      <div className="space-y-2 font-bold">
        <div className="text-primary flex items-center text-2xl gap-2 font-extrabold tracking-tight">
          <FaPhoneAlt />
          <p>031.8003.7533</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="text-lg leading-tight ">
            <div>
              주간: 오전 <span className="text-primary">9시</span> - 오후{" "}
              <span className="text-primary">9시</span>
            </div>
            <div>
              야간: 오후 <span className="text-primary">9시</span> - 익일 오전{" "}
              <span className="text-primary">9시</span>
            </div>
          </div>

          <div className="text-white bg-primary rounded-full px-4 py-1 text-lg">
            365일 연중무휴
          </div>
        </div>
      </div>

      <Separator orientation="vertical" />

      <Link
        className="flex items-center font-bold gap-3"
        href="https://blog.naver.com/PostList.naver?blogId=dtctamc&from=postList&categoryNo=6"
        target="_blank"
      >
        <Image alt="naver blog" src={naverBlog} width={32} />
        <p className="text-lg">수술&진료 사례</p>
      </Link>

      <Separator orientation="vertical" />

      <Link
        className="flex items-center font-bold gap-3"
        href="https://pf.kakao.com/_RLdib"
        target="_blank"
      >
        <Image alt="naver blog" src={kakao} width={32} />
        <p className="font-bold text-lg">카카오톡 채널</p>
      </Link>

      <Separator orientation="vertical" />

      <Link className="flex items-center font-bold gap-1" href="/map">
        <Image alt="naver blog" src={map} width={44} />
        <p className="font-bold text-lg">오시는 길</p>
      </Link>
    </div>
  );
}
