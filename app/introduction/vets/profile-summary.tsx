import { StaticImageData } from "next/image";
import ProfileDetailDialog from "../../../components/sections/vets/profile-detail-dialog";
import Badges from "./badges";

export default function ProfileSummary({
  name,
  title,
  history,
  subjects,
  education,
  expert,
  image,
}: {
  name: string;
  title: string;
  image: StaticImageData;
  history: string[];
  expert: string[];
  education: string[];
  subjects: string[];
}) {
  return (
    <div className="flex flex-col justify-between flex-1 p-5">
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold flex justify-between items-center w-full">
          <p>
            {name} <span className="text-lg">{title}</span>
          </p>
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

      <div className="pt-2">
        <p className="text-olive-drab-600 font-bold text-lg pb-2">약력</p>
        <ul className="space-y-1 text-sm">
          {history.map((his) => (
            <li key={his} className="text-lg">
              - {his}
            </li>
          ))}
        </ul>
      </div>

      <Badges subjects={subjects} />
    </div>
  );
}
