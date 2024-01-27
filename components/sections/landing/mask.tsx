import Image from "next/image";
import mask from "@/public/landing/mask.png";

export default function Mask() {
  return <Image alt="mask" src={mask} className="absolute bottom-0 right-0" />;
}
