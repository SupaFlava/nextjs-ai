import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/history", label: "History" },
];
type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="w-full md:w-[200px] h-[60px] md:h-full bg-white border-b md:border-r md:border-b-0 border-black/10 md:absolute md:top-0 md:left-0">
        <div className="text-center md:text-left px-4 py-2">Mood</div>
        <ul className="flex md:block overflow-x-auto md:overflow-x-hidden mt-6">
          {links.map((link) => (
            <li
              key={link.href}
              className="px-4 py-2 md:py-6 text-xl md:text-left"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="mt-[60px] md:mt-0 md:ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
