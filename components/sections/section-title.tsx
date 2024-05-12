import Image from "next/image";
import logo from "@/public/main-logo.png";

export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-10 pt-[130px] pb-[60px]">
      <Image unoptimized alt="logo" src={logo} width={64} height={64} />
      <h2 className="text-[44px] text-center leading-[50px]">{children}</h2>
      <p className="text-[20px] text-center">{subtitle}</p>
    </div>
  );
}
