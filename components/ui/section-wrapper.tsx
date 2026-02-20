"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "section-padding relative",
        isInView ? "animate-fade-in-up" : "opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center" : "text-left")}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
