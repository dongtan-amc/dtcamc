import mask from "@/public/landing/mask.png";
import Image from "next/image";

export default function Mask() {
  return (
    <Image
      alt="mask"
      width={500}
      src={mask}
      className="absolute top-[80px] left-3/4"
    />
  );
}
