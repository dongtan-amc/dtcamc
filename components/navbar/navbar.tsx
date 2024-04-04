"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Container from "../common/container";
import MainLogo from "./main-logo";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header
      className={cn("w-full z-50 transition duration-500 border-b-[1px]")}
    >
      <Container>
        <nav className="flex items-center justify-between h-24">
          <MainLogo />

          <Menu isScrollTop={isScrollTop} />

          <MobileMenu isScrollTop={isScrollTop} />
        </nav>
      </Container>
    </header>
  );
}
