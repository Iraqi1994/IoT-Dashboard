import { AnalysisChart } from "./components/analysis/AnalysisChart";
import { LiveEnergyFlow } from "./components/energy-flow/LiveEnergyFlow";
import { DailyKpis } from "./components/kpi/DailyKpis";
import { Navbar } from "./components/layout/Navbar";
import { TopStatusBar } from "./components/layout/TopStatusBar";
import { DeviceSidebar } from "./components/sidebar/DeviceSidebar";
import { DailyValuesPanel } from "./components/stats/DailyValuesPanel";
import { LiveValuesPanel } from "./components/stats/LiveValuesPanel";
import { VppWishesPanel } from "./components/vpp/VppWishesPanel";
import {
  acBoxPhases,
  analysisReadings,
  brand,
  dailyKpis,
  dailyValues,
  energyFlowCycleLabel,
  energyFlowLines,
  energyFlowNodes,
  liveValues,
  liveValuesUpdatedAt,
  panelStrings,
  panelsWattPeak,
  sidebarDevices,
  systemStatus,
  vppDefaultDate,
  vppStatusOptions,
  vppWishes,
} from "./data/mockData";

function Dashboard() {
  return (
    <div className="antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <TopStatusBar label={brand.topBarLabel} />
      <Navbar customerName={brand.customerName} />

      <main className="flex-1 w-full px-6 sm:px-8 lg:px-12 py-8 flex flex-col lg:flex-row gap-6">
        <DeviceSidebar
          systemStatus={systemStatus}
          panelStrings={panelStrings}
          panelsWattPeak={panelsWattPeak}
          acBoxPhases={acBoxPhases}
          devices={sidebarDevices}
        />

        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <LiveEnergyFlow nodes={energyFlowNodes} lines={energyFlowLines} cycleLabel={energyFlowCycleLabel} />
          <DailyKpis items={dailyKpis} />
          <AnalysisChart readings={analysisReadings} />
          <div className="flex flex-col xl:flex-row gap-6">
            <DailyValuesPanel {...dailyValues} />
            <LiveValuesPanel updatedAt={liveValuesUpdatedAt} {...liveValues} />
          </div>
          <VppWishesPanel wishes={vppWishes} defaultDate={vppDefaultDate} statusOptions={vppStatusOptions} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
