import Image, { StaticImageData } from "next/image";

export default function VetImage({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) {
  return (
    <Image
      alt={`${name} 프로필 사진`}
      src={image}
      placeholder="blur"
      className="rounded-lg lg:w-1/3 w-full shrink-0"
      priority
      sizes="(min-width: 1360px) 207px, (min-width: 1040px) 15.33vw, (min-width: 780px) calc(50vw - 36px), calc(100vw - 32px)"
    />
  );
}
