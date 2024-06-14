import Container from "@/components/common/container";
import Image from "next/image";
import {
  LuActivity,
  LuCalendarDays,
  LuHelpingHand,
  LuScissors,
} from "react-icons/lu";
import { SlChemistry } from "react-icons/sl";
import { TbRadioactive, TbTargetArrow } from "react-icons/tb";
import { MdOutlineBiotech } from "react-icons/md";
import on1 from "@/public/sections/onocology/1.png";

export default function OncologyContents() {
  return (
    <Container>
      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          동탄시티의 종양치료 클리닉은
        </h5>

        <div className="text-xl px-2 pt-1 pb-3">
          종양진단, 수술, 항암치료 모든 것을 원스탑으로 진행 맞춤형 상담을 통해
          환자에게 알맞은 최적의 치료계획을 정하게 됩니다. 최신종양치료,
          화학요법(CHOP), 메트로놈항암, 표적항암, 전기화학치료(ECT;
          Electrochemotherapy LEROY Biotech)
        </div>
      </div>

      <div className="flex justify-between gap-3 py-4">
        <div className="border rounded-[8px] p-4 w-full">
          <SlChemistry size={24} />
          <h6 className="font-bold pt-3">Chemotherapy</h6>
          <p className="text-[#7D8266] text-[14px] pt-1 ">
            Customized chemotherapy protocols for effective cancer treatment.
          </p>
        </div>
        <div className="border rounded-[8px] p-4 w-full">
          <TbRadioactive size={24} />
          <h6 className="font-bold pt-3">Radiation Therapy</h6>
          <p className="text-[#7D8266] text-[14px] pt-1">
            Precise radiation therapy targeting tumors while minimizing damage
            to healthy tissue.
          </p>
        </div>
        <div className="border rounded-[8px] p-4 w-full">
          <MdOutlineBiotech size={24} />
          <h6 className="font-bold pt-3">Immunotherapy</h6>
          <p className="text-[#7D8266] text-[14px] pt-1">
            Cutting-edge immunotherapies to boost your pet`&apos;`s immune
            system and fight cancer.
          </p>
        </div>
        <div className="border rounded-[8px] p-4 w-full">
          <TbTargetArrow size={24} />
          <h6 className="font-bold pt-3">Targeted Therapy</h6>
          <p className="text-[#7D8266] text-[14px] pt-1">
            Therapies that specifically target cancer cells while sparing
            healthy cells.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-4 py-4">
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
      </div>
    </Container>
  );
}
