"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./carousel-card";

const CAROUSEL_ITEMS = [
  {
    title: (
      <>
        <span className="text-olive-drab-400">시티수술센터</span> 정확한 진단 &
        수술 계획 부터 안전한 수술과 회복까지 최선을 다하겠습니다.
      </>
    ),
    subtitle:
      "대학병원 출신 외과 수의사 선생님들의 진료 및 수술 십자인대 교정술 (TPLO/CBLO/SwiveLock), 슬개골 탈구 (재탈구/PGR/DFO), 골절 (다리, 골반, 복합&개방 골절), 어깨관절수술? 담낭 파열, 담낭 절제술, 간엽 절제술, 간 생검 Fixin System/Stryker/Arthrex/Ft10/Sonocure",
    tags: [
      {
        label: "정형외과클리닉",
        hash: "orthopedic",
      },
      {
        label: "간담도계클리닉",
        hash: "biliary",
      },
    ],
  },
  {
    title: (
      <>
        <span className="text-olive-drab-400">신장/혈액투석클리닉</span> 신장
        질환의 진단 및 치료의 A to Z
      </>
    ),
    subtitle:
      "신장 질환 환자 내원시 신속한 진단부터 빠른 처치까지 한번에 진행하게 됩니다. FMC multifiltrate pro CRRT(지속적신대체요법)",
    tags: [
      {
        label: "신장/혈액투석클리닉",
        hash: "dialysis",
      },
    ],
  },
  {
    title: (
      <>
        <span className="text-olive-drab-400">종양치료 클리닉</span> 종양진단,
        수술, 항암치료 모든 것을 원스탑으로 진행
      </>
    ),
    subtitle:
      " 정확한 종양 진단 후 수술 및 항암치료를 진행합니다. 이에 따라 맞춤형 상담을 통해 최적의 치료계획을 정하게 됩니다. 화학요법(CHOP), 메트로놈항암, 표적항암, 전기화학치료(ECT)",
    tags: [
      {
        label: "종양치료 클리닉",
        hash: "?",
      },
    ],
  },
  {
    title: (
      <>
        <span className="text-olive-drab-400">진단영상 센터</span> 빠르고 꼼꼼한
        영상 판독과 정확한 진단
      </>
    ),
    subtitle: "대학병원급 고해상도 초음파를 이용하여 심장,복부 초음파 가능",
    tags: [
      {
        label: "진단영상(초음파/CT)센터",
        hash: "ct",
      },
    ],
  },
  {
    title: (
      <>
        <span className="text-olive-drab-400">대형 병원 출신의 의료진</span>들이
        반려 동물을 위해 최선을 다하는 동탄시티동물의료센터
      </>
    ),
    subtitle:
      "24시간 마시모 중환자 모니터링, FAST초음파시스템, HFNC(고유량비강산소요법), 옥서스산소시스템",
    tags: [
      {
        label: "의료진 소개",
        hash: "vets",
      },
    ],
  },
];

export default function LandingCarousel() {
  return (
    <Carousel
      className="w-[1370px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselCard key={index} {...item} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
