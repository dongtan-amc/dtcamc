import Container from "@/components/common/container";

import { FaPhoneAlt } from "react-icons/fa";
import VerticalDivider from "./vertical-divider";
import Image from "next/image";
import vetIcon from "@/public/icons/vet.svg";
import locationIcon from "@/public/icons/location3dIcon.png";

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
                  주간 오전 <span className="text-olive-drab-600">9시</span> -
                  오후 <span className="text-olive-drab-600">9시</span>
                </div>
                <div>
                  야간 오후 <span className="text-olive-drab-600">9시</span> -
                  익일 오전 <span className="text-olive-drab-600">9시</span>
                </div>
              </div>

              <div className="text-white bg-olive-drab-600 rounded-full px-4 py-2 text-2xl">
                365일 연중무휴
              </div>
            </div>
          </div>

          <VerticalDivider />

          <div className="flex flex-col items-center font-bold gap-2">
            <p className="text-olive-drab-600 text-4xl">의뢰 자료 메일</p>
            <p className="text-2xl">동탄메일@naver.com</p>
          </div>

          <VerticalDivider />

          <div className="flex flex-col items-center">
            <Image src={vetIcon} alt="vet icon" height={90} />
            <p className="font-bold text-xl">의료진 소개</p>
          </div>

          <VerticalDivider />

          <div>
            <div className="h-[90px] flex justify-center items-center">
              <Image src={locationIcon} alt="location icon" height={80} />
            </div>

            <p className="font-bold text-xl">오시는 길</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
