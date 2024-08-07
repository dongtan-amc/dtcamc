import { NAME } from "@/constants/general-info";
import Image from "next/image";
import Badges from "./badges";
import ProfileDetailDialog from "./profile-detail-dialog";
import { Schdule } from "./schedule";
import { Vet } from "./vet-section";

export default function VetArticle({
  name,
  title,
  image,
  history,
  expert,
  education,
  subjects,
  schedule,
}: Vet) {
  return (
    <article className="min-h-screen">
      <div className="flex gap-10 bg-white p-12 pb-0">
        <div className="relative w-1/2 tracking-tight">
          <p className="text-[32px]">{NAME.slice(3)}</p>

          <div className="pt-[10px] text-olive-drab-400">
            <span className="text-[60px] font-bold">{name}</span>{" "}
            <span className="text-[43px]">{title}</span>
          </div>

          <Badges subjects={subjects} />

          <div className="flex flex-col gap-[35px] pt-[45px]">
            <div>
              <p className="pb-2 text-[20px] font-bold text-olive-drab-600">
                약력
              </p>
              <ul className="space-y-1 text-sm">
                {history.map((his) => (
                  <li key={his} className="list-disc text-[20px] leading-6">
                    {his}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="pb-2 text-[20px] font-bold text-olive-drab-600">
                전문활동사항
              </p>
              <ul className="space-y-1 text-sm">
                {expert.map((his) => (
                  <li key={his} className="list-disc text-[20px] leading-6">
                    {his}
                  </li>
                ))}
              </ul>
            </div>

            <ProfileDetailDialog
              name={name}
              title={title}
              history={history}
              expert={expert}
              education={education}
              subjects={subjects}
            />
          </div>
        </div>

        <div className="w-1/2">
          <Image
            src={image}
            alt={`${name} image`}
            placeholder="blur"
            sizes="612px"
          />
        </div>
      </div>

      <Schdule schedule={schedule} />
    </article>
  );
}
