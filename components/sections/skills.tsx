"use client";

import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/portfolio";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { useInView } from "@/hooks/use-in-view";
import {
  Palette,
  Code,
  Server,
  Wrench,
  Database,
  Brain,
  BarChart3,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  code: Code,
  server: Server,
  wrench: Wrench,
};
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
      relative overflow-hidden py-32 px-6
      bg-gradient-to-br from-violet-50 via-white to-violet-100
      dark:bg-gradient-to-br dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      {/* ================= BACKGROUND ICON SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Glow blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-violet-200 dark:bg-violet-700 rounded-full blur-3xl opacity-30 dark:opacity-40" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-300 dark:bg-violet-600 rounded-full blur-3xl opacity-20 dark:opacity-35" />

        {/* Floating icons */}
        {[
          { Icon: Code, top: "8%", left: "6%", size: 120, opacity: 0.18 },
          { Icon: Database, top: "22%", right: "8%", size: 110, opacity: 0.2 },
          { Icon: Brain, bottom: "18%", left: "12%", size: 130, opacity: 0.22 },
          { Icon: BarChart3, top: "50%", right: "20%", size: 115, opacity: 0.18 },
          { Icon: Server, bottom: "28%", right: "10%", size: 125, opacity: 0.2 },
          { Icon: Cpu, top: "68%", left: "35%", size: 100, opacity: 0.18 },
        ].map(({ Icon, size, opacity, ...pos }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 16 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-violet-400 dark:text-violet-500 drop-shadow-lg"
            style={{ ...pos, opacity }}
          >
            <Icon size={size} strokeWidth={1.3} />
          </motion.div>
        ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
            Focused on data analysis and AI development, with strong programming
            foundations and hands-on experience across analytics, ML, and visualization.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <SkillCard
            title="Programming Languages"
            items={["Python", "SQL", "HTML", "CSS", "JavaScript", "R"]}
          />

          <SkillCard
            title="Data Analysis"
            items={[
              "Machine Learning",
              "NumPy",
              "Pandas",
              "NLTK",
              "SpaCy",
              "Scikit-learn",
            ]}
          />

          <SkillCard
            title="Data Visualization"
            items={[
              "Power BI",
              "Tableau",
              "Matplotlib",
              "Looker",
              "Seaborn",
            ]}
          />

          <SkillCard
            title="AI/ML & Frameworks"
            items={["KNIME", "Orange", "Flask", "FastAPI"]}
          />

        </div>
      </div>
    </section>
  );
}

/* ================= SKILL CARD ================= */

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="
      rounded-2xl p-8 flex flex-wrap gap-4
      bg-white/80 dark:bg-[#1c1c2b]/80
      backdrop-blur-xl
      border border-violet-200 dark:border-violet-700
      shadow-lg
      transition-all duration-300
      hover:-translate-y-2
      "
    >
      <h3 className="w-full text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      {items.map((s) => (
        <span
          key={s}
          className="
          inline-flex items-center justify-center
          px-6 py-2
          text-sm font-medium
          rounded-full
          whitespace-nowrap
          bg-violet-100 dark:bg-violet-900/30
          border border-violet-400
          text-violet-600 dark:text-violet-300
          transition-all duration-200
          hover:bg-violet-200 dark:hover:bg-violet-800/50
          hover:scale-105
          "
        >
          {s}
        </span>
      ))}
    </div>
  );
}