"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Container from "../common/container";
import MainLogo from "./main-logo";
import Menu from "./menu";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header className="fixed w-full z-50">
      <Container>
        <nav className="flex justify-between items-center py-10">
          <MainLogo />

          <Menu isScrollTop={isScrollTop} />

          {/* <MobileMenu isScrollTop={isScrollTop} /> */}
        </nav>
      </Container>
    </header>
  );
}
