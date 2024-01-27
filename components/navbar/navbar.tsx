import { NAVBAR_HEIGHT } from "@/constants/constants";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";
import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="shadow-lg fixed bg-white w-full z-50">
      <Container>
        <nav
          className="flex items-center justify-between"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <Link href="/">
            <Image alt="logo" src={logo} unoptimized className="h-20 w-auto" />
          </Link>

          <Menu />
        </nav>
      </Container>
    </header>
  );
}
