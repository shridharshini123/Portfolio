"use client";

import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Code2, Sparkle, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";


export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [years, setYears] = useState(0);
  const [particles, setParticles] = useState<
    { left: string; top: string; duration: string }[]
  >([]);

  useEffect(() => {
    const end = 3;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setYears(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: 8 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
    }));

    setParticles(generated);
  }, []);

  return (
    <section 
      id="home"
    className="relative min-h-screen flex items-center overflow-hidden bg-background transition-colors duration-500">

      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full blur-3xl animate-pulse-slower" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h60v60H0z%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%220.5%22/%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* LEFT SIDE - Enhanced */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">

            {/* Animated badge */}
            {/* <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm group hover:border-primary/40 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>*/}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                {personalInfo.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-muted-foreground flex items-center gap-2">
                {personalInfo.title}
                <Code2 className="h-8 w-8 text-primary/50 animate-bounce-slow" />
              </span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Enhanced CTA */}
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => handleScroll("#projects")}
                className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                View Projects
              </button>
              
              <button
                onClick={() => handleScroll("#contact")}
                className="group flex items-center gap-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm px-6 py-3 text-foreground font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1"
              >
                Contact Me
                <Zap className="h-4 w-4 group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - COMPLETELY REDESIGNED */}
         <div className="flex lg:col-span-5 items-center justify-center relative mt-12 lg:mt-0">
           <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              {/* Main Orbital System */}
              
              {/* Outer Ring with glowing particles */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 animate-rotateRing">
                {/* Floating particles on ring */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translateX(200px) rotate(-${i * 60}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Middle Ring - Colorful */}
              <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-primary/30 animate-orbit-slow" />

              {/* Orbiting Tech Icons */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-ping-slow" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 animate-orbit-reverse">
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md animate-ping-slow" />
                    <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Sparkles */}
              <div className="absolute inset-0 animate-orbit-slower">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${i * 120}deg) translateX(150px)`,
                    }}
                  >
                    <Sparkle className="h-4 w-4 text-primary/60 animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Inner Glow Rings */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/40 animate-pulse-slow" />
              <div className="absolute w-[150px] h-[150px] rounded-full border border-purple-500/40 animate-pulse-slower" />

              {/* Core Experience Card with 3D effect */}
              <div className="relative z-10 transform-gpu perspective-1000">
                <div className="relative rounded-2xl p-8 text-center bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 rotate-y-12 hover:rotate-y-0">
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating particles around card */}
                  <div className="absolute -inset-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full animate-ping"
                        style={{
                          top: `${i * 25}%`,
                          left: i % 2 === 0 ? '-10px' : 'auto',
                          right: i % 2 !== 0 ? '-10px' : 'auto',
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <div className="text-7xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      {years}+
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                      Years of Experience
                    </div>
                    
                    {/* Decorative line */}
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    
                    {/* Mini stats */}
                    <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
                      <span>4+ Projects</span>
                      <span>•</span>
                      <span>5+ Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating particles around the whole system */}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes orbit-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes orbit-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }

        @keyframes pulse-slow {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes pulse-slower {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ping-slow {
          75%,100% { transform: scale(2); opacity: 0; }
        }

        @keyframes float-random {
          0%,100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 15px); }
          75% { transform: translate(-15px, -5px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-rotateRing {
          animation: rotateRing 20s linear infinite;
        }

        .animate-orbit {
          animation: orbit 15s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 18s linear infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 25s linear infinite;
        }

        .animate-orbit-slower {
          animation: orbit-slower 30s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
          transition: transform 0.5s ease;
        }

        .hover\\:rotate-y-0:hover {
          transform: rotateY(0deg);
        }
      `}</style>

    </section>
  );
}
