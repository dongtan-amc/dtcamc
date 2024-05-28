import mainLogoWhite from "@/public/main-logo-white.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/#home" className="flex gap-2">
      <Image
        alt="logo"
        src={mainLogoWhite}
        unoptimized
        className="h-14 w-auto"
        priority
      />

      <div className="text-white leading-8">
        <p className="text-[30px] font-bold">24시동탄시티 동물의료센터</p>
        <p className="text-[20px] tracking-[0.03em]">
          Dongtan City Animal Medical Center
        </p>
      </div>
    </Link>
  );
}
