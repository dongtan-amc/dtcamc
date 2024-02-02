import { Input } from "@/components/ui/input";
import { CASES } from "@/constants/cases";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";

export default function CaseSearch({
  searchKeyword,
  setSearchKeyword,
}: {
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}) {
  const casesLength = CASES.length;

  return (
    <div className="pt-10 mb-4 pb-2 flex items-center border-b justify-between">
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <MagnifyingGlassIcon width={20} height={20} />
          <p className="text-slate-950">케이스 검색</p>
        </div>
        <Input
          className="w-[360px]"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <div className="text-slate-800 text-sm">케이스 총 {casesLength}건</div>
    </div>
  );
}
