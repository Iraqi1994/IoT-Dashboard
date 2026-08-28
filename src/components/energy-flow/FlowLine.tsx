import type { Accent } from "../../types/dashboard";

const ACCENT_TEXT: Record<Accent, string> = {
  emerald: "text-emerald-500",
  blue: "text-blue-500",
  amber: "text-amber-500",
  slate: "text-slate-500",
};

interface FlowLineProps {
  accent: Accent;
  reverse: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function FlowLine({ accent, reverse, orientation = "horizontal", className = "" }: FlowLineProps) {
  const sizeClasses = orientation === "vertical" ? "w-px h-full" : "h-px w-full";
  return (
    <div
      className={`${sizeClasses} bg-slate-800 relative overflow-hidden animate-flow rounded-full ${ACCENT_TEXT[accent]} ${className}`}
      style={reverse ? { animationDirection: "reverse" } : undefined}
    />
  );
}
