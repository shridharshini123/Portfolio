"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const engagements = [
  {
    month: "Dec 2025",
    college: "Ramco Institution",
    program: "Cybersecurity Hackathon",
    location: "Rajapalayam",
  },
  {
    month: "Sep 2025",
    college: "Tamilnadu Faculty Development Program",
    program: "AI Tools Session",
    location: "Coimbatore",
  },
  {
    month: "Jul–Sep 2025",
    college: "HICAS",
    program: "Data Science Program",
    location: "Coimbatore",
  },
  {
    month: "Jul–Sep 2025",
    college: "HICAS",
    program: "AI / ML Program",
    location: "Coimbatore",
  },
  {
    month: "Aug 2025",
    college: "Tamilnadu Faculty Development Program",
    program: "AI Tools Session",
    location: "Coimbatore",
  },
  {
    month: "Jun 2024",
    college: "HICAS",
    program: "Cybersecurity Awareness",
    location: "Coimbatore",
  },
];

export function IndustryEngagementSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-40 px-6 overflow-hidden" id="lectures">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="relative max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Industry Engagement
          </h2>
        </div>

        {/* CENTER RAIL */}
        <div className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-[2px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-full bg-primary/60 origin-top rounded-full"
          />
        </div>

        {/* ITEMS */}
        <div className="space-y-32 relative">

          {engagements.map((item, index) => {
            const isLeft = index % 2 === 0;
            const year =
              item.month.split(" ")[1] || item.month.slice(-4);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start pr-16" : "justify-end pl-16"
                }`}
              >

                {/* GHOST YEAR WITH DARK MODE GLOW */}
                <div
                  className={`absolute select-none pointer-events-none ${
                    isLeft ? "right-0" : "left-0"
                  }`}
                >
                  {/* Dark mode glow backdrop */}
                  <div className="absolute inset-0 opacity-0 dark:opacity-100">
                    <div className="w-[220px] h-[220px] bg-primary/30 blur-3xl rounded-full" />
                  </div>

                  {/* Gradient Year Text */}
                  <div className="relative text-[120px] font-extrabold bg-gradient-to-b from-primary/40 to-primary/10 bg-clip-text text-transparent dark:from-primary/80 dark:to-primary/40 opacity-20 dark:opacity-30">
                    {year}
                  </div>
                </div>

                {/* SIDE ACCENT LIGHT */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  }}
                  className={`absolute w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl ${
                    isLeft ? "-right-32" : "-left-32"
                  }`}
                />

                {/* CARD */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-full max-w-md p-6 rounded-2xl bg-muted/60 backdrop-blur-xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-sm text-primary font-medium">
                    {item.month}
                  </div>

                  <h3 className="text-xl font-semibold mt-2">
                    {item.college}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {item.program}
                  </p>

                  <div className="text-xs text-muted-foreground mt-3">
                    {item.location}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
