"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  if (!projects.length) return null;

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

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden space-y-6">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
              rounded-2xl backdrop-blur-xl shadow-md overflow-hidden
              bg-white/80 dark:bg-[#1c1c2b]/80
              border border-violet-200 dark:border-violet-700
              "
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={activeProject.thumbnail}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {activeProject.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.techStack.slice(0, 4).map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="
                      relative px-3 py-1.5 text-xs rounded-full
                      bg-violet-50 dark:bg-violet-900/40
                      border border-violet-200 dark:border-violet-700
                      text-violet-600 dark:text-violet-300
                      transition-all duration-300
                      shadow-sm hover:shadow-md
                      cursor-default overflow-hidden
                      "
                    >
                      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-400/20 to-violet-300/20 blur-md" />
                      <span className="absolute left-[-100%] top-0 h-full w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 hover:animate-[shimmer_0.8s_linear] pointer-events-none" />
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-violet-600 dark:text-violet-300 font-medium text-sm"
                  >
                    <Github size={16} />
                    GitHub
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Selector */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`
                min-w-[180px] p-4 rounded-xl border text-left transition
                ${
                  activeProject.id === project.id
                    ? "bg-white dark:bg-[#1c1c2b] border-violet-300 dark:border-violet-600 shadow"
                    : "bg-white/60 dark:bg-[#1c1c2b]/70 border-violet-200 dark:border-violet-700"
                }
                `}
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                  {project.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">

          {/* Left List */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveProject(project)}
                className={`
                relative text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden
                ${
                  activeProject.id === project.id
                    ? "bg-white dark:bg-[#1c1c2b] border-violet-300 dark:border-violet-600 shadow-lg"
                    : "bg-white/70 dark:bg-[#1c1c2b]/70 border-violet-200 dark:border-violet-700"
                }
                `}
              >
                {activeProject.id === project.id && (
                  <motion.div
                    layoutId="activeProjectIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-violet-300 rounded-r-full"
                  />
                )}

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="
                      text-[11px] px-2.5 py-1 rounded-md
                      bg-violet-50 dark:bg-violet-900/40
                      border border-violet-200 dark:border-violet-700
                      text-violet-600 dark:text-violet-300
                      transition-all duration-300
                      hover:scale-105 hover:-translate-y-1
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="relative w-full max-w-3xl">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="
                  relative rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden
                  bg-white/80 dark:bg-[#1c1c2b]/80
                  border border-violet-200 dark:border-violet-700
                  "
                >
                  <motion.div
                    animate={{ opacity: [0.08, 0.18, 0.08] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-violet-200 to-violet-100 dark:from-violet-900 dark:to-violet-800 blur-3xl -z-10"
                  />

                  <div className="relative aspect-[16/7]">
                    <Image
                      src={activeProject.thumbnail}
                      alt={activeProject.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeProject.title}
                    </h3>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                      {activeProject.longDescription || activeProject.description}
                    </p>

                    {/* Interactive Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {activeProject.techStack.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ y: -4, scale: 1.05 }}
                          className="
                          relative px-3 py-1.5 text-xs rounded-full
                          bg-violet-50 dark:bg-violet-900/40
                          border border-violet-200 dark:border-violet-700
                          text-violet-600 dark:text-violet-300
                          transition-all duration-300
                          shadow-sm hover:shadow-md
                          cursor-default overflow-hidden
                          "
                        >
                          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-400/20 to-violet-300/20 blur-md" />
                          <span className="absolute left-[-100%] top-0 h-full w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 hover:animate-[shimmer_0.8s_linear] pointer-events-none" />
                          <span className="relative z-10">{tech}</span>
                        </motion.span>
                      ))}
                    </div>

                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all shadow-md hover:shadow-lg"
                      >
                        <Github size={16} />
                        View on GitHub
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}