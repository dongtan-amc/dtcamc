"use client";

import { useState } from "react";
import ToolsContents from "./tools-contents";
import ToolsNavbar from "./tools-navbar";

export default function Tools() {
  const [category, setCategory] = useState("영상의학");
  return (
    <div className="pt-10 pb-12">
      <ToolsNavbar category={category} setCategory={setCategory} />
      <ToolsContents category={category} />
    </div>
  );
}
