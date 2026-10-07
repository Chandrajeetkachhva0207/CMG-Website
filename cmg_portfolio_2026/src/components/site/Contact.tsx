import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { CTAButton, Reveal, Section, SectionHeading, ease } from "./primitives";
import { Logo, navLinks } from "./Navbar";
import { Contact3DBackground } from "./Contact3DBackground";

/* =========================================================
   ANIMATION
========================================================= */

const motionEase = ease;

/* =========================================================
   CTA
========================================================= */

export function CTA() {
  return (
    <section className="px-5 sm:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/20 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.10]" aria-hidden="true" />

        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />

        {/* Ambient glow */}
        <div
          className="orb animate-drift -left-24 -top-24 h-72 w-72 bg-primary/20"
          aria-hidden="true"
        />

        <div
          className="orb animate-drift -bottom-24 -right-24 h-72 w-72 bg-indigo/20 [animation-delay:-8s]"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              ease: motionEase,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-primary" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Start Something Great
            </span>

            <span className="h-px w-8 bg-gradient-primary" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: motionEase,
            }}
            className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Have an Idea?
            <br />
            <span className="text-gradient">Let's Build It Together.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: motionEase,
            }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
          >
            Tell us what you're planning, and let's turn your idea into a modern digital experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.22,
              ease: motionEase,
            }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <CTAButton href="#contact">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </CTAButton>

            <CTAButton href="#contact" variant="ghost">
              Contact CMG Softtech
            </CTAButton>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

/*
  IMPORTANT:
  Put the client's real WhatsApp number here.

  Example:
  +91 98765 43210

  Write it like:
  919876543210

  Do NOT include:
  +91
  spaces
  brackets
  hyphens
*/

const WHATSAPP_NUMBER = "917058800319";

const field =
  "w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/45 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-background/80 focus:ring-2 focus:ring-primary/10";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
Hello CMG Softtech 👋

I would like to discuss a project.

━━━━━━━━━━━━━━━━━━
CLIENT DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company / Organization: ${company || "Not provided"}

Project Type:
${type || "Not specified"}

