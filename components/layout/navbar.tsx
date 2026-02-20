"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const sections = navItems.map((item) =>
      item.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">

        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="gradient-text">j</span>
          <span>.</span>
          <span className="text-muted-foreground text-sm font-normal ml-1 hidden sm:inline">
            Shri
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* RESUME BUTTON */}
          <a
            href="/resume/SHRI-DHARSHINI-J_resume.pdf"
            download="/resume/SHRI-DHARSHINI-J_resume.pdf"
            className="hidden md:inline-flex group items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border border-emerald-400/70 bg-card text-emerald-700 shadow-[0_0_18px_rgba(16,185,129,0.22)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-300 dark:text-emerald-200 dark:border-emerald-400/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </a>

          {/* THEME TOGGLE */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:bg-card hover:border-primary/30 hover:shadow-sm"
              aria-label="Toggle theme"
            >
              <Sun
                className={cn(
                  "h-4 w-4 absolute transition-all duration-300",
                  resolvedTheme === "dark"
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />
              <Moon
                className={cn(
                  "h-4 w-4 absolute transition-all duration-300",
                  resolvedTheme === "dark"
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm md:hidden"
          >
            <span className="relative h-4 w-4">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass mx-4 mb-4 rounded-xl p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </button>
          ))}

          {/* MOBILE RESUME */}
          <a
            href="/resume/SHRI-DHARSHINI-J_resume.pdf"
            download="/resume/SHRI-DHARSHINI-J_resume.pdf"
            className="block w-full text-center rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
