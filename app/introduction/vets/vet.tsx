import Image, { StaticImageData } from "next/image";
import ProfileSummary from "./profile-summary";
import ProfileDetailModal from "@/app/introduction/vets/profile-detail-dialog";

export default function Vet({
  name,
  title,
  image,
  history,
  expert,
  education,
}: {
  name: string;
  title: string;
  image: StaticImageData;
  history: string[];
  expert: string[];
  education: string[];
}) {
  return (
    <li className="flex gap-4 relative">
      <Image alt={`${name} 프로필 사진`} src={image} />
      <ProfileSummary name={name} title={title} history={history} />
      <ProfileDetailModal
        name={name}
        title={title}
        image={image}
        history={history}
        expert={expert}
        education={education}
      />
    </li>
  );
}
