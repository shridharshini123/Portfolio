"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/portfolio";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { useInView } from "@/hooks/use-in-view";
import { Briefcase, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Brain,
  Server,
  Code,
  Activity,
} from "lucide-react";

const experienceIcons = [
  Database,
  BarChart3,
  Brain,
  Server,
  Code,
  Activity,
];

export function ExperienceSection() {
  const exp = experiences[0];

  return (
    <section
      id="experience"
      className="
      relative overflow-hidden py-32 px-6
      bg-gradient-to-br from-violet-50 via-white to-violet-100
      dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      {/* ================= ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Glow Blobs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-violet-200 dark:bg-violet-700 rounded-full blur-3xl opacity-30 dark:opacity-40" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-300 dark:bg-violet-600 rounded-full blur-3xl opacity-20 dark:opacity-35" />

        {/* Floating Icons */}
        {[
          { Icon: Database, top: "15%", left: "8%" },
          { Icon: Brain, top: "40%", right: "12%" },
          { Icon: Server, bottom: "25%", left: "15%" },
          { Icon: Activity, top: "70%", right: "20%" },
        ].map(({ Icon, ...pos }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-violet-400 dark:text-violet-500 opacity-20 dark:opacity-30 drop-shadow-lg"
            style={pos}
          >
            <Icon size={120} strokeWidth={1.2} />
          </motion.div>
        ))}

        {/* Moving Data Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: ["-10%", "110%"] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[2px] bg-violet-300 dark:bg-violet-500 opacity-20 dark:opacity-30"
            style={{
              top: `${25 + i * 12}%`,
              width: "200px",
            }}
          />
        ))}

        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-24 left-1/3 w-40 h-40 rounded-full border border-violet-300 dark:border-violet-500 opacity-20 dark:opacity-30"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto max-w-4xl relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          relative rounded-3xl p-10
          bg-white/80 dark:bg-[#1c1c2b]/80
          backdrop-blur-xl
          border border-violet-200 dark:border-violet-700
          shadow-2xl
          "
        >
          {/* Date Badge */}
          <div className="
            inline-flex items-center rounded-full
            bg-violet-100 dark:bg-violet-900/40
            px-4 py-1 text-xs font-medium
            text-violet-600 dark:text-violet-300
            mb-6
          ">
            {exp.startDate} – {exp.endDate}
          </div>

          {/* Role */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            {exp.role}
          </h3>

          {/* Company + Location */}
          <div className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              {exp.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm text-center">
            {exp.description}
          </p>

          {/* Highlights */}
          {exp.highlights?.length > 0 && (
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {exp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="
                  rounded-2xl p-4 text-sm shadow-sm
                  bg-violet-50 dark:bg-violet-900/30
                  border border-violet-200 dark:border-violet-700
                  text-gray-700 dark:text-gray-300
                  "
                >
                  {h}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}