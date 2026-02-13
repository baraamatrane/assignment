# AI Usage Disclosure

## Tools Used

- **Antigravity** (Gemini-based AI agent in VS Code)

## What AI Was Used For

| Area                | AI Involvement                                             |
| ------------------- | ---------------------------------------------------------- |
| Project scaffolding | Generated `package.json`, `vite.config.js`, `index.html`   |
| Component code      | Generated all `.jsx` files based on specified requirements |
| Mock data           | Generated `projects.json` with edge-case entries           |
| Custom hook         | Generated `useProjects.js` with `useMemo`-based filtering  |
| Utility functions   | Generated `format.js` for date/currency formatting         |
| CSS styling         | Generated complete `App.css` with responsive design        |
| Documentation       | Generated `README.md` and this file                        |

## What I Reviewed and Validated

- **Filtering logic**: Verified that `useMemo` correctly derives filtered results using AND combination of search + status, and that the original data is never mutated
- **Edge cases**: Confirmed null handling for `endDate`, `description`, and `budget` fields; verified long name truncation in table and full display in detail
- **Component boundaries**: Validated that each component has a single responsibility and props flow unidirectionally
- **State management**: Confirmed `selectedProjectId` lookups use `allProjects` (not `filteredProjects`) to avoid stale references when filters change

## What I Changed or Rejected

- Rejected suggestions to add `react-router` — unnecessary complexity for single-level navigation
- Rejected suggestions to add animation libraries — assignment explicitly states "this is not about animations"
- Simplified the status filter from a custom dropdown to checkboxes — more usable for 3 options

## What I Don't Fully Agree With

- The AI initially suggested using a card grid layout instead of a table. While cards look more modern, a table is more appropriate for structured data with consistent fields — better scanability and data density. I chose the table.
- The empty state icon (📋 emoji) could be replaced with an SVG for cross-platform consistency, but for this scope an emoji is pragmatic.
