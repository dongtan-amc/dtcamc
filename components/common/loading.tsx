import logo from "@/public/main-logo.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center absolute inset-0 z-50 bg-white">
      <div className="flex items-center gap-2 animate-bounce">
        <Image alt="loading" src={logo} unoptimized width={40} />
        <p className="text-primary text-2xl font-bold">LOADING...</p>
      </div>
    </div>
  );
}
