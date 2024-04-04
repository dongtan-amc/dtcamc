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
        className="h-7 lg:h-12 w-auto"
        priority
      />
      <div>
        <div className="text-lg font-bold leading-5 text-gray-800">
          <p className="">24시 동탄시티</p>
          <p className="tracking-widest">동물의료센터</p>
        </div>

        <p className="font-bold text-gray-400 hidden lg:block text-[6px] mt-1 tracking-tighter">
          <span className="text-primary">DONGTAN CITY</span> ANIMAL MEDICAL
          CENTER
        </p>
      </div>
    </Link>
  );
}
