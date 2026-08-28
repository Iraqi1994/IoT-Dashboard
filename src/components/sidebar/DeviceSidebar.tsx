import type { AcBoxPhase, DeviceInfo, PanelString } from "../../types/dashboard";
import { AcBoxCard } from "./AcBoxCard";
import { CollapsibleDeviceCard } from "./CollapsibleDeviceCard";
import { PanelsCard } from "./PanelsCard";
import { SystemStatusCard } from "./SystemStatusCard";

interface DeviceSidebarProps {
  systemStatus: { badge: string; statusText: string; subText: string };
  panelStrings: PanelString[];
  panelsWattPeak: string;
  acBoxPhases: AcBoxPhase[];
  devices: DeviceInfo[];
}

export function DeviceSidebar({ systemStatus, panelStrings, panelsWattPeak, acBoxPhases, devices }: DeviceSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-slate-900">Geräte &amp; Systemstatus</h2>
      <SystemStatusCard {...systemStatus} />
      <PanelsCard strings={panelStrings} wattPeak={panelsWattPeak} />
      <AcBoxCard phases={acBoxPhases} />
      {devices.map((device) => (
        <CollapsibleDeviceCard key={device.id} {...device} />
      ))}
    </aside>
  );
}
