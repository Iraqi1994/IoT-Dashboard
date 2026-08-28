import type { StatusVariant } from "../../types/dashboard";

const VARIANT_CLASSES: Record<StatusVariant, string> = {
  success: "bg-emerald-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-amber-500 text-white",
  neutral: "bg-slate-200 text-slate-700",
};

interface PillProps {
  label: string;
  variant: StatusVariant;
}

export function Pill({ label, variant }: PillProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase ${VARIANT_CLASSES[variant]}`}
    >
      {label}
    </span>
  );
}
