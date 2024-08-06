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
      className="fixed z-50 w-full"
      style={
        isScrollTop
          ? {
              backgroundColor: "transparent",
              transition: "all ease-in-out 500ms",
            }
          : {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transition: "all ease-in-out 500ms",
            }
      }
    >
      <Container>
        <div className="px-2 flex items-center justify-between w-full  h-16 xl:h-32">
          <MainLogo />

          <Menu />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
