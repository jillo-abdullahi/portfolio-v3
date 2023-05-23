import Image from "next/image";
import { ProjectStatusBadge } from "@/components/projectStatusBadge";
import { ButtonLink } from "@/components/buttons";
import { Project } from "@/containers/Projects";

export const ProjectCard: React.FC<{ project: Project }> = ({
  project,
}): JSX.Element => {
  const { title, description, image, preview, github, stacks, completed } =
    project;
  return (
    <li
      key={title}
      className="grid grid-col-featured gap-[10px] items-center idea"
    >
      <div className="project-content z-30">
        <div>
          {!completed && (
            <div className="flex items-center justify-end">
              <ProjectStatusBadge isProjectComplete={completed} />
            </div>
          )}

          <div className="title flex">
            <h3 className="mb-5 text-blue-100 hover:text-blue-500 dark:hover:text-green featured-size font-semibold externals w-fit">
              <a href={preview} target="_blank">
                {title}
              </a>
            </h3>
          </div>

          <div className="text-blue-100 p-[25px] border border-blue-200 rounded-xl bg-blue-700 project-description-shadow">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <ul className="flex flex-wrap mt-[25px] mb-[10px] text-blue-500">
            {stacks.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="flex items-center mt-[10px] -ml-[10px] text-slate-600 dark:text-slate-lightest externals">
            {github && (
              <a
                href={github}
                className="hover:bg-blue-600 border border-blue-500 hover:border-blue-400 rounded-md px-3.5 py-2.5 m-[10px] hover:text-white flex items-center justify-start space-x-2"
                target="_blank"
              >
                <Image
                  src="/images/icon-github.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="text-blue-100">View code</span>
              </a>
            )}
            {preview && (
              <ButtonLink href={preview}>
                <div className="flex items-center justify-start space-x-2">
                  <Image
                    src="/images/icon-preview.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span className="text-blue-100">Preview</span>
                </div>
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
      <div className="project-image opacity-5 md:opacity-100">
        <a href={preview} target="_blank">
          <Image
            src={`/images/portfolio/${image}`}
            alt=""
            className="w-full object-cover rounded-xl border border-gray-700 hover:border-blue-500"
            width={500}
            height={300}
          />
        </a>
      </div>
    </li>
  );
};
