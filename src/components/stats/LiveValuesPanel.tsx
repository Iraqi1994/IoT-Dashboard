import { Icon } from "@iconify/react";
import type { LiveValueStat } from "../../types/dashboard";

const VARIANT_CLASSES: Record<NonNullable<LiveValueStat["variant"]>, string> = {
  default: "bg-slate-800 text-white",
  success: "bg-emerald-500 text-white",
  warning: "bg-amber-500 text-white",
};

function LiveStatRow({ label, value, variant = "default" }: LiveValueStat) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-400 tracking-wide">{label.toUpperCase()}</span>
      <span
        className={`inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-md font-semibold ${VARIANT_CLASSES[variant]}`}
      >
        {value}
      </span>
    </div>
  );
}

interface LiveValuesPanelProps {
  updatedAt: string;
  columns: LiveValueStat[][];
}

export function LiveValuesPanel({ updatedAt, columns }: LiveValuesPanelProps) {
  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          LIVE WERTE
        </h3>
        <span className="text-[11px] text-slate-400 border border-slate-700 rounded-full px-3 py-1">{updatedAt}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-2.5">
            {column.map((stat) => (
              <LiveStatRow key={stat.label} {...stat} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium pt-2">
        <Icon icon="lucide:check-circle" />
        Aktuell keine Fehler!
      </div>
    </div>
  );
}
