import {
  ADDRESS,
  BOSS,
  BUSINESS_NUMBER,
  COPY_RIGHTS,
  EMAIL,
  NAME,
  PHONE,
} from "@/constants/general-info";
import logo from "@/public/logo.png";
import Image from "next/image";
import Container from "./common/container";

export default function Footer() {
  return (
    <footer className="bg-olive-drab-950 text-olive-drab-50 lg:h-32 py-4 pb-16 lg:pb-0">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 h-full justify-between">
          <div className="w-24 h-24 bg-white lg:flex items-center justify-center hidden">
            <Image alt="logo" src={logo} width={80} height={80} unoptimized />
          </div>

          <div>
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="pb-4 text-sm tracking-wide">
              {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 {BUSINESS_NUMBER} |
              Email
              {EMAIL}
            </p>
            <p className="text-sm">{COPY_RIGHTS}</p>
          </div>

          <div className="text-3xl font-bold hidden lg:block">{PHONE}</div>
        </div>
      </Container>
    </footer>
  );
}
