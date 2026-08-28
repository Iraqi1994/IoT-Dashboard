import { Icon } from "@iconify/react";
import type { DailyValueStat } from "../../types/dashboard";

function StatRow({ label, value, unit, badge, hasInfo }: DailyValueStat) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="flex items-center gap-1 text-slate-500">
        {label}
        {hasInfo && <Icon icon="lucide:info" className="text-slate-300 text-xs" />}
      </span>
      <span className="flex items-center gap-2 shrink-0">
        {badge && <span className="text-xs font-medium text-slate-400">{badge}</span>}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold whitespace-nowrap">
          {value}
          {unit && <span className="text-blue-400 font-normal">{unit}</span>}
        </span>
      </span>
    </div>
  );
}

interface DailyValuesPanelProps {
  columns: DailyValueStat[][];
  quoteRow: DailyValueStat[];
  batteryRow: DailyValueStat[];
}

export function DailyValuesPanel({ columns, quoteRow, batteryRow }: DailyValuesPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex-1">
      <h3 className="text-sm font-semibold tracking-wide text-slate-900 mb-4">TAGESWERTE</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pb-4 border-b border-slate-100">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-3">
            {column.map((stat) => (
              <StatRow key={stat.label} {...stat} />
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4 pb-4 border-b border-slate-100">
        {quoteRow.map((stat) => (
          <StatRow key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4">
        {batteryRow.map((stat) => (
          <StatRow key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
