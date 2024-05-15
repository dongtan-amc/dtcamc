"use client";

import SubsectionNavbar from "@/components/common/subsection-navbar";
import { useState } from "react";
import CclrSection from "./cclr-section";
import FractureSection from "./fracture-section";
import PatellaSection from "./patella-section";
import RehabilitationSection from "./rehabilitation-section";

const ORTHOPEDICS_MENUS = [
  { id: 1, label: "# 골절수술" },
  { id: 2, label: "# 십자인대수술" },
  { id: 3, label: "# 슬개골탈구교정술" },
  { id: 4, label: "# 정형외과재활치료" },
];

export default function OrthopedicSubSection() {
  const [selectedMenuId, setSelectedMenuId] = useState<number>(1);

  return (
    <>
      <SubsectionNavbar
        menus={ORTHOPEDICS_MENUS}
        setSelectedMenuId={setSelectedMenuId}
        selectedMenuId={selectedMenuId}
      />

      {selectedMenuId === 1 && <FractureSection />}

      {selectedMenuId === 2 && <CclrSection />}

      {selectedMenuId === 3 && <PatellaSection />}

      {selectedMenuId === 4 && <RehabilitationSection />}
    </>
  );
}
