import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import dialysis1 from "@/public/sections/dialysis/2.png";
import dialysis2 from "@/public/sections/dialysis/4.png";

export default function DialysisContents() {
  return (
    <Container>
      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          동탄시티의 신장투석 클리닉은
        </h5>

        <div className="text-xl px-2 pt-1 pb-3">
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
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          신장투석 장비 소개
        </h5>

        <div className="flex gap-10">
          <div className="w-full">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={dialysis1}
                alt="dia image"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3">
              <div className="font-bold ">Dialysis Machines</div>
              <div className="text-[#7D8266]">
                Advanced technology ensures the most effective treatment for
                your pet`&apos;s kidney disease.
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={dialysis2}
                alt="dia image"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3">
              <div className="font-bold ">Dialysis Machines</div>
              <div className="text-[#7D8266]">
                Advanced technology ensures the most effective treatment for
                your pet`&apos;s kidney disease.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
