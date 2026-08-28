import type { SeriesGroup } from "./seriesConfig";

const GROUP_ORDER: SeriesGroup[] = ["energiefluss", "batterie", "spannung"];
const GROUP_TITLES: Record<SeriesGroup, string> = {
  energiefluss: "Energiefluss (L-Achse: W)",
  batterie: "Batterie (mixed Achsen)",
  spannung: "Spannung & Limit (R-Achse: V)",
};

export interface LegendSeries {
  id: string;
  label: string;
  group: SeriesGroup;
  color: string;
}

interface ChartLegendProps {
  series: LegendSeries[];
  visible: Set<string>;
  onToggle: (id: string) => void;
}

export function ChartLegend({ series, visible, onToggle }: ChartLegendProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-100">
      {GROUP_ORDER.map((group) => (
        <div key={group} className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold tracking-wide uppercase text-slate-400">{GROUP_TITLES[group]}</span>
          <div className="flex flex-wrap gap-1.5">
            {series
              .filter((item) => item.group === group)
              .map((item) => {
                const isActive = visible.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onToggle(item.id)}
                    className={
                      isActive
                        ? "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                        : "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md border border-transparent text-slate-400 hover:text-slate-600 transition-colors"
                    }
                  >
                    <span className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: item.color, opacity: isActive ? 1 : 0.4 }} />
                    {item.label}
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
