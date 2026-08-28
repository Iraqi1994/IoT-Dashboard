import { Icon } from "@iconify/react";
import type { KpiItem } from "../../types/dashboard";

export function KpiCard({ icon, label, value, unit }: KpiItem) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
        <Icon icon={icon} className="text-lg" />
        {label}
      </div>
      <div className="text-3xl font-medium tracking-tight text-slate-900">
        {value} <span className="text-lg text-slate-500 font-normal">{unit}</span>
      </div>
    </div>
  );
}
