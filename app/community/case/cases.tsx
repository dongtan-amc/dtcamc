"use client";

import { useState } from "react";
import CaseSearch from "./case-search";
import CasesGrid from "./cases-grid";

export default function Cases() {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div>
      <CaseSearch
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <CasesGrid searchKeyword={searchKeyword} />
    </div>
  );
}
