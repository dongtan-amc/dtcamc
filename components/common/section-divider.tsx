import Image, { StaticImageData } from "next/image";

export default function SectionDevider({ image }: { image: StaticImageData }) {
  return (
    <div className="relative h-[600px] w-full">
      <Image alt="section divider" src={image} fill className="object-cover" />
    </div>
  );
}
