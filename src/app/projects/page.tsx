import { Main } from "@/components/main";
import { ProjectsContainer } from "@/containers/Projects";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-blue-900">
      <ProjectsContainer />
    </div>
  );
}
