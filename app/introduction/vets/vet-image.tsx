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
      width={250}
      alt={`${name} 프로필 사진`}
      src={image}
      placeholder="blur"
      className="rounded-md"
    />
  );
}
