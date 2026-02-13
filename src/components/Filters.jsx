const STATUSES = ["Active", "On Hold", "Completed"];

/**
 * Filters — Search input and status checkboxes.
 * All state is controlled via props (lifted to parent).
 */
export default function Filters({
  searchQuery,
  onSearchChange,
  selectedStatuses,
  onStatusChange,
}) {
  function handleStatusToggle(status) {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  }

  return (
    <div className="filters">
      <div className="filter-search">
        <label htmlFor="search-input" className="filter-label">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Search by project or client name…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-status">
        <span className="filter-label">Status</span>
        <div className="status-checkboxes">
          {STATUSES.map((status) => (
            <label key={status} className="status-checkbox-label">
              <input
                type="checkbox"
                checked={selectedStatuses.includes(status)}
                onChange={() => handleStatusToggle(status)}
              />
              <span
                className={`status-badge status-${status.toLowerCase().replace(" ", "-")}`}
              >
                {status}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
