import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectsSlider from "./ProjectsSlider";

const projects = [
  {
    id: 4,
    title: "Makhan Move – AI Logistics & Price Negotiation Platform",
    description: "An AI-powered logistics platform that streamlines relocation by automating mover discovery, price negotiation, and risk analysis. It uses AI voice agents via Twilio to interact with movers, converts conversations into structured insights, and applies a PyTorch model to recommend the most reliable and cost-effective option with real-time WhatsApp updates.",
    image: "/Projects/project4.png",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "PyTorch",
      "Twilio API",
      "Google Maps API",
      "LLM (AI Agent)",
      "MongoDB",
      "Tailwind CSS"
    ],
    GitHub: "https://github.com/xivam-007/Electrothon-8.0",
    demoUrl: "",
  },
  {
    id: 1,
    title: "InTouch Sign Language Translator",
    description: "A real-time web application that detects and translates American Sign Language gestures into readable text using webcam input. Built with MediaPipe and FastAPI, it processes hand landmarks efficiently and delivers accurate predictions through a responsive Next.js interface for seamless user interaction.",
    image: "/Projects/project1.png",
    techStack: ["Next.js", "React", "MediaPipe", "FastAPI", "Python", "TypeScript", "TensorFlow", "Tailwind CSS"],
    GitHub: "https://github.com/xivam-007/hackprix",
    demoUrl: "https://www.youtube.com/watch?v=hNw0g1Ey940",
  },
  {
    id: 2,
    title: "YC Directory – Startup Pitch Platform",
    description: "A full-stack platform that enables entrepreneurs to create, share, and explore startup ideas in a structured way. Built with Next.js and Sanity CMS, it features authentication, dynamic content management, and a clean Tailwind CSS UI designed to enhance discoverability and user engagement.",
    image: "/Projects/project2.png",
    techStack: ["Sanity", "Next.js", "TypeScript", "TailwindCSS", "lucide-react", "NextAuth.js", "uiw/react-md-editor"],
    GitHub: "https://github.com/VAIBHAVranjan1/NEXT-PROJECT",
    demoUrl: "https://next-project-nine-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Password Manager",
    description: "A desktop application built with Python and Tkinter that allows users to securely generate, store, and retrieve passwords locally. It uses JSON for lightweight data persistence and includes features like random password generation and clipboard copying for convenient and secure access.",
    image: "/Projects/project3.png",
    techStack: ["Python", "Tkinter", "JSON", "random", "pyperclip"],
    GitHub: "https://github.com/VAIBHAVranjan1/Password---Manager",
    demoUrl: "https://youtu.be/VuPVmdYELKI",
  }
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

        <div className="w-full">
          <ProjectsSlider projects={projects} />
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/VAIBHAVranjan1"
            target="_blank"
            rel="noopener noreferrer"
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