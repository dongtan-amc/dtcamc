"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ScrollTopButton() {
  const { isScrollTop } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Button
      className={cn(
        isScrollTop ? "opacity-0" : "opacity-100",
        "transition duration-500 fixed bottom-10 right-10 z-30"
      )}
      size="icon"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </Button>
  );
}
