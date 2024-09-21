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
    <article className="h-full overflow-hidden rounded-lg bg-white py-4 shadow-lg lg:min-h-[600px] lg:py-0">
      <div className="flex flex-col-reverse lg:h-[600px] lg:flex-row">
        <div className="relative h-full p-4 lg:w-2/3 lg:p-10">
          <header className="relative mb-6">
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-black text-olive-drab-950 lg:text-5xl">
                {name}
              </h2>
              <h3 className="text-lg font-black text-olive-drab-950 lg:text-2xl lg:leading-none">
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

        <div className="flex lg:h-[600px] lg:w-1/3">
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
