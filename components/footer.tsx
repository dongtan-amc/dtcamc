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
          <div className="rounded-2xl p-5 w-40 h-40 bg-white flex justify-center items-center">
            <Image alt="logo" src={logo} unoptimized width={320} height={320} />
          </div>

          <div className="hidden sm:block flex-1 text-lg">
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="pb-2">
              {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 : {BUSINESS_NUMBER} |
              <br />
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
