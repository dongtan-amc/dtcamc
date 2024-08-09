import Image from "next/image";
import Badges from "./badges";
import Career from "./career";
import ProfileDetailDialog from "./profile-detail-dialog";
import { Schedule } from "./schedule";
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
    <article className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col-reverse gap-8 px-4 pb-4 pt-4 lg:flex-row lg:px-12 lg:pb-0 lg:pt-12">
        <div className="lg:w-1/2">
          <header className="relative mb-6">
            <div className="flex items-end gap-2">
              <h2 className="text-4xl font-extrabold text-olive-drab-600">
                {name}
              </h2>
              <h3 className="text-2xl text-olive-drab-400">{title}</h3>
            </div>
            <Badges subjects={subjects} />
          </header>

          <div className="space-y-6">
            <Career title="약력" items={history} />
            <Career title="전문활동사항" items={expert} />
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

        <div className="lg:w-1/2">
          <Image
            src={image}
            alt={`${name} profile`}
            placeholder="blur"
            sizes="(min-width: 1360px) 576px, (min-width: 1040px) calc(45.33vw - 31px), calc(98.75vw - 51px)"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <Schedule schedule={schedule} />
    </article>
  );
}
