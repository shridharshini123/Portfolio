"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, X } from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

/* =========================
   Project Card
========================= */
function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
    >
      <div
        className="
        rounded-2xl backdrop-blur-xl shadow-md overflow-hidden
        bg-white/80 dark:bg-[#1c1c2b]/80
        border border-violet-200 dark:border-violet-700
        transition-all duration-300 hover:shadow-xl
      "
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="
                text-[11px] px-2.5 py-1 rounded-md
                bg-violet-50 dark:bg-violet-900/40
                border border-violet-200 dark:border-violet-700
                text-violet-600 dark:text-violet-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Project Modal
========================= */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const fullText = project.longDescription || project.description;

  const WORD_LIMIT = 300;
  const words = fullText.trim().split(/\s+/);
  const isLong = words.length > WORD_LIMIT;
  const previewText = words.slice(0, WORD_LIMIT).join(" ");

  /* Prevent background scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /* ESC key close */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="
        w-full max-w-3xl
        max-h-[90vh]
        rounded-3xl
        overflow-hidden
        bg-white dark:bg-[#1c1c2b]
        border border-violet-200 dark:border-violet-700
        shadow-2xl
        flex flex-col
        animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 dark:bg-black/40 backdrop-blur p-2 rounded-full hover:scale-110 transition"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/8]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mt-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {!expanded ? (
              <>
                <p>
                  {previewText}
                  {isLong && "..."}
                </p>

                {isLong && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="mt-3 text-violet-600 dark:text-violet-300 font-medium hover:underline"
                  >
                    Expand
                  </button>
                )}
              </>
            ) : (
              <>
                <p>{fullText}</p>

                <button
                  onClick={() => setExpanded(false)}
                  className="mt-3 text-violet-600 dark:text-violet-300 font-medium hover:underline"
                >
                  Show Less
                </button>
              </>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="
                px-3 py-1.5 text-xs rounded-full
                bg-violet-50 dark:bg-violet-900/40
                border border-violet-200 dark:border-violet-700
                text-violet-600 dark:text-violet-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub */}
          {project.githubUrl && (
            <div className="mt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-violet-600 text-white text-sm font-semibold
                hover:bg-violet-700 transition-all
                "
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================
   Projects Section
========================= */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="
      relative overflow-hidden py-28 px-6
      bg-gradient-to-br from-violet-50 via-white to-violet-100
      dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}