"use client";

import { education } from "@/data/portfolio";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { GraduationCap, Award, Calendar } from "lucide-react";
import {
  BookOpen,
  Atom,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section
      id="education"
      className="
      relative overflow-hidden py-32 px-6
      bg-gradient-to-br from-violet-50 via-white to-violet-100
      dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      {/* ================= BACKGROUND ICON SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Soft Gradient Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-200 dark:bg-violet-700 rounded-full blur-3xl opacity-25 dark:opacity-40" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-300 dark:bg-violet-600 rounded-full blur-3xl opacity-20 dark:opacity-35" />

        {/* Floating Academic Icons */}
        {[
          { Icon: GraduationCap, top: "15%", left: "8%" },
          { Icon: BookOpen, top: "40%", right: "12%" },
          { Icon: Atom, bottom: "20%", left: "18%" },
          { Icon: Lightbulb, top: "65%", right: "25%" },
          { Icon: Award, bottom: "30%", right: "8%" },
        ].map(({ Icon, ...pos }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 14 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-violet-400 dark:text-violet-500 opacity-15 dark:opacity-25"
            style={pos}
          >
            <Icon size={110} strokeWidth={1.2} />
          </motion.div>
        ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto max-w-4xl relative z-10">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic foundations that support my growth in analytics, AI, and engineering.
          </p>
        </div>

        {/* Vertical Knowledge Line */}
        <div className="relative">

          <div className="
            absolute left-6 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-violet-400 via-violet-200 to-transparent
            dark:from-violet-500 dark:via-violet-700
          " />

          <div className="flex flex-col gap-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >

                {/* Node Icon */}
                <div className="
                  absolute left-0 top-2
                  flex items-center justify-center
                  w-12 h-12 rounded-2xl
                  bg-white dark:bg-[#1c1c2b]
                  border border-violet-200 dark:border-violet-700
                  shadow-lg
                ">
                  <GraduationCap
                    className="text-violet-600 dark:text-violet-400"
                    size={22}
                  />
                </div>

                {/* Education Card */}
                <div className="
                  group relative rounded-3xl
                  bg-white/80 dark:bg-[#1c1c2b]/80
                  backdrop-blur-xl
                  border border-violet-200 dark:border-violet-700
                  shadow-xl dark:shadow-violet-900/30
                  p-8
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-violet-200/40 dark:hover:shadow-violet-700/40
                ">

                  {/* Date */}
                  <div className="
                    inline-flex items-center rounded-full
                    bg-violet-100 dark:bg-violet-900/40
                    px-3 py-1 text-xs font-medium
                    text-violet-600 dark:text-violet-300
                    mb-4
                  ">
                    <Calendar className="h-3 w-3 mr-1" />
                    {edu.startDate} – {edu.endDate}
                  </div>

                  {/* Degree */}
                  <h3 className="
                    text-xl font-bold
                    text-gray-900 dark:text-white
                    group-hover:text-violet-600 dark:group-hover:text-violet-400
                    transition-colors
                  ">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {edu.institution} — {edu.location}
                  </p>

                  {/* Description */}
                  {edu.description && (
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* Certification */}
                  {edu.certification && (
                    <div className="
                      mt-4 inline-flex items-center gap-1.5
                      rounded-full
                      border border-violet-300 dark:border-violet-600
                      bg-violet-50 dark:bg-violet-900/40
                      px-3 py-1 text-xs font-medium
                      text-violet-600 dark:text-violet-300
                    ">
                      <Award className="h-3 w-3" />
                      {edu.certification}
                    </div>
                  )}

                  {/* Hover Glow */}
                  <div className="
                    absolute inset-0 rounded-3xl
                    bg-gradient-to-r from-violet-400 to-violet-300
                    opacity-0 group-hover:opacity-10
                    blur-2xl transition-opacity duration-500
                    -z-10
                  " />
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}