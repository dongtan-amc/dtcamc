import {
  ADDRESS,
  BOSS,
  BUSINESS_NUMBER,
  COPY_RIGHTS,
  EMAIL,
  NAME,
  PHONE,
} from "@/constants/constants";
import logo from "@/public/logo.png";
import Image from "next/image";
import Container from "./common/container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white h-32">
      <Container>
        <div className="flex items-center gap-10 h-full">
          <div className="w-24 h-24 bg-white flex items-center justify-center">
            <Image alt="logo" src={logo} width={80} height={80} unoptimized />
          </div>
          <div>
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="pb-4 text-sm tracking-wide">
              {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 {BUSINESS_NUMBER} |
              전화번호 {PHONE} | Email
              {EMAIL}
            </p>
            <p className="text-sm">{COPY_RIGHTS}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
