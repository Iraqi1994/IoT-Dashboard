import { useState } from "react";
import { Icon } from "@iconify/react";
import type { DeviceInfo } from "../../types/dashboard";
import { Pill } from "../common/Pill";

export function CollapsibleDeviceCard({ icon, title, statusLabel, statusVariant, detailLabel, detailValue }: DeviceInfo) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <button onClick={() => setIsOpen((open) => !open)} className="flex items-center justify-between w-full">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
          <Icon icon={icon} className="text-slate-400" />
          {title.toUpperCase()}
          {statusLabel && statusVariant && <Pill label={statusLabel} variant={statusVariant} />}
        </span>
        <Icon icon="lucide:chevron-down" className={`text-base text-slate-400 transition-transform ${isOpen ? "" : "-rotate-90"}`} />
      </button>
      {isOpen && (
        <div className="flex items-center justify-between text-sm mt-3 pt-3 border-t border-slate-100">
          <span className="text-slate-500">{detailLabel}</span>
          <span className="text-slate-900 font-medium">{detailValue}</span>
        </div>
      )}
    </div>
  );
}
