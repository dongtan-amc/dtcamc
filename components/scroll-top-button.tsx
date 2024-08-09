"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ScrollTopButton() {
  const { isScrollTop } = useScrollPosition();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <Button
      className={cn(
        isScrollTop ? "opacity-0" : "opacity-100",
        "fixed bottom-16 right-2 z-30 transition duration-500 lg:bottom-9 lg:right-9",
      )}
      size="icon"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </Button>
  );
}
