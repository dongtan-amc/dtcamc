import Container from "@/components/common/container";
import ctImage1 from "@/public/sections/ct/1.png";
import ctImage2 from "@/public/sections/ct/2.png";
import ctImage3 from "@/public/sections/ct/3.png";
import Image from "next/image";

export default function CtContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          동탄시티 영상진단센터는
        </h5>
        <p className="px-2 pb-3 pt-1 text-base xl:text-xl">
          동탄 1 신도시 최초 64채널 CT를 동물병원에 도입하였습니다. 최고 사양 CT
          모델 Aquilion CX/128 slice를 활용하여 0.5 mm의 얇은 128개의 단면
          영상을 신속히 획득 할 수 있어 마취 시간을 단축시킬 수 있습니다. 또한,
          64 채널 128 슬라이스의 고화질의 CT 영상을 통해 영상 왜곡을 최소화하고
          X-ray에서는 확인하기 힘든 5 mm 이하의 미세 병변도 확인이 가능하여
          정확한 진단을 할 수 있습니다. 심화 진단이 필요한 경우, 조영제 인젝터를
          통한 동맥기 촬영으로 종양 유래 확인, 간 질환 진단, 심혈관계 진단이
          용이합니다. 저희 동탄시티동물의료센터에서는 본원 환자뿐 아니라 1차
          동물 병원과의 CT 촬영 의뢰 시스템을 통해서 원활한 협진이 가능하도록
          최선을 다하고 있습니다.
        </p>
      </div>

      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">영상장비 소개</h5>
        <p className="px-2 pb-3 pt-1 text-xl">
          Aquilion CX/64 채널/128 slice... 추가
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={ctImage1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={ctImage2} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={ctImage3} alt="ct image" fill className="object-cover" />
        </div>
      </div>
    </Container>
  );
}
