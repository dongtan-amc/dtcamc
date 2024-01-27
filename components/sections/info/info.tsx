import Container from "@/components/common/container";

import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import VerticalDivider from "./vertical-divider";
import Image from "next/image";

import kakao from "@/public/icons/kakao.svg";
import map from "@/public/icons/map.png";
import naverBlog from "@/public/icons/navar-blog.png";

export default function Info() {
  return (
    <section>
      <Container>
        <div className="flex justify-between h-[160px] items-center">
          <div className="space-y-2">
            <div className="text-olive-drab-600 flex items-center text-6xl gap-2 font-extrabold tracking-tight">
              <FaPhoneAlt size={48} />
              <p>031.8003.7533</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xl leading-tight font-bold">
                <div>
                  주간: 오전 <span className="text-olive-drab-600">9시</span> -
                  오후 <span className="text-olive-drab-600">9시</span>
                </div>
                <div>
                  야간: 오후 <span className="text-olive-drab-600">9시</span> -
                  익일 오전 <span className="text-olive-drab-600">9시</span>
                </div>
              </div>

              <div className="text-white bg-olive-drab-600 rounded-full px-4 py-2 text-2xl">
                365일 연중무휴
              </div>
            </div>
          </div>

          <VerticalDivider />

          <div className="flex items-center font-bold gap-3">
            <Image alt="naver blog" src={naverBlog} width={40} />
            <p className="text-2xl">수술&진료 사례</p>
          </div>

          <VerticalDivider />

          <div className="flex items-center font-bold gap-2">
            <Image alt="naver blog" src={kakao} width={40} />
            <p className="font-bold text-2xl">카카오톡 채널</p>
          </div>

          <VerticalDivider />

          <div className="flex items-center font-bold gap-2">
            <Image alt="naver blog" src={map} width={50} />
            <p className="font-bold text-2xl">오시는 길</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
