export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

export function receiveProjects(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects,
  };
}
