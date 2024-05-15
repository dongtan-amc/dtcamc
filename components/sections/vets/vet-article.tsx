import Container from "@/components/common/container";
import { NAME } from "@/constants/general-info";
import Image, { StaticImageData } from "next/image";
import Badges from "./badges";
import { Schdule } from "./schedule";
import ProfileDetailDialog from "./profile-detail-dialog";

export default function VetArticle({
  name,
  title,
  image,
  history,
  expert,
  education,
  subjects,
  schedule,
}: {
  name: string;
  title: string;
  image: StaticImageData;
  history: string[];
  expert: string[];
  education: string[];
  subjects: string[];
  schedule: number[];
}) {
  return (
    <article className="min-h-screen pt-[90px]">
      <Container>
        <div className="flex gap-10 bg-white p-12 pb-0 rounded-t-2xl">
          <div className="w-1/2 tracking-tight relative">
            <p className="text-[32px]">{NAME.slice(3)}</p>

            <div className="pt-[10px] text-olive-drab-400">
              <span className="text-[60px] font-bold">{name}</span>{" "}
              <span className="text-[43px]">{title}</span>
            </div>

            <Badges subjects={subjects} />

            <div className="pt-[45px] flex flex-col gap-[35px]">
              <div>
                <p className="text-olive-drab-600 text-[20px] font-bold pb-2">
                  약력
                </p>
                <ul className="space-y-1 text-sm">
                  {history.map((his) => (
                    <li key={his} className="text-[20px] list-disc leading-6">
                      {his}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-olive-drab-600 text-[20px] font-bold pb-2">
                  전문활동사항
                </p>
                <ul className="space-y-1 text-sm">
                  {expert.map((his) => (
                    <li key={his} className="text-[20px] list-disc leading-6">
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
            <Image src={image} alt={`${name} image`} placeholder="blur" />
          </div>
        </div>

        <Schdule schedule={schedule} />
      </Container>
    </article>
  );
}
