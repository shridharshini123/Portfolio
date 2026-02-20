import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { AboutSection } from "@/components/sections/about"
import { AchievementsSection } from "@/components/sections/achievements";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { IndustryEngagementSection } from "@/components/sections/lectures";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <EducationSection />
        <IndustryEngagementSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
