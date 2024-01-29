import Image, { StaticImageData } from "next/image";

export default function Staff({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: StaticImageData;
}) {
  return (
    <li>
      <Image alt={`${name} 프로필 사진`} src={image} />
      <p className="text-2xl font-bold p-2 w-full">
        {name} <span className="text-olive-drab-600 text-xl">{title}</span>
      </p>
    </li>
  );
}
