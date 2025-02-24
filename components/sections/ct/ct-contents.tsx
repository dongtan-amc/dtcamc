import Container from "@/components/common/container";
import ct from "@/public/tools/ct.jpg";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function CtContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
          동탄시티 영상진단센터는
        </h5>
        <p className="px-2 pb-3 pt-1 text-base xl:text-xl">
          동탄 1 신도시 최초 Aquilion CX/128 slice CT를 동물병원에
          도입하였습니다. 최고 사양 CT 모델 Aquilion CX/128 slice를 활용하여 0.5
          mm의 얇은 128개의 단면 영상을 신속히 획득 할 수 있어 마취 시간을
          단축시킬 수 있습니다. 또한, 128 슬라이스의 고화질의 CT 영상을 통해
          영상 왜곡을 최소화하고 X-ray에서는 확인하기 힘든 5 mm 이하의 미세
          병변도 확인이 가능하여 정확한 진단을 할 수 있습니다. 심화 진단이
          필요한 경우, 조영제 인젝터를 통한 동맥기 촬영으로 종양 유래 확인, 간
          질환 진단, 심혈관계 진단이 용이합니다. 저희 동탄시티동물의료센터에서는
          본원 환자뿐 아니라 1차 동물 병원과의 CT 촬영 의뢰 시스템을 통해서
          원활한 협진이 가능하도록 최선을 다하고 있습니다.
        </p>
      </div>

      <h5 className="px-2 pb-3 pt-5 text-xl font-bold md:text-2xl">
        Aquilion CX/128 slice CT 소개
      </h5>

      <div className="flex flex-col gap-4 md:flex-row">
        <Image src={ct} alt="ct image" className="md:w-1/3" />
        <div className="text-base text-[#7D8266] md:text-lg">
          Aquilion CX는 도시바의 고급 CT 스캐너 라인업 중 하나입니다.
          <br />
          <br />
          <p className="flex items-center gap-1">
            <CheckIcon />
            64채널 검출기 시스템 128
          </p>
          <br />
          <p className="flex items-center gap-1">
            <CheckIcon />
            슬라이스 이미징 능력
          </p>
          <br />
          <p className="flex items-center gap-1">
            <CheckIcon />
            고속 스캔 및 높은 해상도 제공
          </p>
          <br />
          <p className="flex items-center gap-1">
            <CheckIcon />
            저선량 기술 적용으로 환자 방사선 노출 감소
          </p>
          <br />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 justify-between gap-4 py-4 md:grid-cols-4">
          {[
            "/sections/ct/1.jpg",
            "/sections/ct/2.jpg",
            "/sections/ct/3.jpg",
            "/sections/ct/4.jpg",
          ].map((image, index) => (
            <div
              className="relative h-[240px] w-full overflow-hidden rounded-xl"
              key={image}
            >
              <img
                src={image}
                alt="ct image"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
