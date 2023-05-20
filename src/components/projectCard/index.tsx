import { Project } from "@/containers/Projects";

export const ProjectCard: React.FC<{ project: Project }> = ({
  project,
}): JSX.Element => {
  const { title, description, image, preview, github, stacks } = project;
  return <div>This is a project card</div>;
};
