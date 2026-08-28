import type {
  AcBoxPhase,
  AnalysisReading,
  DailyValueStat,
  DeviceInfo,
  EnergyFlowLine,
  EnergyFlowNode,
  KpiItem,
  LiveValueStat,
  PanelString,
  VppWish,
} from "../types/dashboard";

export const brand = {
  customerName: "Hussein Iraqi",
  topBarLabel: "IoT Monitor",
};

export const energyFlowCycleLabel = "Zyklus: 5 Min";

export const energyFlowNodes: EnergyFlowNode[] = [
  {
    id: "solar",
    icon: "solar:sun-2-linear",
    label: "Solar Production",
    valueLabel: "Prod 3.2 kW",
    accent: "emerald",
  },
  {
    id: "home",
    icon: "solar:home-2-linear",
    label: "Home",
    valueLabel: "Cons 1.5 kW",
    accent: "blue",
  },
  {
    id: "battery",
    icon: "solar:battery-charge-linear",
    label: "Batterie (65%)",
    valueLabel: "0.5 kW Disch.",
    accent: "amber",
  },
  {
    id: "grid",
    icon: "lucide:plug",
    label: "Grid",
    valueLabel: "In 1.2 kW",
    accent: "slate",
  },
];

export const energyFlowLines: EnergyFlowLine[] = [
  { accent: "emerald", reverse: false },
  { accent: "amber", reverse: true },
  { accent: "slate", reverse: true },
];

export const dailyKpis: KpiItem[] = [
  { id: "pv-production", icon: "solar:sun-linear", label: "PV-Produktion", value: "24,5", unit: "kWh" },
  { id: "direct-consumption", icon: "solar:home-2-linear", label: "Solarenergie Direktverbrauch", value: "14,3", unit: "kWh" },
  { id: "grid-draw", icon: "solar:transmission-linear", label: "Netzbezug", value: "2,1", unit: "kWh" },
];

export const systemStatus = {
  badge: "Vollständig",
  statusText: "Status: Normal",
  subText: "Verbunden",
};

export const panelStrings: PanelString[] = [
  { label: "String 1", value: "12" },
  { label: "String 2", value: "10" },
  { label: "String 3", value: "8" },
];

export const panelsWattPeak = "0 Watt Peak";

export const acBoxPhases: AcBoxPhase[] = [
  { label: "L1", value: "230 V" },
  { label: "L2", value: "231 V" },
  { label: "L3", value: "229 V" },
];

export const sidebarDevices: DeviceInfo[] = [
  { id: "inverter", icon: "lucide:cpu", title: "Inverter", detailLabel: "Status", detailValue: "Online" },
  { id: "battery", icon: "lucide:battery-charging", title: "Batterie", detailLabel: "Ladezustand", detailValue: "60 %" },
  {
    id: "wallbox",
    icon: "lucide:car",
    title: "Wallbox",
    statusLabel: "Online",
    statusVariant: "success",
    detailLabel: "Status",
    detailValue: "Bereit",
  },
  {
    id: "waermepumpe",
    icon: "lucide:thermometer",
    title: "Wärmepumpe",
    statusLabel: "Online",
    statusVariant: "success",
    detailLabel: "Status",
    detailValue: "Heizen",
  },
];

