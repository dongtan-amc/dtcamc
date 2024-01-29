"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Container from "../common/container";
import MainLogo from "./main-logo";
import Menu from "./menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header
      className={cn(
        isScrollTop
          ? "bg-transparent shadow-none"
          : "bg-white text-olive-drab-900",
        " fixed w-full z-50 transition duration-500 border-b-[1px]"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <MainLogo />

          <Menu isScrollTop={isScrollTop} />
        </nav>
      </Container>
    </header>
  );
}
