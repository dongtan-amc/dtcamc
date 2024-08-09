"use client";

import notReadyLottie from "@/public/not-ready-lottie.json";
import Lottie from "react-lottie-player";

export default function NotReadyPage() {
  return (
    <div className="flex flex-col items-center justify-center pb-12 pt-10">
      <Lottie
        loop
        animationData={notReadyLottie}
        play
        style={{ width: 320, height: 320 }}
      />
      <h2 className="text-xl font-bold text-slate-950">페이지 준비중입니다.</h2>
    </div>
  );
}
