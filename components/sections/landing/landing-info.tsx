import Container from "@/components/common/container";
import { Separator } from "@/components/ui/separator";
import { KAKAO, PHONE } from "@/constants/general-info";
import kakao from "@/public/icons/kakao.svg";
import map from "@/public/icons/map.png";
import naverBlog from "@/public/icons/navar-blog.png";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function LandingInfo() {
  return (
    <Container>
      <div className="hidden lg:flex h-[120px] justify-evenly items-center left-[calc(50%-640px)] py-10 rounded-t-xl">
        <div className="flex gap-4 items-center">
          <div className="text-primary flex items-center text-2xl gap-2  tracking-tight">
            <FaPhoneAlt />
            <p className="font-bold">{PHONE}</p>
          </div>
          <div>365일 연중무휴</div>
        </div>

        <Separator orientation="vertical" />

        <Link className="flex items-center gap-3" href="/community/case">
          <Image alt="naver blog" src={naverBlog} width={32} unoptimized />
          <p>수술&진료 사례</p>
        </Link>

        <Separator orientation="vertical" />

        <Link
          className="flex items-center gap-3"
          href={KAKAO}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="kako" src={kakao} width={32} unoptimized />
          <p>카카오톡 채널</p>
        </Link>

        <Separator orientation="vertical" />

        <Link className="flex items-center gap-1" href="/map">
          <Image alt="map" src={map} width={44} unoptimized />
          <p>오시는 길</p>
        </Link>
      </div>
    </Container>
  );
}
