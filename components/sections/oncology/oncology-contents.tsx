import Container from "@/components/common/container";
import on3 from "@/public/sections/onocology/spleencancer.png";
import on1 from "@/public/sections/onocology/livercancer.png";
import on2 from "@/public/sections/onocology/spleenx.png";
import Image from "next/image";
import { LuScissors } from "react-icons/lu";
import { SlChemistry } from "react-icons/sl";
import { TbRadioactive, TbTargetArrow } from "react-icons/tb";

export default function OncologyContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
          동탄시티의 종양치료 클리닉은
        </h5>

        <div className="px-2 pb-3 pt-1 text-base xl:text-xl">
          종양 치료 클리닉은 기본적인 신체 검사부터 시작하여 종양 진단, 전이
          평가, 종양 수술, 조직 검사 결과에 따른 항암 치료를 통해 환자에게 가장
          알맞은 최적의 치료 계획을 설정합니다. 최신 개발된 항암제부터,
          화학요법(L-CHOP), 메트로놈 항암치료, 전기 화학 치료 등 다양한 종양
          치료를 위해서 저희 의료진이 최선을 다해 노력하고 있습니다.
        </div>
      </div>

      <div className="md: grid grid-cols-1 justify-between gap-3 py-4 md:grid-cols-4">
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <TbRadioactive size={24} />
          <h6 className="pt-3 font-bold">영상장비</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            최고 사양 영상 장비를 활용한 정밀한 전이 평가
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <LuScissors size={24} />
          <h6 className="pt-3 font-bold">외과 협진</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            외과 협진 시스템을 통한 신속한 종양 수술
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <SlChemistry size={24} />
          <h6 className="pt-3 font-bold">전기 화학치료</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            조직 검사 후 종양의 특성에 맞는 항암 치료 및 전기 화학 치료
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <TbTargetArrow size={24} />
          <h6 className="pt-3 font-bold">환자 맞춤형 치료</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            환자와 보호자의 삶의 질을 고려한 진통 관리 및 치료 방향 설정
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between gap-4 py-4 md:grid-cols-3">
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image
            src={on1}
            alt="ct image"
            fill
            className="object-cover"
            sizes="(min-width: 1360px) 416px, (min-width: 780px) 31.61vw, calc(100vw - 32px)"
          />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image
            src={on2}
            alt="ct image"
            fill
            className="object-cover"
            sizes="(min-width: 1360px) 416px, (min-width: 780px) 31.61vw, calc(100vw - 32px)"
          />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image
            src={on3}
            alt="ct image"
            fill
            className="object-cover"
            sizes="(min-width: 1360px) 416px, (min-width: 780px) 31.61vw, calc(100vw - 32px)"
          />
        </div>
      </div>
    </Container>
  );
}
