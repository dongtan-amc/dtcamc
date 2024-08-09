import Container from "@/components/common/container";

import {
  LuScissors,
  LuActivity,
  LuCalendarDays,
  LuHelpingHand,
} from "react-icons/lu";
import Image from "next/image";
import ortho1 from "@/public/sections/orthopedics/1.png";
import ortho2 from "@/public/sections/orthopedics/2.png";
import ortho3 from "@/public/sections/orthopedics/3.png";
import ortho4 from "@/public/sections/orthopedics/4.png";

export default function OrthopedicContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
          동탄시티의 정형외과클리닉은
        </h5>

        <div className="px-2 pb-3 pt-1 text-base sm:text-xl">
          동탄시티동물의료센터에서는 많은 경험을 갖고 계신 정형외과 전공 수의사
          선생님들이 진료를 보시고, 직접 상담 및 수술을 진행하고 있습니다. Fixin
          System, Arthrex 장비 등 최신 수술 장비들의 도입으로 정확한 정형외과
          수술이 가능합니다. 우리 아이에게 가장 적합하고 좋은 수술 방법을
          제시해주는 병원을 선택해주세요. <br />
          <br />
          본원 진행 수술 : 십자인대 교정, 슬개골 탈구(재탈구 교정, DFO, PGR),
          고관절 (PennHIP, FHNO), 골절 (다리, 골반, 복합&개방 골절) 등
        </div>

        <div className="grid grid-cols-2 justify-between gap-3 py-4 xl:grid-cols-4">
          <div className="w-full rounded-lg bg-white p-4 shadow-md">
            <LuScissors size={24} />
            <h6 className="pt-3 text-lg font-bold">고난도 정형외과 수술</h6>
            <p className="pt-1 text-[#7D8266]">
              정형외과 전공의 수의사가 직접 수술합니다.
            </p>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow-md">
            <LuActivity size={24} />
            <h6 className="pt-3 text-lg font-bold">안전한 마취 시스템</h6>
            <p className="pt-1 text-[#7D8266]">
              호흡마취 시스템과 실시간 모니터링을 통해 안전한 마취가 가능합니다.
            </p>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow-md">
            <LuCalendarDays size={24} />
            <h6 className="pt-3 text-lg font-bold">환자 중심 수술일정</h6>
            <p className="pt-1 text-[#7D8266]">
              환자의 상태를 종합적으로 판단하여 수술을 진행합니다.
            </p>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow-md">
            <LuHelpingHand size={24} />
            <h6 className="pt-3 text-lg font-bold">수술 후 재활케어</h6>
            <p className="pt-1 text-[#7D8266]">
              수술의 연장선상에 있는 재활 역시 최선을 다합니다.
            </p>
          </div>
        </div>

        <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
          정형외과 수술
        </h5>
        <div className="grid grid-cols-2 justify-between gap-3 xl:grid-cols-4">
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
            <Image
              src={ortho1}
              alt="ct image"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 311px, calc(50vw - 22px)"
            />
            <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-white">
              슬개골탈구
              <br />
              <span className="text-sm">재탈구 교정, DFO, PGR</span>
            </p>
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>

          <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
            <Image
              src={ortho2}
              alt="ct image"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 311px, calc(50vw - 22px)"
            />
            <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-white">
              십자인대교정
              <br />
              <span className="text-sm">TPLO, CBLO, TTA rapid, SwiveLock</span>
            </p>
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
            <Image
              src={ortho3}
              alt="ct image"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 311px, calc(50vw - 22px)"
            />
            <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-white">
              십자인대교정
              <br />
              <span className="text-sm">PennHIP, FHNO</span>
            </p>
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>

          <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
            <Image
              src={ortho4}
              alt="ct image"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 311px, calc(50vw - 22px)"
            />
            <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-white">
              골절
              <br />
              <span className="text-sm">다리, 골반, 복합&개방</span>
            </p>
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>
        </div>
      </div>
    </Container>
  );
}
