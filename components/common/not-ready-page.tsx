"use client";

import notReadyLottie from "@/public/not-ready-lottie.json";
import Lottie from "react-lottie-player";

export default function NotReadyPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-12">
      <Lottie
        loop
        animationData={notReadyLottie}
        play
        style={{ width: 320, height: 320 }}
      />
      <h2 className="text-slate-950 font-bold text-xl">페이지 준비중입니다.</h2>
    </div>
  );
}
