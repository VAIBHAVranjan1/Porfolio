import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSlider = ({ projects }) => {
  const sliderRef = useRef(null);

  // Function to handle smooth scrolling left or right
  const scroll = (direction) => {
    if (sliderRef.current) {
      // Adjust 400 based on how far you want it to scroll per click
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card border border-gray-500 rounded-full shadow-lg hover:bg-muted transition-all"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrolling Row Container */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-12 pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hides scrollbar on Firefox/IE
      >
        {/* Webkit scrollbar hiding needs to be added to your global CSS */}
        {projects.map((project) => (
          // Fixed min-width ensures cards don't shrink and stay in a single row
          <div key={project.id} className="min-w-[320px] md:min-w-[400px] snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-card border border-gray-500 rounded-full shadow-lg hover:bg-muted transition-all"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProjectsSlider;