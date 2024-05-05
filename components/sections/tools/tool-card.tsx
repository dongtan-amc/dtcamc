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
    <li className="flex flex-col items-center rounded-2xl p-10 bg-white shadow-md">
      <p className="font-bold pb-4">
        {index < 9 ? `0${index + 1}` : index + 1}
      </p>

      <h3 className="text-[24px] font-bold pb-[25px]">{name}</h3>

      <div className="text-[18px] text-center pb-4">{description}</div>

      <div className="w-[240px] h-[240px] relative ">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </li>
  );
}
