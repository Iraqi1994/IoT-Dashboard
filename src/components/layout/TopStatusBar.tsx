import { Icon } from "@iconify/react";

interface TopStatusBarProps {
  label: string;
}

export function TopStatusBar({ label }: TopStatusBarProps) {
  return (
    <div className="bg-slate-950 text-slate-300 text-[11px] tracking-wide font-medium py-1.5 px-4 flex items-center justify-center gap-1.5">
      <Icon icon="lucide:wifi" className="text-sm text-slate-400" />
      {label.toUpperCase()}
    </div>
  );
}
