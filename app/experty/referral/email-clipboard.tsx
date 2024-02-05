"use client";

import { Button } from "@/components/ui/button";
import { EMAIL } from "@/constants/general-info";

export default function EmailClipboard() {
  const handleCopy = async () => {
    try {
      // PC환경
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(EMAIL);
        alert("이메일이 클립보드에 복사되었습니다.");
      } else {
        // 모바일환경
        const textArea = document.createElement("textarea");
        textArea.value = EMAIL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("이메일이 클립보드에 복사되었습니다.");
      }
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
      alert("이메일 복사 중 오류가 발생했습니다.");
    }
  };

  return (
    <Button variant="secondary" className="ml-8" onClick={handleCopy}>
      {EMAIL}
    </Button>
  );
}
