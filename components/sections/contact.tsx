"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Dribbble, CheckCircle2, Loader2 } from "lucide-react";

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 4000);

    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to send message.");
    }

    setIsSubmitting(false);
  };


  return (
    <section
      id="contact"
      className="
      relative overflow-hidden py-32 px-6
      bg-gradient-to-br from-violet-50 via-white to-violet-100
      dark:from-[#0f0f1a] dark:via-[#121220] dark:to-[#1a1a2e]
      "
    >
      {/* Background glow */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-violet-300 dark:bg-violet-600 rounded-full blur-3xl opacity-20 dark:opacity-30" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-200 dark:bg-violet-700 rounded-full blur-3xl opacity-20 dark:opacity-30" />

      <div className="mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – PERSONAL MESSAGE */}
        <div className="space-y-8">

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Build{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Something Meaningful
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I work at the intersection of data, engineering, and applied AI.
            If you're solving real problems and care about clarity, reliability,
            and production-ready systems — we’ll probably get along.
          </p>

          {/* Personal Quote Card */}
          <div className="
            relative rounded-3xl
            bg-white/70 dark:bg-[#1c1c2b]/80
            backdrop-blur-xl
            border border-violet-200 dark:border-violet-700
            p-8 shadow-xl
          ">
            <p className="text-lg italic text-gray-800 dark:text-gray-200 leading-relaxed">
              “I don’t just build models. I build systems that work in the real world —
              explainable, reliable, and engineered for impact.”
            </p>

            <div className="mt-6 text-sm text-violet-600 dark:text-violet-400 font-medium">
              — Shri Dharshini Jai Shankar
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail className="text-violet-600 dark:text-violet-400" size={18} />
              shridharshininair@gmail.com
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="text-violet-600 dark:text-violet-400" size={18} />
              Coimbatore, India
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="
            rounded-3xl
            bg-white/80 dark:bg-[#1c1c2b]/80
            backdrop-blur-xl
            border border-violet-200 dark:border-violet-700
            p-10 shadow-2xl
          "
          >
            {isSubmitted && (
              <div className="mb-6 flex items-center gap-2 text-violet-600 dark:text-violet-400 text-sm">
                <CheckCircle2 size={18} />
                Message sent successfully.
              </div>
            )}

            <div className="space-y-6">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="
                w-full rounded-xl
                bg-transparent
                border border-violet-200 dark:border-violet-600
                px-4 py-3 text-sm
                text-gray-800 dark:text-white
                focus:ring-2 focus:ring-violet-400
                outline-none
                "
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="
                w-full rounded-xl
                bg-transparent
                border border-violet-200 dark:border-violet-600
                px-4 py-3 text-sm
                text-gray-800 dark:text-white
                focus:ring-2 focus:ring-violet-400
                outline-none
                "
              />

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your idea..."
                required
                className="
                w-full rounded-xl
                bg-transparent
                border border-violet-200 dark:border-violet-600
                px-4 py-3 text-sm
                text-gray-800 dark:text-white
                focus:ring-2 focus:ring-violet-400
                outline-none resize-none
                "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full rounded-xl
                bg-gradient-to-r from-violet-600 to-violet-400
                text-white py-3 font-semibold
                hover:shadow-lg hover:shadow-violet-500/30
                transition
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </div>
          </form>
        </div>

      </div>
    </section>
  );
}