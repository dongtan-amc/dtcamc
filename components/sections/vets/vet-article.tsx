import Image from "next/image";
import Badges from "./badges";
import Career from "./career";
import ProfileDetailDialog from "./profile-detail-dialog";
import { Vet } from "./vet-section";

export default function VetArticle({
  name,
  title,
  image,
  history,
  expert,
  subjects,
}: Vet) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col-reverse gap-8 p-4 lg:flex-row lg:p-10">
        <div className="lg:w-2/3">
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
          </div>

          <ProfileDetailDialog
            name={name}
            title={title}
            history={history}
            expert={expert}
            subjects={subjects}
          />
        </div>

        <div className="lg:w-1/3">
          <Image
            src={image}
            alt={`${name} profile`}
            placeholder="blur"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </article>
  );
}
