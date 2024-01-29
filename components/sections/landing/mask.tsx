import Image from "next/image";
import mask from "@/public/landing/mask.png";

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
