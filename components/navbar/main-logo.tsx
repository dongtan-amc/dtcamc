import mainLogoWhite from "@/public/main-logo-white.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/#home" className="flex gap-2 items-center xl:items-end">
      <Image
        alt="logo"
        src={mainLogoWhite}
        unoptimized
        className="h-10 xl:h-14 w-auto"
        priority
      />

      <div className="text-white flex flex-col gap-2">
        <p className="text-base 2xl:leading-7 xl:text-[30px] font-bold">
          24시동탄시티 동물의료센터
        </p>
        <p className="text-xs hidden xl:block xl:text-[20px] tracking-[0.03em]">
          Dongtan City Animal Medical Center
        </p>
      </div>
    </Link>
  );
}
