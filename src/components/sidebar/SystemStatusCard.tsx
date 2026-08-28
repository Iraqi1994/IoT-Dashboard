import { Icon } from "@iconify/react";
import { Pill } from "../common/Pill";

interface SystemStatusCardProps {
  badge: string;
  statusText: string;
  subText: string;
}

export function SystemStatusCard({ badge, statusText, subText }: SystemStatusCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
          <Icon icon="lucide:settings" className="text-slate-400" />
          SYSTEM
        </span>
        <Pill label={badge} variant="success" />
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-700">
        <Icon icon="lucide:check-circle" className="text-slate-400" />
        {statusText}
      </div>
      <p className="text-xs text-slate-400 mt-1 ml-6">{subText}</p>
    </div>
  );
}
