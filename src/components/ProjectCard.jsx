import { formatDate } from "../utils/format";

/**
 * ProjectCard — A single table row representing one project.
 * Displays name, client, status badge, start date, and end date.
 * Row is clickable to navigate to the detail view.
 */
export default function ProjectCard({ project, onSelect }) {
  return (
    <tr className="project-card" onClick={() => onSelect(project.id)}>
      <td className="project-name-cell">
        <span className="project-name" title={project.name}>
          {project.name}
        </span>
      </td>
      <td>{project.client}</td>
      <td>
        <span
          className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </td>
      <td>{formatDate(project.startDate)}</td>
      <td>{formatDate(project.endDate)}</td>
    </tr>
  );
}
