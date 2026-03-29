import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Removed the index delay here
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg border border-gray-500 transition-all h-full flex flex-col" // Added h-full and flex column
    >
      <div className="h-52 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-md text-muted-foreground mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs border border-secondary bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2 z-20">
          <div className="flex space-x-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <ExternalLink size={24}/>
              </a>
            )}
            <a
              href={project.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Github size={24}/>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;