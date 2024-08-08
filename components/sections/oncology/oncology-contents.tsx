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
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          동탄시티의 종양치료 클리닉은
        </h5>

        <div className="px-2 pb-3 pt-1 text-xl">
          종양진단, 수술, 항암치료 모든 것을 원스탑으로 진행 맞춤형 상담을 통해
          환자에게 알맞은 최적의 치료계획을 정하게 됩니다. 최신종양치료,
          화학요법(CHOP), 메트로놈항암, 표적항암, 전기화학치료(ECT;
          Electrochemotherapy LEROY Biotech)
        </div>
      </div>

      <div className="flex justify-between gap-3 py-4">
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <SlChemistry size={24} />
          <h6 className="pt-3 font-bold">Chemotherapy</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            Customized chemotherapy protocols for effective cancer treatment.
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <TbRadioactive size={24} />
          <h6 className="pt-3 font-bold">Radiation Therapy</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            Precise radiation therapy targeting tumors while minimizing damage
            to healthy tissue.
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <MdOutlineBiotech size={24} />
          <h6 className="pt-3 font-bold">Immunotherapy</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            Cutting-edge immunotherapies to boost your pet`&apos;`s immune
            system and fight cancer.
          </p>
        </div>
        <div className="w-full rounded-[8px] bg-white p-4 shadow-md">
          <TbTargetArrow size={24} />
          <h6 className="pt-3 font-bold">Targeted Therapy</h6>
          <p className="pt-1 text-[14px] text-[#7D8266]">
            Therapies that specifically target cancer cells while sparing
            healthy cells.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-4 py-4">
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={on1} alt="ct image" fill className="object-cover" />
        </div>
      </div>
    </Container>
  );
}
