import { useMemo, useState } from "react";
import projects from "../data/projects.json";

/**
 * Custom hook that manages project filtering state and logic.
 * - Never mutates the original data array.
 * - Filters combine with AND logic (search AND status).
 * - Search is case-insensitive substring match on name and client.
 */
export function useProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      // Status filter: if statuses are selected, project must match one
      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(project.status);

      // Search filter: match against name or client
      const matchesSearch =
        query === "" ||
        project.name.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, selectedStatuses]);

  return {
    allProjects: projects,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    selectedStatuses,
    setSelectedStatuses,
  };
}
