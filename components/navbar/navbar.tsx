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
    <header className="bg-white z-50 border-y-2">
      <Container>
        <nav className="flex justify-between items-center lg:h-24 h-14 w-full">
          <MainLogo />

          <Menu isScrollTop={isScrollTop} />

          <MobileMenu isScrollTop={isScrollTop} />
        </nav>
      </Container>
    </header>
  );
}
