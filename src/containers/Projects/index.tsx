import { portfolioProjects } from "@/utils/constants";
import { ProjectCard } from "@/components/projectCard";

export interface Project {
  title: string;
  description: string;
  image: string;
  preview: string;
  github: string;
  stacks: string[];
}

export const ProjectsContainer: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start w-full mt-32">
      {/* title  */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Featured <span className="text-blue-500">Projects</span>
        </h1>
        <h2 className="text-lg text-white mt-4">
          Some projects I have worked on.
        </h2>
      </div>

      {/* projects  */}
      <div className="flex flex-col space-y-6 mt-12">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.github} project={project} />
        ))}
      </div>
    </div>
  );
};