export const analysisReadings: AnalysisReading[] = [
  {
    timeLabel: "00:00",
    productionKw: 0,
    directUseKw: 0.2,
    totalConsumptionKw: 0.5,
    gridDrawKw: 0.3,
    batteryPercent: 33,
    batteryChargeKw: 0,
    batteryDischargeKw: 0.2,
    string1PowerW: 0,
    string2PowerW: 0,
    string1VoltageV: 0,
    string2VoltageV: 0,
    acL1V: 230,
    acL2V: 231,
    acL3V: 229,
  },
  {
    timeLabel: "04:00",
    productionKw: 0,
    directUseKw: 0.15,
    totalConsumptionKw: 0.35,
    gridDrawKw: 0.2,
    batteryPercent: 33,
    batteryChargeKw: 0,
    batteryDischargeKw: 0.15,
    string1PowerW: 0,
    string2PowerW: 0,
    string1VoltageV: 0,
    string2VoltageV: 0,
    acL1V: 229,
    acL2V: 230,
    acL3V: 230,
  },
  {
    timeLabel: "08:00",
    productionKw: 1.2,
    directUseKw: 0.9,
    totalConsumptionKw: 1.8,
    gridDrawKw: 1.8,
    batteryPercent: 50,
    batteryChargeKw: 0.3,
    batteryDischargeKw: 0,
    string1PowerW: 650,
    string2PowerW: 600,
    string1VoltageV: 310,
    string2VoltageV: 305,
    acL1V: 231,
    acL2V: 230,
    acL3V: 232,
  },
  {
    timeLabel: "12:00",
    productionKw: 3.3,
    directUseKw: 1.6,
    totalConsumptionKw: 2.6,
    gridDrawKw: 3.6,
    batteryPercent: 66,
    batteryChargeKw: 1.7,
    batteryDischargeKw: 0,
    string1PowerW: 1750,
    string2PowerW: 1700,
    string1VoltageV: 335,
    string2VoltageV: 330,
    acL1V: 232,
    acL2V: 231,
    acL3V: 233,
  },
  {
    timeLabel: "16:00",
    productionKw: 1.6,
    directUseKw: 1.3,
    totalConsumptionKw: 2.8,
    gridDrawKw: 3.3,
    batteryPercent: 90,
    batteryChargeKw: 0.3,
    batteryDischargeKw: 0,
    string1PowerW: 850,
    string2PowerW: 800,
    string1VoltageV: 320,
    string2VoltageV: 315,
    acL1V: 230,
    acL2V: 229,
    acL3V: 231,
  },
  {
    timeLabel: "20:00",
    productionKw: 0,
    directUseKw: 0,
    totalConsumptionKw: 2.0,
    gridDrawKw: 2.0,
    batteryPercent: 95,
    batteryChargeKw: 0,
    batteryDischargeKw: 2.0,
    string1PowerW: 0,
    string2PowerW: 0,
    string1VoltageV: 0,
    string2VoltageV: 0,
    acL1V: 229,
    acL2V: 230,
    acL3V: 228,
  },
  {
    timeLabel: "24:00",
    productionKw: 0,
    directUseKw: 0.1,
    totalConsumptionKw: 0.4,
    gridDrawKw: 0.3,
    batteryPercent: 75,
    batteryChargeKw: 0,
    batteryDischargeKw: 0.3,
    string1PowerW: 0,
    string2PowerW: 0,
    string1VoltageV: 0,
    string2VoltageV: 0,
    acL1V: 230,
    acL2V: 230,
    acL3V: 230,
  },
];

export const dailyValues: { columns: DailyValueStat[][]; quoteRow: DailyValueStat[]; batteryRow: DailyValueStat[] } = {
  columns: [
    [
      { label: "Solarenergie", value: "42,62", unit: "kWh" },
      { label: "Sollproduktion", value: "20,50", unit: "kWh", badge: "208%", hasInfo: true },
      { label: "Direktverbrauch", value: "16,53", unit: "kWh", hasInfo: true },
      { label: "Eigenverbrauch", value: "20,02", unit: "kWh", hasInfo: true },
    ],
    [
      { label: "Gesamtverbrauch", value: "17,54", unit: "kWh", hasInfo: true },
      { label: "Netzbezug", value: "1,01", unit: "kWh" },
      { label: "Netzeinspeisung", value: "25,57", unit: "kWh" },
    ],
  ],
  quoteRow: [
    { label: "Eigenverbrauchsquote", value: "46,98", unit: "%", hasInfo: true },
    { label: "Autarkie Energie", value: "94,23", unit: "%" },
  ],
  batteryRow: [
    { label: "Batterie Ladung", value: "9,36", unit: "kWh" },
    { label: "Batterie Entladung", value: "5,99", unit: "kWh" },
  ],
};

export const liveValuesUpdatedAt = "Aktualisiert: 27.02.2026 11:06 PM";

export const liveValues: { columns: LiveValueStat[][] } = {
  columns: [
    [
      { label: "Produktion Solar (W)", value: "0", variant: "success" },
      { label: "Verbrauch Haus (W)", value: "129" },
      { label: "Netzeinspeisung (W)", value: "1" },
      { label: "Netzbezug (W)", value: "0" },
      { label: "Batterie Ladung (W)", value: "0" },
      { label: "Batterie Entladung (W)", value: "130", variant: "warning" },
      { label: "Batterie Ladezustand (%)", value: "60", variant: "warning" },
    ],
    [
      { label: "String 1 Spannung (V)", value: "0,00" },
      { label: "String 2 Spannung (V)", value: "0,00" },
      { label: "Spannung Phase 1 (V)", value: "239,50" },
      { label: "Spannung Phase 2 (V)", value: "239,60" },
      { label: "Spannung Phase 3 (V)", value: "239,80" },
      { label: "Leistung Phase 1 (W)", value: "9" },
      { label: "Leistung Phase 2 (W)", value: "2" },
      { label: "Leistung Phase 3 (W)", value: "-13" },
    ],
  ],
};

export const vppWishes: VppWish[] = [];
export const vppDefaultDate = "2026-02-27";
export const vppStatusOptions = ["Completed", "Pending", "Open"];
