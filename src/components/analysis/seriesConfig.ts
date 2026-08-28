import type { AnalysisReading } from "../../types/dashboard";

export type SeriesGroup = "energiefluss" | "batterie" | "spannung";
export type SeriesKind = "area" | "line" | "reference";

export const POWER_MAX_KW = 5;
export const VOLTAGE_MAX = 400;
export const BATTERY_MAX_PERCENT = 100;
const STRING_POWER_MAX_W = 2000;

export interface SeriesConfig {
  id: string;
  label: string;
  group: SeriesGroup;
  color: string;
  kind: SeriesKind;
  accessor?: (reading: AnalysisReading) => number;
  maxValue?: number;
  defaultVisible: boolean;
}

export const SERIES_CONFIG: SeriesConfig[] = [
  {
    id: "solar",
    label: "Solarenergie",
    group: "energiefluss",
    color: "#f59e0b",
    kind: "area",
    accessor: (r) => r.productionKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: true,
  },
  {
    id: "directUse",
    label: "Direktverbrauch",
    group: "energiefluss",
    color: "#10b981",
    kind: "area",
    accessor: (r) => r.directUseKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: true,
  },
  {
    id: "totalConsumption",
    label: "Gesamtverbrauch",
    group: "energiefluss",
    color: "#fb7185",
    kind: "area",
    accessor: (r) => r.totalConsumptionKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: true,
  },
  {
    id: "gridDraw",
    label: "Netzbezug",
    group: "energiefluss",
    color: "#f97316",
    kind: "area",
    accessor: (r) => r.gridDrawKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: true,
  },
  {
    id: "soc",
    label: "SoC (%)",
    group: "batterie",
    color: "#8b5cf6",
    kind: "line",
    accessor: (r) => r.batteryPercent,
    maxValue: BATTERY_MAX_PERCENT,
    defaultVisible: true,
  },
  {
    id: "charge",
    label: "Ladung",
    group: "batterie",
    color: "#38bdf8",
    kind: "line",
    accessor: (r) => r.batteryChargeKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: false,
  },
  {
    id: "discharge",
    label: "Entladung",
    group: "batterie",
    color: "#34d399",
    kind: "line",
    accessor: (r) => r.batteryDischargeKw,
    maxValue: POWER_MAX_KW,
    defaultVisible: false,
  },
  {
    id: "str1Power",
    label: "Leist. Str1",
    group: "spannung",
    color: "#ef4444",
    kind: "line",
    accessor: (r) => r.string1PowerW,
    maxValue: STRING_POWER_MAX_W,
    defaultVisible: false,
  },
  {
    id: "str2Power",
    label: "Leist. Str2",
    group: "spannung",
    color: "#3b82f6",
    kind: "line",
    accessor: (r) => r.string2PowerW,
    maxValue: STRING_POWER_MAX_W,
    defaultVisible: false,
  },
  {
    id: "str1Voltage",
    label: "Span. Str1",
    group: "spannung",
    color: "#94a3b8",
    kind: "line",
    accessor: (r) => r.string1VoltageV,
    maxValue: VOLTAGE_MAX,
    defaultVisible: false,
  },
  {
    id: "str2Voltage",
    label: "Span. Str2",
    group: "spannung",
    color: "#64748b",
    kind: "line",
    accessor: (r) => r.string2VoltageV,
    maxValue: VOLTAGE_MAX,
    defaultVisible: false,
  },
  {
    id: "acL1",
    label: "AC L1",
    group: "spannung",
    color: "#fbbf24",
    kind: "line",
    accessor: (r) => r.acL1V,
    maxValue: VOLTAGE_MAX,
    defaultVisible: false,
  },
  {
    id: "acL2",
    label: "AC L2",
    group: "spannung",
    color: "#fb923c",
    kind: "line",
    accessor: (r) => r.acL2V,
    maxValue: VOLTAGE_MAX,
    defaultVisible: false,
  },
  {
    id: "acL3",
    label: "AC L3",
    group: "spannung",
    color: "#f472b6",
    kind: "line",
    accessor: (r) => r.acL3V,
    maxValue: VOLTAGE_MAX,
    defaultVisible: false,
  },
  { id: "limit70", label: "70% Limit", group: "spannung", color: "#94a3b8", kind: "reference", defaultVisible: false },
];
