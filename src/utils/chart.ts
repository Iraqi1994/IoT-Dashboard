import type { AnalysisReading } from "../types/dashboard";

export const CHART_WIDTH = 800;
export const CHART_BASELINE_Y = 200;
export const CHART_TOP_Y = 40;
export const CHART_LEFT_PAD = 40;
export const CHART_RIGHT_PAD = 96;

function valueToY(value: number, maxValue: number): number {
  const ratio = value / maxValue;
  return CHART_BASELINE_Y - ratio * (CHART_BASELINE_Y - CHART_TOP_Y);
}

export const yForValue = valueToY;

export function xForIndex(index: number, total: number): number {
  const plotWidth = CHART_WIDTH - CHART_LEFT_PAD - CHART_RIGHT_PAD;
  return CHART_LEFT_PAD + (index / (total - 1)) * plotWidth;
}

export function buildSeriesLinePath(readings: AnalysisReading[], valueOf: (reading: AnalysisReading) => number, maxValue: number): string {
  return readings
    .map((reading, index) => {
      const x = xForIndex(index, readings.length);
      const y = valueToY(valueOf(reading), maxValue);
      return `${index === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

export function buildSeriesAreaPath(readings: AnalysisReading[], valueOf: (reading: AnalysisReading) => number, maxValue: number): string {
  const linePath = buildSeriesLinePath(readings, valueOf, maxValue);
  const lastX = xForIndex(readings.length - 1, readings.length);
  const firstX = xForIndex(0, readings.length);
  return `${linePath} L${lastX},${CHART_BASELINE_Y} L${firstX},${CHART_BASELINE_Y} Z`;
}
