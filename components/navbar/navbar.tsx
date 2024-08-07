"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Container from "../common/container";
import MainLogo from "./main-logo";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header
      className="fixed z-50 w-full bg-black/80"
      // style={
      //   isScrollTop
      //     ? {
      //         backgroundColor: "transparent",
      //         transition: "all ease-in-out 500ms",
      //       }
      //     : {
      //         backgroundColor: "rgba(0, 0, 0, 0.8)",
      //         transition: "all ease-in-out 500ms",
      //       }
      // }
    >
      <Container>
        <div className="flex h-16 w-full items-center justify-between xl:h-24">
          <MainLogo />

          <Menu />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
