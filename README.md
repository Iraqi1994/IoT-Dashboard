# IoT Dashboard

A web dashboard for monitoring a home solar + battery energy system in real time. It visualizes live energy flow between solar panels, battery storage, the grid and household consumption, alongside daily KPIs, historical analysis charts and device/system status.

<img width="1892" height="925" alt="image" src="https://github.com/user-attachments/assets/17d3089f-42b8-400d-966b-61117c9dd836" />
<img width="1890" height="951" alt="image" src="https://github.com/user-attachments/assets/9c75c0d0-5bf2-48cf-b4ba-3c4d5e247778" />

## Features

- **Live energy flow** — animated diagram showing power flowing between solar, battery, grid and home consumption.
- **Daily KPIs** — at-a-glance summary cards for production, consumption, self-sufficiency, etc.
- **Analysis chart** — dual-axis historical chart (energy flow, battery level, voltage/limit) with a togglable legend.
- **Device sidebar** — collapsible cards for panels, the AC box and overall system status.
- **VPP wishes panel** — virtual power plant preferences/settings.
- **Live & daily values panels** — detailed current and daily readings.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@tailwindcss/vite`)
- [Iconify](https://iconify.design/) (`@iconify/react`) for icons

Data is currently sourced from mock data (`src/data/mockData.ts`) for local development and demo purposes.

## Project structure

```
src/
  App.tsx              # entry component, renders Dashboard
  Dashboard.tsx         # composes the page, owns cross-cutting state
  components/
    analysis/           # historical dual-axis analysis chart + legend
    energy-flow/        # live energy flow diagram
    kpi/                # daily KPI cards
    layout/             # navbar, top status bar
    sidebar/             # system status, panels, AC box, device cards
    stats/               # live/daily values panels
    vpp/                 # VPP wishes panel
    common/              # shared small components (e.g. Pill)
  data/mockData.ts       # mock data for the dashboard
  types/dashboard.ts     # shared TypeScript interfaces
  utils/chart.ts         # SVG chart path helpers
```

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build     # type-check and build for production
npm run lint      # run ESLint
npm run preview   # preview the production build
```
