import { TextGenerateEffect } from "@/components/common/text-generate-effect";

export default function LandingCopy() {
  return (
    <div className="text-white absolute top-1/3 px-4 lg:px-0 lg:w-[1280px] lg:left-[calc(50%-640px)]">
      <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
        따뜻한 마음으로
        <br />내 가족처럼 돌보는
        <br />
        <span className="text-olive-drab-600">동탄시티동물의료센터</span>
        <br />
        입니다
      </h2>
      <TextGenerateEffect
        words="언제나 반려동물의 건강과 함께 보호자의 행복한 삶을 위해 노력하겠습니다"
        className="text-base lg:text-lg pt-4"
      />
      <TextGenerateEffect
        words="숙련된 수의사와 의료진과 함께 언제나 든든한 동물병원이 되겠습니다"
        className="text-base lg:text-lg"
      />
    </div>
  );
}
