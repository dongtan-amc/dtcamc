import Container from "@/components/common/container";

import {
  LuScissors,
  LuActivity,
  LuCalendarDays,
  LuHelpingHand,
} from "react-icons/lu";
import Image from "next/image";
import ortho1 from "@/public/sections/orthopedics/1.png";
import ortho2 from "@/public/sections/orthopedics/2.png";
import ortho3 from "@/public/sections/orthopedics/3.png";
import ortho4 from "@/public/sections/orthopedics/4.png";

export default function OrhopedicContents() {
  return (
    <Container>
      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          Orthopedic Services
        </h5>

        <div className="flex justify-between gap-3 py-4">
          <div className="border rounded-[8px] p-4">
            <LuScissors size={24} />
            <h6 className="font-bold pt-3">Advanced Surgical Techniques</h6>
            <p className="text-[#7D8266] text-[14px] pt-1 ">
              We use advanced surgical techniques to repair fractures, correct
              limb deformities, and more.
            </p>
          </div>
          <div className="border rounded-[8px] p-4">
            <LuActivity size={24} />
            <h6 className="font-bold pt-3">24/7 Emergency & Critical Care</h6>
            <p className="text-[#7D8266] text-[14px] pt-1">
              Our hospital is open 24/7 for emergencies and critical care. No
              appointment needed.
            </p>
          </div>
          <div className="border rounded-[8px] p-4">
            <LuCalendarDays size={24} />
            <h6 className="font-bold pt-3">Custom Treatment Plans</h6>
            <p className="text-[#7D8266] text-[14px] pt-1">
              Each patient receives a custom treatment plan tailored to their
              specific needs.
            </p>
          </div>
          <div className="border rounded-[8px] p-4">
            <LuHelpingHand size={24} />
            <h6 className="font-bold pt-3">Dedicated Veterinary Specialists</h6>
            <p className="text-[#7D8266] text-[14px] pt-1">
              Our team of board-certified veterinary surgeons specializes in
              orthopedic care.
            </p>
          </div>
        </div>

        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          Advanced Surgical Equipment
        </h5>
        <div className="flex justify-between gap-4">
          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho1} alt="ct image" fill className="object-cover" />
          </div>
          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho2} alt="ct image" fill className="object-cover" />
          </div>
          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho3} alt="ct image" fill className="object-cover" />
          </div>
        </div>
      </div>
    </Container>
  );
}
