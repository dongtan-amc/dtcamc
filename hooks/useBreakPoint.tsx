import { useState, useEffect } from "react";

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<
    "2xl" | "xl" | "lg" | "md" | "sm" | undefined
  >();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setBreakpoint("2xl");
      } else if (width <= 1280 && width > 1024) {
        setBreakpoint("xl");
      } else if (width <= 1024 && width > 768) {
        setBreakpoint("lg");
      } else if (width <= 768 && width > 640) {
        setBreakpoint("md");
      } else if (width <= 640) {
        setBreakpoint("sm");
      } else {
        setBreakpoint(undefined);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
