import { formatDate, formatCurrency } from "../utils/format";

/**
 * ProjectDetail — Displays all fields for a selected project.
 *
 * Extra field: Budget
 * This field represents the estimated project budget in USD.
 * It provides financial context that a project manager would need
 * when reviewing project details on an internal dashboard.
 *
 * Handles missing optional fields (endDate, description, budget)
 * by displaying "—" or "No description provided."
 */
export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="detail-header">
        <h2 className="detail-title">{project.name}</h2>
        <span
          className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </div>

      <div className="detail-grid">
        <div className="detail-field">
          <span className="detail-label">Client</span>
          <span className="detail-value">{project.client}</span>
        </div>

        <div className="detail-field">
          <span className="detail-label">Start Date</span>
          <span className="detail-value">{formatDate(project.startDate)}</span>
        </div>

        <div className="detail-field">
          <span className="detail-label">End Date</span>
          <span className="detail-value">{formatDate(project.endDate)}</span>
        </div>

        <div className="detail-field">
          <span className="detail-label">Budget</span>
          <span className="detail-value">{formatCurrency(project.budget)}</span>
        </div>
      </div>

      <div className="detail-description">
        <span className="detail-label">Description</span>
        <p className="detail-value">
          {project.description || "No description provided."}
        </p>
      </div>
    </div>
  );
}
