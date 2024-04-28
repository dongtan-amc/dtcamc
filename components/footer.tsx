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
    <footer className="bg-olive-drab-950 text-olive-drab-50 py-8 sm:pb-24 lg:pb-10">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center gap-10 h-full justify-between">
          <div className="w-48 h-w-48 bg-white mx-auto flex items-center justify-center shrink-0">
            <Image alt="logo" src={logo} width={160} height={160} unoptimized />
          </div>

          <div className="hidden sm:block flex-1 text-lg">
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="pb-2">
              {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 : {BUSINESS_NUMBER} |
              Email : {EMAIL}
            </p>
            <p>{COPY_RIGHTS}</p>
          </div>

          {/* mobile */}
          <div className="sm:hidden text-xs text-center space-y-3">
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="tracking-tighter">{ADDRESS}</p>
            <p>대표자 : {BOSS}</p>
            <p>사업자등록번호 : {BUSINESS_NUMBER} </p>
            <p>E-mail : {EMAIL}</p>
            <p>{COPY_RIGHTS}</p>
          </div>

          <div className="text-2xl font-bold text-center pb-10 sm:pb-0">
            {PHONE}
          </div>
        </div>
      </Container>
    </footer>
  );
}
