import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink,
  technologies,
}) => {
  const cardVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-lg bg-slate-800/50 shadow-md transition-all duration-300 hover:bg-slate-800/70 hover:shadow-xl md:h-48 md:flex-row lg:h-56"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="relative h-48 w-full md:h-full md:w-1/3 md:shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20 md:bg-gradient-to-r" />
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 sm:text-xl">
              {title}
            </h3>
          </div>
          <p className="mb-4 line-clamp-2 text-sm text-gray-300 sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
