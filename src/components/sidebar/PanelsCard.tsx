import { useState } from "react";
import { Icon } from "@iconify/react";
import type { PanelString } from "../../types/dashboard";

interface PanelsCardProps {
  strings: PanelString[];
  wattPeak: string;
}

export function PanelsCard({ strings, wattPeak }: PanelsCardProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
          <Icon icon="lucide:layout-grid" className="text-slate-400" />
          PANELE
        </span>
        <div className="flex items-center gap-2 text-slate-400">
          <button className="hover:text-slate-600 transition-colors">
            <Icon icon="lucide:pencil" className="text-sm" />
          </button>
          <button onClick={() => setIsOpen((open) => !open)} className="hover:text-slate-600 transition-colors">
            <Icon icon="lucide:chevron-down" className={`text-base transition-transform ${isOpen ? "" : "-rotate-90"}`} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 text-sm">
          {strings.map((string) => (
            <div key={string.label} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-slate-600">
                <Icon icon="lucide:layout-grid" className="text-slate-400 text-sm" />
                {string.label}
              </span>
              <span className="inline-flex items-center justify-center min-w-[1.5rem] px-1.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500 text-white">
                {string.value}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-slate-500 text-xs pt-1">
            <Icon icon="solar:bolt-linear" />
            {wattPeak}
          </div>
        </div>
      )}
    </div>
  );
}
