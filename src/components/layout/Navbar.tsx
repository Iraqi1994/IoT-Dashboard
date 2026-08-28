import { Icon } from "@iconify/react";

const NAV_LINKS = ["Übersicht", "Analyse", "Systemstatus", "Einstellungen"];

interface NavbarProps {
  customerName: string;
}

export function Navbar({ customerName }: NavbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tighter text-lg">
            <div className="bg-blue-600 text-white rounded-md w-8 h-8 flex items-center justify-center">
              <Icon icon="solar:bolt-linear" className="text-xl" />
            </div>
            {customerName}
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-500 font-medium h-full">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link}
                href="#"
                className={
                  index === 0
                    ? "text-slate-900 border-b-2 border-slate-900 h-full flex items-center transition-colors"
                    : "hover:text-slate-900 h-full flex items-center transition-colors"
                }
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-slate-900 p-2">
              <Icon icon="solar:hamburger-menu-linear" className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
