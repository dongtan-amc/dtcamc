import Image, { type StaticImageData } from "next/image";

export default function ToolCard({
  name,
  description,
  image,
  index,
}: {
  name: string;
  description: string;
  image: StaticImageData;
  index: number;
}) {
  return (
    <li className="flex flex-col items-center rounded-2xl bg-white p-10 shadow-md">
      <p className="pb-4 font-bold">
        {index < 9 ? `0${index + 1}` : index + 1}
      </p>

      <h3 className="pb-[25px] text-[24px] font-bold">{name}</h3>

      <div className="pb-4 text-center text-[18px]">{description}</div>

      <div className="relative mx-auto">
        <Image src={image} alt="image" />
      </div>
    </li>
  );
}
