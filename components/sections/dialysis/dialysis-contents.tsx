import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import dialysis from "@/public/tools/dia.jpg";

export default function DialysisContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          동탄시티의 신장투석 클리닉은
        </h5>

        <div className="px-2 pb-3 pt-1 text-base xl:text-xl">
          신장질환을 앓고 있는 반려동물에게 필수적인 신장/혈액투석클리닉입니다.
          신장은 한번 손상되기 시작하면, 회복하기 어려운 장기이기 때문에 신속한
          대응과 처치가 필수적입니다. 일반적인 치료로 관리가 되지 않는 만성
          신부전증 환자부터, 약물 중독 및 급성 신부전 환자까지 다양한 신부전
          환자에게 혈액투석이 필요할 수 있습니다. 또한, 본원에서는 투석뿐 아니라
          다양한 비뇨기계 수술(SUB, PU, 요관절개, 방광결석, 비뇨기종양) 이 가능
          합니다.
        </div>
      </div>

      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          신장투석 장비 소개
        </h5>

        <div className="flex w-full flex-col gap-10 md:flex-row">
          <Image src={dialysis} alt="dia image" className="w-full md:w-1/3" />

          <div className="w-full md:w-2/3">
            <div className="pb-2 text-xl font-bold">FMC multfiltrate Pro</div>
            <div className="text-base text-[#7D8266] xl:text-lg">
              신장 기능에 문제가 있는 동물들의 혈액을 정화하는 데 사용됩니다.
              <br /> <br />
              동물의 혈액을 체외로 추출하여 기계 내부의 특수 필터를 통과시킨 후
              다시 몸 안으로 되돌려 보냅니다. <br /> <br />
              혈액이 필터를 통과하면서 노폐물, 과도한 수분, 전해질 등이
              제거됩니다. <br /> <br />
              급성 또는 만성 신부전, 중독, 또는 특정 대사 질환을 가진 동물들에게
              주로 사용됩니다. <br /> <br />
              첨단 기술을 적용하여 치료 중 발생할 수 있는 합병증을 최소화하도록
              설계되었습니다.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
