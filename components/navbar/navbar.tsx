import logo from "@/public/logo.png";
import Image from "next/image";

const SECTIONS = [
  {
    label: "진료안내",
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
    <header className="shadow-lg fixed bg-white w-full">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#landing">
          <Image alt="logo" src={logo} width={80} height={80} />
        </a>
        <ul className="flex gap-4">
          {SECTIONS.map((section) => (
            <li key={section.value}>
              <a href={`#${section.value}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
