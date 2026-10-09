"use client";

import { useRef, useState, FormEvent } from "react";
import { Send, Linkedin, Github, Mail, Download, CheckCircle, AlertCircle } from "lucide-react";
import { useScrollAnimation } from "@/components/providers/SmoothScrollProvider";
import { siteConfig } from "@/data/portfolio";

type FormState = "idle" | "submitting" | "success" | "error";

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

/** Validate contact form fields */
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

/**
 * Contact Section with validated form + social links.
 */
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  useScrollAnimation(sectionRef);
  useScrollAnimation(formRef, { delay: 0.2 });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("submitting");

    // Simulate form submission — replace with Formspree, Resend, or your API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="section-padding mx-auto max-w-4xl"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-cyan">
          Get In Touch
        </p>
        <h2 id="contact-heading" className="section-title">
          Let&apos;s Build Something
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Open to AI Product Manager, Data Science Lead, and senior analytics roles.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Social links sidebar */}
        <div className="flex flex-row flex-wrap justify-center gap-4 lg:col-span-2 lg:flex-col lg:justify-start">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-hover flex items-center gap-3 px-5 py-4 text-sm text-slate-300 transition-colors hover:text-neon-cyan"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-hover flex items-center gap-3 px-5 py-4 text-sm text-slate-300 transition-colors hover:text-neon-cyan"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="glass-panel-hover flex items-center gap-3 px-5 py-4 text-sm text-slate-300 transition-colors hover:text-neon-cyan"
          >
            <Mail size={18} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        {/* Contact form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="glass-panel space-y-5 p-6 lg:col-span-3"
          aria-label="Contact form"
        >
          {/* Name field */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              placeholder="you@company.com"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              placeholder="Tell me about the opportunity..."
            />
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button + status */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={16} aria-hidden="true" />
              {formState === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {formState === "success" && (
              <p className="flex items-center gap-1.5 text-sm text-emerald-400" role="status">
                <CheckCircle size={16} aria-hidden="true" />
                Message sent!
              </p>
            )}
            {formState === "error" && (
              <p className="flex items-center gap-1.5 text-sm text-red-400" role="alert">
                <AlertCircle size={16} aria-hidden="true" />
                Something went wrong. Try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
