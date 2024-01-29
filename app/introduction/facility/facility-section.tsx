import FacilityCarousel from "./facility-carousel";

import { StaticImageData } from "next/image";
import FacilityCopy from "./facility-copy";
import { cn } from "@/lib/utils";

export default function FacilitySection({
  title,
  images,
  description,
  index,
}: {
  title: string;
  images: StaticImageData[];
  description: JSX.Element;
  index: number;
}) {
  return (
    <div className="flex gap-10">
      <FacilityCarousel images={images} />
      <FacilityCopy title={title} description={description} />
    </div>
  );
}
