import type { KpiItem } from "../../types/dashboard";
import { KpiCard } from "./KpiCard";

interface DailyKpisProps {
  items: KpiItem[];
}

export function DailyKpis({ items }: DailyKpisProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <KpiCard key={item.id} {...item} />
      ))}
    </section>
  );
}
