import mainLogoWhite from "@/public/main-logo-white.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/#home" className="flex gap-2 items-center">
      <Image
        alt="logo"
        src={mainLogoWhite}
        unoptimized
        className="h-16 w-auto"
        priority
      />
      <div className="text-white">
        <p className="text-3xl font-bold">24시동탄시티 동물의료센터</p>
        <p className="text-xl tracking-wide">
          Dongtan City Animal Medical Center
        </p>
      </div>
    </Link>
  );
}
