import { StaticImageData } from "next/image";
import ProfileSummary from "./profile-summary";
import VetImage from "./vet-image";

export default function Vet({
  name,
  title,
  image,
  history,
  expert,
  education,
  subjects,
}: {
  name: string;
  title: string;
  subjects: string[];
  image: StaticImageData;
  history: string[];
  expert: string[];
  education: string[];
}) {
  return (
    <li className="flex gap-4 flex-col lg:flex-row relative">
      <VetImage image={image} name={name} />

      <ProfileSummary
        name={name}
        title={title}
        history={history}
        subjects={subjects}
        education={education}
        expert={expert}
        image={image}
      />
    </li>
  );
}
