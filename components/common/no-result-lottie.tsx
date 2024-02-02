"use client";

import noResultLottie from "@/public/not-found-lottie.json";
import Lottie from "react-lottie-player";

export default function NoResultLottie() {
  return (
    <Lottie
      loop
      animationData={noResultLottie}
      play
      style={{ width: 320, height: 320 }}
    />
  );
}
