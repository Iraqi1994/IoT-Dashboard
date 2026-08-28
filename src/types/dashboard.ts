export type Accent = "emerald" | "blue" | "amber" | "slate";
export type StatusVariant = "success" | "error" | "warning" | "neutral";

export interface EnergyFlowNode {
  id: string;
  icon: string;
  label: string;
  valueLabel: string;
  accent: Accent;
}

export interface EnergyFlowLine {
  accent: Accent;
  reverse: boolean;
}

export interface KpiItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  unit: string;
}

export type TimeRange = "Tag" | "Woche" | "Monat" | "Jahr";

export interface AnalysisReading {
  timeLabel: string;
  productionKw: number;
  directUseKw: number;
  totalConsumptionKw: number;
  gridDrawKw: number;
  batteryPercent: number;
  batteryChargeKw: number;
  batteryDischargeKw: number;
  string1PowerW: number;
  string2PowerW: number;
  string1VoltageV: number;
  string2VoltageV: number;
  acL1V: number;
  acL2V: number;
  acL3V: number;
}

export interface PanelString {
  label: string;
  value: string;
}

export interface AcBoxPhase {
  label: string;
  value: string;
}

export interface DeviceInfo {
  id: string;
  icon: string;
  title: string;
  statusLabel?: string;
  statusVariant?: StatusVariant;
  detailLabel: string;
  detailValue: string;
}

export interface DailyValueStat {
  label: string;
  value: string;
  unit?: string;
  badge?: string;
  hasInfo?: boolean;
}

export interface LiveValueStat {
  label: string;
  value: string;
  variant?: "default" | "success" | "warning";
}

export interface VppWish {
  id: string;
  date: string;
  status: string;
  title: string;
}
