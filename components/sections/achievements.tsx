"use client";

import { Trophy, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-40 px-6 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
            Elite Recognition
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Not participation. Performance.
          </p>
        </motion.div>

        {/* MAIN SPOTLIGHT LAYOUT */}
        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* LEFT — MASSIVE YEAR */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[120px] md:text-[160px] font-extrabold leading-none bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(var(--primary)) 20%, transparent 80%)",
              }}
            >
              2025
            </motion.h3>

            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 group"
          >

            {/* Floating Trophy */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-xl"
            >
              <Trophy size={28} />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Elite Performer
            </h3>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-primary" />
                Cybervault Innovation and Technologies Pte Ltd
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                Recognized in 2025
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Awarded for exceptional ownership across AI systems, analytics,
              and backend architecture. Delivered production-grade solutions,
              internal enablement frameworks, and measurable business impact
              across 1 year and 7 months of execution.
            </p>

            {/* Interactive Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.6 }}
              className="h-[3px] bg-primary"
            />
          </motion.div>
        </div>
      </div>

      {/* Background Accent Shape */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
