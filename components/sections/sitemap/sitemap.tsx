import Container from "@/components/common/container";
import { NAV_MENUS } from "@/constants/nav-menues";
import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="text-slate-700 py-10 lg:py-20 hidden md:block">
      <Container>
        <ul className="flex gap-10 justify-evenly">
          {NAV_MENUS.map((menu) => {
            return (
              <li key={menu.label} className="h-full flex">
                {menu.submenu ? (
                  <div>
                    <ColumnHeader label={menu.label} />
                    <ul className="flex flex-col gap-4">
                      {menu.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link href={`${menu.route}/${sub.route}`}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <ColumnHeader label={menu.label} />
                    <Link href={menu.route}>{menu.label}</Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

const ColumnHeader = ({ label }: { label: string }) => (
  <div className="pb-5">
    <p className="font-semibold text-xl">{label}</p>
  </div>
);