━━━━━━━━━━━━━━━━━━
PROJECT MESSAGE
━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━
Sent from CMG Softtech Website
━━━━━━━━━━━━━━━━━━
`.trim();

    /* =====================================================
       WHATSAPP URL
    ===================================================== */

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    /*
      Opens WhatsApp with the complete message already filled.
    */

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);

    form.reset();

    window.setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* 3D Background */}
      <Contact3DBackground />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-primary" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
                Let's Connect
              </span>

              <span className="h-px w-8 bg-gradient-primary" />
            </div>

            <SectionHeading
              center
              eyebrow="Contact"
              title={
                <>
                  Let's Build Something <span className="text-gradient">Great.</span>
                </>
              }
              sub="Have an idea, a business requirement, or a project in mind? Tell us about it and let's start the conversation."
            />
          </div>
        </Reveal>

        {/* =====================================================
            CONTACT AREA
        ===================================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          {/* ===================================================
              LEFT INFORMATION PANEL
          =================================================== */}

          <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 lg:p-9">
            {/* Grid */}
            <div
              className="grid-bg pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
            />

            {/* Glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative">
              {/* Icon */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.6,
                  ease: motionEase,
                }}
                className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_25px_rgba(139,92,246,0.1)]"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
                Start a conversation.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                Tell us what you are planning. We'll understand your requirements and discuss the
                right digital solution for you.
              </p>

              {/* WhatsApp Card */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.3,
                  ease: motionEase,
                }}
                className="mt-8 rounded-xl border border-border bg-background/50 p-4 transition-all duration-500 hover:border-primary/30 hover:bg-background/70"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-medium">Direct WhatsApp Inquiry</p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Submit the form and your project details will be prepared automatically in
                      WhatsApp.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Process */}
              <div className="mt-8 space-y-4">
                {[
                  "Share your project requirements",
                  "We understand your goals",
                  "We discuss the right solution",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: motionEase,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/30 font-mono text-[9px] text-primary">
                      0{i + 1}
                    </span>

                    <span className="text-xs text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Follow & Connect With Us
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/cmgsofttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-xl border border-border bg-background/50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 hover:shadow-[0_0_20px_rgba(228,64,95,0.2)]"
                  >
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E4405F]/15 text-[#E4405F] transition-transform duration-300 group-hover:scale-110">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-foreground group-hover:text-[#E4405F]">
                        Instagram
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">@cmgsofttech</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/cmgsofttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-xl border border-border bg-background/50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]"
                  >
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] transition-transform duration-300 group-hover:scale-110">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-foreground group-hover:text-[#0A66C2]">
                        LinkedIn
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">CMG SoftTech</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-9 h-px w-full bg-gradient-primary opacity-25" />

              {/* Bottom note */}
              <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Built for meaningful digital products
              </div>
            </div>
          </Reveal>

          {/* ===================================================
              FORM
          =================================================== */}

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface/45 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
            >
              {/* Form glow */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-primary/10 blur-[80px]"
                aria-hidden="true"
              />

              <div className="relative">
                {/* Form heading */}
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Project Inquiry</p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Tell us a little about your project.
                    </p>
                  </div>

                  <div className="hidden h-9 w-9 place-items-center rounded-lg border border-border bg-background/60 sm:grid">
                    <Send className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Fields */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <label className="space-y-2 text-sm">
                    <span className="text-muted-foreground">
                      Name <span className="text-primary">*</span>
                    </span>

                    <input
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className={field}
                    />
                  </label>

                  {/* Email */}
                  <label className="space-y-2 text-sm">
                    <span className="text-muted-foreground">
                      Email <span className="text-primary">*</span>
                    </span>

                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={150}
                      placeholder="you@example.com"
                      className={field}
                    />
                  </label>

                  {/* Phone */}
                  <label className="space-y-2 text-sm">
                    <span className="text-muted-foreground">Phone</span>

                    <input
                      name="phone"
                      type="tel"
                      maxLength={20}
                      placeholder="+91 98765 43210"
                      className={field}
                    />
                  </label>

                  {/* Company */}
                  <label className="space-y-2 text-sm">
                    <span className="text-muted-foreground">Company / Organization</span>

                    <input
                      name="company"
                      type="text"
                      maxLength={150}
                      placeholder="Company name"
                      className={field}
                    />
                  </label>

                  {/* Project Type */}
                  <label className="space-y-2 text-sm sm:col-span-2">
                    <span className="text-muted-foreground">Project Type</span>

                    <select name="type" defaultValue="" className={field}>
                      <option value="" disabled>
                        Select a project type
                      </option>

                      {[
                        "Business Website",
                        "Portfolio / Personal Branding",
                        "Full Stack Web App",
                        "Admin Dashboard",
                        "Custom Web Application",
                        "Other",
                      ].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Message */}
                  <label className="space-y-2 text-sm sm:col-span-2">
                    <span className="text-muted-foreground">
                      Project Message <span className="text-primary">*</span>
                    </span>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      maxLength={2000}
                      placeholder="Tell us about your idea, requirements, timeline, or anything else we should know..."
                      className={`${field} resize-none`}
                    />
                  </label>
                </div>

                {/* Submit */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_10px_35px_rgba(139,92,246,0.15)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {sent && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: motionEase,
                      }}
                      className="mt-4 flex items-center justify-center gap-2 text-xs text-primary"
                      role="status"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Opening WhatsApp with your inquiry...
                    </motion.div>
                  )}
                </div>

                {/* Privacy */}
                <p className="mt-4 text-center text-[10px] leading-5 text-muted-foreground/60">
                  Your information is used only to discuss your project requirements.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

const socials = [
  {
    l: "LinkedIn",
    href: "https://www.linkedin.com/company/cmgsofttech",
    icon: Linkedin,
  },
  {
    l: "Instagram",
    href: "https://www.instagram.com/cmgsofttech",
    icon: Instagram,
  },
  {
    l: "GitHub",
    href: "https://github.com/cmgsofttech",
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/60 px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-primary opacity-50"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <Reveal>
            <div>
              <Logo />

              <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                Building modern digital experiences for businesses, organizations, and ambitious
                ideas.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                Digital Products & Software Solutions
              </div>
            </div>
          </Reveal>

          {/* Navigate */}
          <Reveal delay={0.08}>
            <nav aria-label="Footer">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Navigate
              </h3>

              <ul className="mt-5 space-y-3 text-sm">
                {navLinks
                  .filter((l) => l.id !== "why")
                  .map((l) => (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        className="group inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />

                        {l.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </Reveal>

          {/* Connect */}
          <Reveal delay={0.16}>
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </h3>

              <ul className="mt-5 space-y-3 text-sm">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.l}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-muted-foreground transition-all duration-300 hover:text-foreground"
                      >
                        <span className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                          <Icon className="h-3.5 w-3.5" />
                        </span>

                        <span className="font-medium">{social.l}</span>

                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 text-primary" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Conversation CTA */}
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Start a Conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 text-[11px] text-muted-foreground sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 CMG Softtech. All rights reserved.
          </span>

          <span className="text-muted-foreground/70">
            Designed & Developed by CMG Softtech
          </span>
        </div> */}
      </div>
    </footer>
  );
}
