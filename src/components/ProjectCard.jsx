import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg border border-gray-500 transition-all"
    >
      <div className="h-52 overflow-hidden">
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

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs border border-secondary bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-2 z-20">
          <div className="flex space-x-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <ExternalLink size={30}/>
            </a>
            <a
              href={project.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Github size={30}/>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
