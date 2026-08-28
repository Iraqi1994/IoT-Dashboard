import { Icon } from "@iconify/react";
import type { Accent } from "../../types/dashboard";

const ACCENT_STYLES: Record<Accent, { icon: string; glow: string }> = {
  emerald: { icon: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(52,211,153,0.1)]" },
  blue: { icon: "text-blue-400", glow: "shadow-[0_0_20px_rgba(96,165,250,0.1)]" },
  amber: { icon: "text-amber-400", glow: "shadow-[0_0_20px_rgba(251,191,36,0.1)]" },
  slate: { icon: "text-slate-300", glow: "" },
};

interface FlowNodeProps {
  icon: string;
  label: string;
  valueLabel: string;
  accent: Accent;
}

export function FlowNode({ icon, label, valueLabel, accent }: FlowNodeProps) {
  const { icon: iconClass, glow } = ACCENT_STYLES[accent];
  return (
    <div className="flex flex-col items-center gap-3 w-32 shrink-0">
      <div
        className={`w-16 h-16 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center relative ${iconClass} ${glow}`}
      >
        <Icon icon={icon} className="text-3xl" />
      </div>
      <div className="text-center">
        <p className="text-slate-400 text-xs font-medium">{label}</p>
        <p className="text-white text-sm font-medium tracking-tight">{valueLabel}</p>
      </div>
    </div>
  );
}
