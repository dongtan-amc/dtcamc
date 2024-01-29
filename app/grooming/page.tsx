import Banner from "@/components/common/banner";
import React from "react";
import GroomingInfo from "./grooming-info";
import GroomingCarousel from "./grooming-carousel";

export default function GroomingPage() {
  return (
    <main>
      <Banner imageClassName="grooming_banner" title="미용 안내" />

      <div className="flex">
        <GroomingCarousel />
        <GroomingInfo />
      </div>
    </main>
  );
}
