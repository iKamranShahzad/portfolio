import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink,
  githubLink,
  technologies,
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:max-w-sm">
      {/* Image container with gradient overlay */}
      <div className="relative aspect-[16/10]">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        <img src={image} alt={title} className="h-full w-full object-cover" />

        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-base font-bold text-white drop-shadow-md sm:text-lg">
              {title}
            </h3>
            <div className="flex shrink-0 space-x-2">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-teal-500/20 p-1.5 text-teal-400 backdrop-blur-sm transition-colors duration-200 hover:bg-teal-500/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                </svg>
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-teal-500/20 p-1.5 text-teal-400 backdrop-blur-sm transition-colors duration-200 hover:bg-teal-500/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-auto">
            <p className="mb-2 line-clamp-2 text-xs text-gray-200 sm:text-sm">
              {description}
            </p>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-gray-800/60 px-1.5 py-0.5 text-xs font-medium text-gray-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
