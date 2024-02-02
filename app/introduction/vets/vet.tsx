import ProfileDetailModal from "@/app/introduction/vets/profile-detail-dialog";
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
    <li className="flex gap-4 relative">
      <VetImage image={image} name={name} />

      <ProfileSummary
        name={name}
        title={title}
        history={history}
        subjects={subjects}
      />
      <ProfileDetailModal
        name={name}
        title={title}
        image={image}
        history={history}
        expert={expert}
        education={education}
        subjects={subjects}
      />
    </li>
  );
}
