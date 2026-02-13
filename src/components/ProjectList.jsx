import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

/**
 * ProjectList — Renders the projects table.
 * Shows an EmptyState when the list is empty.
 * Differentiates between "no data at all" and "no matching results".
 */
export default function ProjectList({
  projects,
  hasActiveFilters,
  onSelectProject,
}) {
  if (projects.length === 0) {
    return hasActiveFilters ? (
      <EmptyState
        message="No projects match your filters"
        suggestion="Try adjusting your search or status filters."
      />
    ) : (
      <EmptyState message="No projects available" />
    );
  }

  return (
    <div className="project-list-wrapper">
      <table className="project-list">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </tbody>
      </table>
      <p className="project-count">
        {projects.length} project{projects.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
