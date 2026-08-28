import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import type { VppWish } from "../../types/dashboard";

interface VppWishesPanelProps {
  wishes: VppWish[];
  defaultDate: string;
  statusOptions: string[];
}

export function VppWishesPanel({ wishes, defaultDate, statusOptions }: VppWishesPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [date, setDate] = useState(defaultDate);
  const [status, setStatus] = useState(statusOptions[0]);

  const filteredWishes = useMemo(() => wishes.filter((wish) => wish.date === date && wish.status === status), [wishes, date, status]);

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-slate-900">VPP WISHES</h3>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="w-full flex items-center justify-between px-5 py-3 bg-blue-50 text-blue-700 font-medium text-sm"
        >
          Wish Chart
          <Icon icon="lucide:chevron-down" className={`transition-transform ${isOpen ? "" : "-rotate-90"}`} />
        </button>
        {isOpen && (
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-end gap-3">
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="border border-slate-200 rounded-md text-sm pl-3 pr-2 py-1.5 text-slate-700"
                />
              </div>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="border border-slate-200 rounded-md text-sm pl-3 pr-2 py-1.5 text-slate-700"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {filteredWishes.length === 0 ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-md px-4 py-3">
                No wishes found for the selected date and state.
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {filteredWishes.map((wish) => (
                  <li key={wish.id} className="text-sm text-slate-700 border border-slate-100 rounded-md px-4 py-2">
                    {wish.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
