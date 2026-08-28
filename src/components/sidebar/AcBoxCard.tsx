import { Icon } from "@iconify/react";
import type { AcBoxPhase } from "../../types/dashboard";
import { Pill } from "../common/Pill";

interface AcBoxCardProps {
  phases: AcBoxPhase[];
}

export function AcBoxCard({ phases }: AcBoxCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
          <Icon icon="lucide:box" className="text-slate-400" />
          ACBOX
        </span>
        <Pill label="Online" variant="success" />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        {phases.map((phase) => (
          <div key={phase.label} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-600">
              <Icon icon="solar:bolt-linear" className="text-slate-400 text-sm" />
              {phase.label}
            </span>
            <span className="text-slate-900 font-medium">{phase.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
