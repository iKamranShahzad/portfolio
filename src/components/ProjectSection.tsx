import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectData";

function ProjectSection() {
  return (
    <section id="projects" className="m-2 p-4">
      <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        Projects — I have built
      </h2>

      <div className="mt-4 grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
