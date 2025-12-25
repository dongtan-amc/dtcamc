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
import Link from "next/link";
import Container from "./common/container";

export default function Footer() {
  return (
    <footer className="bg-black/80 px-4 py-8 text-olive-drab-50 sm:pb-24 lg:pb-10">
      <Container>
        <div className="flex h-full flex-col justify-between gap-10 sm:flex-row sm:items-center">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-5">
            <Image alt="logo" src={logo} unoptimized width={320} height={320} />
          </div>

          <div className="hidden flex-1 text-lg sm:block">
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="pb-2">
              {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 : {BUSINESS_NUMBER} |
              <br />
              Email : {EMAIL}
            </p>
            <p className="pb-2">
              <Link
                href="/fee-info"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                진료비 안내
              </Link>
            </p>
            <p>{COPY_RIGHTS}</p>
          </div>

          {/* mobile */}
          <div className="space-y-3 text-center text-xs sm:hidden">
            <h2 className="pb-2 font-bold">{NAME}</h2>
            <p className="tracking-tighter">{ADDRESS}</p>
            <p>대표자 : {BOSS}</p>
            <p>사업자등록번호 : {BUSINESS_NUMBER} </p>
            <p>E-mail : {EMAIL}</p>
            <p>
              <Link
                href="/fee-info"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                진료비 안내
              </Link>
            </p>
            <p>{COPY_RIGHTS}</p>
          </div>

          <div className="pb-10 text-center text-2xl font-bold sm:pb-0">
            {PHONE}
          </div>
        </div>
      </Container>
    </footer>
  );
}
