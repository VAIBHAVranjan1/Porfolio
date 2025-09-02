
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "InTouch Sign Language Translator",
    description: "A real-time web app that uses MediaPipe and FastAPI to detect and classify ASL hand gestures from webcam input, translating them into readable text.",
    image: "/Projects/project1.png",
    techStack: ["Next.js", "React", "MediaPipe", "FastAPI", "Python", "TypeScript", "TensorFlow", "Tailwind CSS"],
    GitHub: "https://github.com/xivam-007/hackprix",
    demoUrl: "https://www.youtube.com/watch?v=hNw0g1Ey940",
  },
  {
    id: 2,
    title: "YC Directory – Startup Pitch Platform",
    description: "A Next.js web app where entrepreneurs can pitch and explore startup ideas, with authentication, content management via Sanity CMS, and a clean Tailwind CSS interface.",
    image: "/Projects/project2.png",
    techStack: ["Sanity", "Next.js", "TypeScript", "TailwindCSS", "lucid-reacts", "NextAuth.js", "uiw/react-md-editor"],
    GitHub: "https://github.com/VAIBHAVranjan1/NEXT-PROJECT",
    demoUrl: "https://next-project-nine-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Password Manager",
    description: "A simple password manager built with Python and Tkinter that allows users to generate, store, and retrieve secure passwords locally using JSON.",
    image: "/Projects/project3.png",
    techStack: ["Python", "Tkinter", "JSON", "random", "pyperclip", "messagebox (from Tkinter)"],
    GitHub: "https://github.com/VAIBHAVranjan1/Password---Manager",
    demoUrl: "https://youtu.be/VuPVmdYELKI",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my projects. Building these taught me how things work under the hood, how to enhance UX, and how different technologies integrate.
        </motion.p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/VAIBHAVranjan1"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
