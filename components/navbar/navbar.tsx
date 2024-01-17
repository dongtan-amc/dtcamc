import Image from "next/image";
import logo from "@/public/logo.png";

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
    <header className="shadow-lg">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Image alt="logo" src={logo} width={80} height={80} />
        <ul className="flex gap-4">
          {SECTIONS.map((section) => (
            <li key={section.value}>{section.label}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
