import Container from "@/components/common/container";
import ortho1 from "@/public/sections/orthopedics/patella.png";
import ortho2 from "@/public/sections/orthopedics/cclr.png";
import ortho3 from "@/public/sections/orthopedics/fhno.png";
import ortho4 from "@/public/sections/orthopedics/fracture.png";
import Image from "next/image";
import {
  LuActivity,
  LuCalendarDays,
  LuHelpingHand,
  LuScissors,
} from "react-icons/lu";
const CONTENTS = [
  { title: "슬개골탈구", subtitle: "재탈구 교정, DFO, PGR", image: ortho1 },
  {
    title: "십자인대교정",
    subtitle: "TPLO, CBLO, TTA rapid, SwiveLock",
    image: ortho2,
  },
  {
    title: "고관절수술",
    subtitle: "PennHIP, FHNO",
    image: ortho3,
  },
  {
    title: "골절수술",
    subtitle: "다리, 골반, 복합&개방",
    image: ortho4,
  },
];

export default function OrthopedicContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
          동탄시티의 정형외과클리닉은
        </h5>

        <div className="px-2 pb-3 pt-1 text-base sm:text-xl">
          숙련된 정형외과 전공자가 진료를 보시고, 직접 상담 및 수술을 진행하고
          있습니다. Fixin System, Arthrex 장비 등 최신 수술 장비들의 도입으로
          정확한 정형외과 수술이 가능합니다. 우리 아이에게 가장 적합하고 좋은
          수술 방법을 제시해주는 병원을 선택해주세요.
          <br />
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
          {CONTENTS.map((content, index) => (
            <div key={index}>
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
                <Image
                  src={content.image}
                  alt="ct image"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 311px, calc(50vw - 22px)"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-base font-semibold text-olive-drab-950 lg:text-2xl">
                  {content.title}
                </div>
                <div className="text-sm text-slate-950 lg:text-base">
                  {content.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
