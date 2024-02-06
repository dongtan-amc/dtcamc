import { cn } from "@/lib/utils";
import p3 from "@/public/photo/consulting-room.jpeg";
import p1 from "@/public/photo/reception.jpeg";
import p2 from "@/public/photo/referal2.jpg";
import Image from "next/image";

export default function ReferralProcedures() {
  return (
    <div className="pt-10 border-t pb-12">
      <ul className="space-y-6 md:space-y-0">
        {PROCEDURES.map((procedure) => (
          <li
            key={procedure.id}
            className={cn(
              "flex flex-col",
              procedure.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="relative md:w-1/2 w-full aspect-video shrink-0 rounded-lg overflow-hidden">
              <Image alt="procedure image" src={procedure.image} fill />
            </div>
            <div className="py-2 md:p-10 break-keep">
              <div className="text-lg font-bold flex items-center gap-2 pb-4">
                <p className="bg-primary text-slate-50 rounded-full w-8 h-8 flex items-center justify-center">
                  0{procedure.id}
                </p>
                <h4>{procedure.title}</h4>
              </div>

              <p className="leading-6">{procedure.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PROCEDURES = [
  {
    id: 1,
    title: "진료의뢰",
    description:
      "본원으로 환자 정보 및 상태에 대하여 설명 부탁드립니다. 또한 의뢰 병원에서 진행한 검사 자료를 본원 이메일로 보내주시면 진료에 큰 도움이 됩니다.",
    image: p1,
  },
  {
    id: 2,
    title: "담당의 지정 및 연락",
    description:
      "담당 수의사가 보호자가 진료를 마치면 환자 상태에 대하여 전화, 카카오톡, 이메일 등을 통하여 현재 진행 상황을 안내해드리고 있습니다. 의뢰 병원과 원활하고 적극적인 소통을 바탕으로 진료를 이어가고 있습니다.",
    image: p2,
  },
  {
    id: 3,
    title: "퇴원 및 자료전송",
    description:
      "환자의 진료가 끝나면 본원에서 진행한 검사 자료 및 영상자료를 의뢰 병원 이메일로 보내 드리고 있습니다.",
    image: p3,
  },
];
