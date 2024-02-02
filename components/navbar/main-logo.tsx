import mainLogo from "@/public/main-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center hover:opacity-80 transition"
    >
      <Image
        alt="logo"
        src={mainLogo}
        unoptimized
        className="h-10 lg:h-16 w-auto"
        priority
      />
      <div>
        <div className="text-xl font-bold leading-6">
          <p className="text-golden-dream-500">24시동탄시티</p>
          <p className="text-primary tracking-wider">동물의료센터</p>
        </div>
        <p className="text-golden-dream-600 hidden lg:block text-[6px]">
          DONGTAN CITY ANIMAL MEDICAL CENTER
        </p>
      </div>
    </Link>
  );
}
