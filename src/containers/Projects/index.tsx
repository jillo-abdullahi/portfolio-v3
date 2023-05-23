import { portfolioProjects } from "@/utils/constants";
import { ProjectCard } from "@/components/projectCard";
import { portfolioLinks } from "@/utils/constants";
import { SectionHeading } from "@/components/sectionHeading";
export interface Project {
  title: string;
  description: string;
  image: string;
  preview: string;
  github: string;
  stacks: string[];
  completed: boolean;
}

export const ProjectsContainer: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start w-full mt-32 pt-12 px-4 sm:px-24">
      {/* title  */}
      <SectionHeading
        titleMain="Projects"
        titleSub="Featured"
        description={
          <>
            Here are a few projects I have worked on recently.
            <br /> For a full list of projects, please visit my{" "}
            <a
              className="text-blue-500 font-bold hover:underline"
              href={portfolioLinks.github}
              target="_blank"
            >
              Github profile
            </a>
            .
          </>
        }
      />

      {/* projects  */}
      <ul className="space-y-[100px] mt-12">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.github} project={project} />
        ))}
      </ul>
    </div>
  );
};
