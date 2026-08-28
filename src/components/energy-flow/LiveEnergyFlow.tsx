import type { EnergyFlowLine, EnergyFlowNode } from "../../types/dashboard";
import { FlowLine } from "./FlowLine";
import { FlowNode } from "./FlowNode";

interface LiveEnergyFlowProps {
  nodes: EnergyFlowNode[];
  lines: EnergyFlowLine[];
  cycleLabel: string;
}

export function LiveEnergyFlow({ nodes, lines, cycleLabel }: LiveEnergyFlowProps) {
  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const solar = nodeById.solar;
  const home = nodeById.home;
  const battery = nodeById.battery;
  const grid = nodeById.grid;
  const [stemLine, batteryLine, gridLine] = lines;

  return (
    <section>
      <div className="bg-slate-950 rounded-2xl shadow-sm border border-slate-800 p-6 sm:p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.1),transparent_50%)]" />

        <div className="flex items-center justify-between mb-8 relative z-10">
          <h2 className="text-base text-slate-400 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live-Energiefluss
          </h2>
          <span className="text-xs font-medium text-slate-400 border border-slate-700 rounded-full px-3 py-1">{cycleLabel}</span>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <FlowNode icon={solar.icon} label={solar.label} valueLabel={solar.valueLabel} accent={solar.accent} />

          <div className="relative w-full max-w-xl h-16">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
              <FlowLine accent={stemLine.accent} reverse={stemLine.reverse} orientation="vertical" />
            </div>

            <div className="absolute left-[16.6667%] right-1/2 top-1/2 -translate-y-1/2">
              <FlowLine accent={batteryLine.accent} reverse={batteryLine.reverse} />
            </div>
            <div className="absolute left-[16.6667%] top-1/2 bottom-0">
              <FlowLine accent={batteryLine.accent} reverse={batteryLine.reverse} orientation="vertical" />
            </div>

            <div className="absolute left-1/2 right-[16.6667%] top-1/2 -translate-y-1/2">
              <FlowLine accent={gridLine.accent} reverse={gridLine.reverse} />
            </div>
            <div className="absolute right-[16.6667%] top-1/2 bottom-0">
              <FlowLine accent={gridLine.accent} reverse={gridLine.reverse} orientation="vertical" />
            </div>
          </div>

          <div className="grid grid-cols-3 w-full max-w-xl">
            <div className="flex justify-center">
              <FlowNode icon={battery.icon} label={battery.label} valueLabel={battery.valueLabel} accent={battery.accent} />
            </div>
            <div className="flex justify-center">
              <FlowNode icon={home.icon} label={home.label} valueLabel={home.valueLabel} accent={home.accent} />
            </div>
            <div className="flex justify-center">
              <FlowNode icon={grid.icon} label={grid.label} valueLabel={grid.valueLabel} accent={grid.accent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
