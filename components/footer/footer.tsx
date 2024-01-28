import Image from "next/image";
import logo from "@/public/logo.png";
import {
  ADDRESS,
  BOSS,
  BUSINESS_NUMBER,
  COPY_RIGHTS,
  EMAIL,
  NAME,
  PHONE,
} from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="bg-olive-drab-950 text-white h-32 flex items-center">
      <div className="max-w-7xl mx-auto flex justify-between w-full items-center">
        <div className="w-24 h-24 bg-white flex items-center justify-center">
          <Image alt="logo" src={logo} width={80} height={80} />
        </div>
        <div>
          <h2>{NAME}</h2>
          <p>
            {ADDRESS} | 대표자 : {BOSS} | 사업자등록번호 {BUSINESS_NUMBER} |
            전화번호 {PHONE} | Email
            {EMAIL}
          </p>
          <p>{COPY_RIGHTS}</p>
        </div>
      </div>
    </footer>
  );
}
