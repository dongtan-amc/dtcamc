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
    <article className="h-full overflow-hidden rounded-lg bg-white shadow-lg lg:min-h-[600px]">
      <div className="flex h-[600px] flex-col-reverse gap-8 lg:flex-row">
        <div className="relative h-full p-10 lg:w-2/3">
          <header className="relative mb-6">
            <div className="flex items-end gap-2">
              <h2 className="text-5xl font-black text-olive-drab-950">
                {name}
              </h2>
              <h3 className="text-2xl font-black leading-none text-olive-drab-950">
                {title}
              </h3>
              <ProfileDetailDialog
                name={name}
                title={title}
                history={history}
                expert={expert}
                subjects={subjects}
              />
            </div>
            <Badges subjects={subjects} />
          </header>

          <div className="space-y-6">
            <Career title="약력" items={history} />
          </div>
        </div>

        <div className="flex h-[600px] lg:w-1/3">
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
