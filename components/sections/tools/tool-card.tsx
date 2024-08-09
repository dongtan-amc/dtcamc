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
    <div className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-[1.01]">
      <div className="relative h-60">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-contain transition-opacity hover:opacity-90"
          sizes="(min-width: 1280px) 379px, (min-width: 780px) calc(50vw - 60px), calc(100vw - 64px)"
        />
        <span className="absolute rounded-full bg-gray-900 px-2 py-1 text-xs font-semibold text-white">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}
