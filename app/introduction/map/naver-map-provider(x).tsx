"use client";

import { NavermapsProvider } from "react-naver-maps";

export default function NaverMapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavermapsProvider ncpClientId="yfi041jp28">{children}</NavermapsProvider>
  );
}
