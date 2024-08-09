import logo from "@/public/main-logo.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-full items-center justify-center bg-white">
      <div className="flex animate-bounce items-center gap-2">
        <Image alt="loading" src={logo} unoptimized width={40} priority />
        <p className="text-2xl font-bold text-primary">LOADING...</p>
      </div>
    </div>
  );
}
