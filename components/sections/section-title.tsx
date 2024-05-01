import Image from "next/image";
import logo from "@/public/main-logo.png";

export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center gap-5 pt-[130px] pb-[60px]">
      <Image unoptimized alt="logo" src={logo} width={64} height={64} />
      <h2 className="text-[44px]">{children}</h2>
      <p className="text-[20px]">{subtitle}</p>
    </div>
  );
}
