import { useState } from "react";
import { useProjects } from "./hooks/useProjects";
import Filters from "./components/Filters";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import "./App.css";

/**
 * App — Root component.
 *
 * Routing strategy: Uses simple state (selectedProjectId) instead of
 * react-router. For a small internal dashboard with no deep-linking
 * requirement, this is simpler and avoids an extra dependency.
 */
export default function App() {
  const {
    allProjects,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    selectedStatuses,
    setSelectedStatuses,
  } = useProjects();

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Determine if any filters are active (for empty state messaging)
  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedStatuses.length > 0;

  // Find the selected project from the original data (not filtered)
  const selectedProject = selectedProjectId
    ? allProjects.find((p) => p.id === selectedProjectId) || null
    : null;

  function handleSelectProject(id) {
    setSelectedProjectId(id);
  }

  function handleBackToList() {
    setSelectedProjectId(null);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Project Dashboard</h1>
        {selectedProject && (
          <span className="header-breadcrumb">/ {selectedProject.name}</span>
        )}
      </header>

      <main className="app-main">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBackToList} />
        ) : (
          <>
            <Filters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedStatuses={selectedStatuses}
              onStatusChange={setSelectedStatuses}
            />
            <ProjectList
              projects={filteredProjects}
              hasActiveFilters={hasActiveFilters}
              onSelectProject={handleSelectProject}
            />
          </>
        )}
      </main>
    </div>
  );
}
