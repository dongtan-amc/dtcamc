import logo from "@/public/logo.png";
import Image from "next/image";
import Container from "../common/container";
import { NAVBAR_HEIGHT } from "@/constants/constants";
import Link from "next/link";

const SECTIONS = [
  {
    label: "병원소개",
    value: "info",
  },
  {
    label: "수의사 소개",
    value: "vet",
  },
  {
    label: "시설 및 장비소개",
    value: "facility",
  },
  {
    label: "미용안내",
    value: "grooming",
  },
  {
    label: "오시는 길",
    value: "map",
  },
];

export default function Navbar() {
  return (
    <header className="shadow-lg fixed bg-white w-full z-50">
      <Container>
        <nav
          className="flex items-center justify-between"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <Link href="#landing">
            <Image alt="logo" src={logo} unoptimized className="h-20 w-auto" />
          </Link>
          <ul className="flex gap-12">
            {SECTIONS.map((section) => (
              <li key={section.value}>
                <Link href={`#${section.value}`} className="font-semibold">
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
