import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import FacilityCarousel from "./facility-carousel";
import FacilityCopy from "./facility-copy";

export default function FacilitySection({
  title,
  images,
  description,
  index,
}: {
  title: string;
  images: StaticImageData[];
  description: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex gap-5 lg:gap-10 flex-col lg:flex-row ",
        index !== 4 && "border-b pb-10"
      )}
    >
      <FacilityCarousel images={images} />
      <FacilityCopy title={title} description={description} />
    </div>
  );
}
