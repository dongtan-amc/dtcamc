import { StaticImageData } from "next/image";
import Badges from "./badges";
import ProfileDetailModal from "./profile-detail-dialog";
import { useState } from "react";

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
          <ProfileDetailModal
            name={name}
            title={title}
            image={image}
            history={history}
            expert={expert}
            education={education}
            subjects={subjects}
          />
        </div>
      </div>

      <div className="pt-2">
        <p className="text-olive-drab-600 pb-1 font-bold">약력</p>
        <ul className="space-y-1 text-sm">
          {history.map((his) => (
            <li key={his}>- {his}</li>
          ))}
        </ul>
      </div>

      <Badges subjects={subjects} />
    </div>
  );
}
