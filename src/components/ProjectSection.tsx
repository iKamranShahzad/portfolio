import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectData";
import { motion } from "framer-motion";
import { useRef } from "react";

function ProjectSection() {
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-4">
      <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        Projects — I have built
      </h2>

      <div className="flex flex-col space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
