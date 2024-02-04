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
    />
  );
}
