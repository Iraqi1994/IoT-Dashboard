import { useState } from "react";
import { Icon } from "@iconify/react";
import type { AnalysisReading, TimeRange } from "../../types/dashboard";
import {
  buildSeriesAreaPath,
  buildSeriesLinePath,
  CHART_LEFT_PAD,
  CHART_RIGHT_PAD,
  CHART_WIDTH,
  xForIndex,
  yForValue,
} from "../../utils/chart";
import { BATTERY_MAX_PERCENT, SERIES_CONFIG } from "./seriesConfig";
import { ChartLegend } from "./ChartLegend";

const TIME_RANGES: TimeRange[] = ["Tag", "Woche", "Monat", "Jahr"];
const POWER_TICKS = ["5 kW", "3.3 kW", "1.6 kW", "0 W"];
const BATTERY_TICKS = ["400 V / 100%", "266 V / 66%", "133 V / 33%", "0 V / 0%"];

interface AnalysisChartProps {
  readings: AnalysisReading[];
}

export function AnalysisChart({ readings }: AnalysisChartProps) {
  const [range, setRange] = useState<TimeRange>("Tag");
  const [visibleSeries, setVisibleSeries] = useState<Set<string>>(
    () => new Set(SERIES_CONFIG.filter((series) => series.defaultVisible).map((series) => series.id)),
  );

  function toggleSeries(id: string) {
    setVisibleSeries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const referenceLineY = yForValue(70, BATTERY_MAX_PERCENT);

  return (
    <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm w-full">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-base font-medium tracking-tight text-slate-900">Analyse &amp; Historie</h3>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-lg">
            {TIME_RANGES.map((timeRange) => (
              <button
                key={timeRange}
                onClick={() => setRange(timeRange)}
                className={
                  timeRange === range
                    ? "px-3 py-1.5 text-xs font-medium bg-white text-slate-900 shadow-sm rounded-md"
                    : "px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors"
                }
              >
                {timeRange}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center gap-1.5 h-8 px-3 text-xs font-medium rounded-md border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
            <Icon icon="lucide:download" className="text-sm" />
            Export
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto overflow-y-hidden">
        <div className="min-w-[600px] relative" style={{ aspectRatio: `${CHART_WIDTH} / 240` }}>
          <svg viewBox={`0 0 ${CHART_WIDTH} 240`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <line x1="0" y1="40" x2={CHART_WIDTH} y2="40" className="chart-grid-line" />
            <line x1="0" y1="120" x2={CHART_WIDTH} y2="120" className="chart-grid-line" />
            <line x1="0" y1="200" x2={CHART_WIDTH} y2="200" className="chart-grid-line" />

            {SERIES_CONFIG.filter((series) => visibleSeries.has(series.id)).map((series) => {
              if (series.kind === "reference") {
                return (
                  <line
                    key={series.id}
                    x1={CHART_LEFT_PAD}
                    y1={referenceLineY}
                    x2={CHART_WIDTH - CHART_RIGHT_PAD}
                    y2={referenceLineY}
                    stroke={series.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                );
              }
              const accessor = series.accessor!;
              const maxValue = series.maxValue!;
              return (
                <g key={series.id}>
                  {series.kind === "area" && (
                    <path d={buildSeriesAreaPath(readings, accessor, maxValue)} fill={series.color} fillOpacity="0.15" />
                  )}
                  <path
                    d={buildSeriesLinePath(readings, accessor, maxValue)}
                    fill="none"
                    stroke={series.color}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              );
            })}

            {POWER_TICKS.map((tick, index) => (
              <text key={tick} x="0" y={35 + index * 60} className="chart-text">
                {tick}
              </text>
            ))}
            {BATTERY_TICKS.map((tick, index) => (
              <text key={tick} x={CHART_WIDTH} y={35 + index * 60} className="chart-text" textAnchor="end">
                {tick}
              </text>
            ))}

            {readings.map((reading, index) => {
              const x = xForIndex(index, readings.length);
              const anchor = index === 0 ? "start" : index === readings.length - 1 ? "end" : "middle";
              return (
                <text key={reading.timeLabel} x={x} y="230" className="chart-text" textAnchor={anchor}>
                  {reading.timeLabel}
                </text>
              );
            })}
          </svg>
        </div>
      </div>

      <ChartLegend series={SERIES_CONFIG} visible={visibleSeries} onToggle={toggleSeries} />
    </section>
  );
}
