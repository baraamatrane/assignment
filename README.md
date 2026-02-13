# Project Dashboard

A clean, functional Project Dashboard built with **React** and **Vite**. Lists projects, supports combined filtering, and shows detailed project information — all client-side with no backend.

## Setup

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Features

- **Project List**: Table view with name, client, status, start/end dates
- **Filters**: Search by project/client name + multi-select status filter
  - Filters combine with AND logic
  - Never mutate the original data
- **Project Detail**: Click any project to see all fields including budget
- **Edge Case Handling**:
  - Empty dataset → "No projects available"
  - No filter results → "No projects match your filters"
  - Long project names → truncated in table, shown fully in detail
  - Missing optional fields → graceful fallback ("—" or "No description provided.")

## Extra Field: Budget

The `budget` field (USD) was added to project details. It provides financial context that a project manager would need when reviewing projects on an internal dashboard.

## Assumptions

- **No backend**: All data is hardcoded in `src/data/projects.json`
- **No URL routing**: State-based view switching via `useState` — adequate for a small internal tool with no deep-linking requirement
- **No pagination**: Dataset is small (10 projects); pagination would be over-engineering
- **No persistent state**: Filters reset on page reload

## Trade-offs

| Decision                | Alternative          | Why                                                      |
| ----------------------- | -------------------- | -------------------------------------------------------- |
| `useState` for routing  | `react-router`       | Avoids extra dependency for a single-level navigation    |
| Vanilla CSS             | Tailwind / CSS-in-JS | Full control, no build tooling overhead, explicit styles |
| `useMemo` for filtering | `useEffect` + state  | Derived state is more correct — avoids sync issues       |
| Table layout            | Card grid            | Better data density for structured project listing       |

## Folder Structure

```
src/
├── components/
│   ├── EmptyState.jsx      # Reusable empty/no-results display
│   ├── Filters.jsx         # Search + status filter controls
│   ├── ProjectCard.jsx     # Single table row
│   ├── ProjectDetail.jsx   # Full project detail view
│   └── ProjectList.jsx     # Table with empty state handling
├── data/
│   └── projects.json       # Mock data (10 projects)
├── hooks/
│   └── useProjects.js      # Filtering logic
├── utils/
│   └── format.js           # Date & currency formatting
├── App.jsx                 # Root: list/detail routing
├── App.css                 # All styles
└── main.jsx                # Entry point
```
