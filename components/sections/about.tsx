"use client";

import { personalInfo } from "@/data/portfolio";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Quote } from "lucide-react";
import { motion } from "framer-motion"
import { MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="
      relative overflow-hidden py-32 px-6
      bg-white
      dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Light Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-violet-100 opacity-70 dark:opacity-0" />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-violet-900/10 via-transparent to-violet-800/10" />

        {/* Floating Squares */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`square-${i}`}
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute w-16 h-16 rounded-lg
            bg-white/70 dark:bg-violet-900/30
            backdrop-blur-md
            border border-violet-200 dark:border-violet-700
            shadow-md
            opacity-60 dark:opacity-40
            "
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}

        {/* Floating Circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            animate={{ x: [0, 20, 0] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute w-24 h-24 rounded-full
            bg-violet-100 dark:bg-violet-800/30
            border border-violet-200 dark:border-violet-700
            opacity-50 dark:opacity-40
            "
            style={{
              bottom: `${15 + i * 12}%`,
              right: `${10 + i * 15}%`,
            }}
          />
        ))}

        {/* Vertical Data Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            animate={{ y: [0, 40, 0] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute w-[1px] h-40
            bg-violet-300 dark:bg-violet-600
            opacity-30 dark:opacity-40
            "
            style={{
              top: `${25 + i * 15}%`,
              left: `${60 + i * 5}%`,
            }}
          />
        ))}

        {/* Network Structure */}
        <motion.svg
          viewBox="0 0 900 400"
          className="absolute top-24 right-10 w-[600px] opacity-25 dark:opacity-40"
        >
          <circle cx="100" cy="180" r="4" fill="#8b5cf6" />
          <circle cx="300" cy="80" r="4" fill="#8b5cf6" />
          <circle cx="520" cy="220" r="4" fill="#8b5cf6" />
          <circle cx="750" cy="120" r="4" fill="#8b5cf6" />

          <line x1="100" y1="180" x2="300" y2="80" stroke="#8b5cf6" strokeWidth="1" />
          <line x1="300" y1="80" x2="520" y2="220" stroke="#8b5cf6" strokeWidth="1" />
          <line x1="520" y1="220" x2="750" y2="120" stroke="#8b5cf6" strokeWidth="1" />
        </motion.svg>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto max-w-6xl relative z-10">

        {/* HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-300 font-medium md:justify-end">
            <MapPin size={16} />
            {personalInfo.location}
          </div>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed"
          >
            <p>
              I’m{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {personalInfo.name}
              </span>
              , a{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                Data Analyst
              </span>{" "}
              focused on applied analytics and AI-driven systems that move from
              research concepts into structured production environments.
            </p>

            <p>
              My work centers around building{" "}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                production-ready data pipelines and scalable ML workflows
              </span>{" "}
              that prioritize reliability, clarity, and maintainability.
            </p>

            <p>
              I am progressing toward{" "}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                Machine Learning and MLOps roles
              </span>
              , strengthening deployment practices and system-level thinking.
            </p>
          </motion.div>

          {/* RIGHT PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="
              relative w-72 h-96 rounded-3xl
              bg-white/80 dark:bg-[#1c1c2b]/80
              backdrop-blur-xl
              shadow-2xl
              border border-violet-200 dark:border-violet-700
              flex items-center justify-center
              "
            >
              <span className="text-6xl font-bold bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* TABLE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-28">

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
            rounded-2xl
            bg-white/80 dark:bg-[#1c1c2b]/80
            backdrop-blur-xl
            p-8
            shadow-xl
            border border-violet-200 dark:border-violet-700
            cursor-pointer
            "
          >
            <p className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
              {personalInfo.about.workStyle.heading}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {personalInfo.about.workStyle.content}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
            rounded-2xl
            bg-white/80 dark:bg-[#1c1c2b]/80
            backdrop-blur-xl
            p-8
            shadow-xl
            border border-violet-200 dark:border-violet-700
            cursor-pointer
            "
          >
            <p className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
              {personalInfo.about.constants.heading}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {personalInfo.about.constants.content}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}