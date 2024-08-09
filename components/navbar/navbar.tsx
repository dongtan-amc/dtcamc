"use client";

import Container from "../common/container";
import MainLogo from "./main-logo";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="fixed z-50 w-full bg-black/80">
      <Container>
        {/* 모바일 높이 16(64px), 데스크탑 높이 24(96px) */}
        <div className="flex h-16 w-full items-center justify-between xl:h-24">
          <MainLogo />

          <Menu />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
