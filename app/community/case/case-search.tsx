import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";

export default function CaseSearch({
  searchKeyword,
  setSearchKeyword,
}: {
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="pt-10 pb-4 border-b">
      <div className="flex gap-2 items-center">
        <Label
          htmlFor="search"
          className="text-slate-950 text-nowrap flex items-center gap-1"
        >
          <MagnifyingGlassIcon width={20} height={20} />
          케이스 검색
        </Label>

        <Input
          placeholder="질병명을 입력해주세요"
          id="search"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
    </div>
  );
}
