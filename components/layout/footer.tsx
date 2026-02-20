import { personalInfo, socialLinks } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const phoneLink = socialLinks.find(
    (l) => l.name.toLowerCase().includes("phone")
  );

  const linkedinLink = socialLinks.find(
    (l) => l.name.toLowerCase().includes("linkedin")
  );

  const githubLink = socialLinks.find(
    (l) => l.name.toLowerCase().includes("github")
  );

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground">
              {personalInfo.name}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">
              Contact
            </h4>

            <div className="flex flex-col gap-4 text-sm">

              {phoneLink && (
                <a
                  href={phoneLink.url}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {phoneLink.url.replace("tel:", "")}
                </a>
              )}

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>

              {linkedinLink && (
                <a
                  href={linkedinLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}

            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">
              Let’s Connect
            </h4>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Open to AI, analytics, and backend-focused roles.
              If you're building systems that require real-world data thinking,
              let's talk.
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 rounded-full bg-primary px-6 py-2 text-xs font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
