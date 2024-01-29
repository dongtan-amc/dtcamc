import Banner from "@/components/common/banner";
import React from "react";
import GroomingInfo from "./grooming-info";
import GroomingCarousel from "./grooming-carousel";
import groomingBanner from "@/public/grooming/grooming2.jpeg";

export default function GroomingPage() {
  return (
    <main>
      <Banner image={groomingBanner} subRoute="미용안내" />

      <div className="flex">
        <GroomingCarousel />
        <GroomingInfo />
      </div>
    </main>
  );
}
