import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Boxes,
  Briefcase,
  Code2,
  Gauge,
  Globe,
  Layers,
  LayoutDashboard,
  MessagesSquare,
  Monitor,
  Smartphone,
  Sparkles,
  Target,
  UserRound,
  Workflow,
} from "lucide-react";
import { Reveal, Section, SectionHeading, ease } from "./primitives";
import { TiltCard } from "./TiltCard";
import { About3D } from "./About3D";
import { WhyUsMetrics } from "./WhyUsMetrics";

/* =========================================================
   JOURNEY STRIP
========================================================= */

const journey = ["Idea", "Design", "Development", "Testing", "Deployment"];

export function JourneyStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 px-5 py-12 sm:px-8 sm:py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-indigo/[0.04]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs"
        >
          From Idea → Design → Development → Deployment
        </motion.p>

        <div className="relative mt-9 grid grid-cols-5 gap-1 sm:mt-10 sm:gap-3">
          {/* Base line */}
          <div className="absolute left-[10%] right-[10%] top-5 h-px bg-border" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.8,
              ease,
              delay: 0.15,
            }}
            className="absolute left-[10%] right-[10%] top-5 h-px origin-left bg-gradient-primary"
          />

          {journey.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.25 + i * 0.12,
                duration: 0.65,
                ease,
              }}
              className="relative flex flex-col items-center text-center"
            >
              <motion.span
                whileHover={{ y: -3, scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className="glass grid h-10 w-10 place-items-center rounded-full border border-border font-mono text-[10px] text-primary transition-colors duration-300 hover:border-primary/40 sm:h-11 sm:w-11 sm:text-xs"
              >
                0{i + 1}
              </motion.span>

              <span className="mt-3 text-[9px] font-medium text-muted-foreground sm:text-xs md:text-sm">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   ABOUT
========================================================= */

const stats = [
  { v: "02+", l: "Completed Projects" },
  { v: "100%", l: "Responsive Design" },
  { v: "Modern", l: "Technology Stack" },
  { v: "Client", l: "Focused Approach" },
];

export function About() {
  return (
    <Section id="about">
      {/* Main About Content */}
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        {/* Left: Heading */}
        <motion.div
          initial={{
            opacity: 0,
            x: -35,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow="About CMG Softtech"
            title={
              <>
                We Don't Just Build Websites.{" "}
                <span className="text-gradient">We Build Digital Products.</span>
              </>
            }
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:pb-1"
        >
          {/* Vertical accent */}
          <div className="absolute -left-4 top-1 hidden h-14 w-px bg-gradient-primary lg:block" />

          <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7 relative z-10">
            <p>
              CMG Softtech is a growing software development startup focused on creating modern,
              responsive, scalable, and user-friendly digital experiences.
            </p>

            <p>
              We combine clean engineering, thoughtful design, and business understanding to create
              products that are both visually impressive and practically useful.
            </p>
          </div>

          <About3D />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mt-14 sm:mt-16">
        {/* Animated top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-px origin-left bg-border"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.l}
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.65,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`group relative border-b border-border px-4 py-7 transition-colors duration-500 hover:bg-surface/40 sm:px-6 sm:py-8 lg:border-b-0 lg:px-7 ${
                i < 3 ? "lg:border-r" : ""
              }`}
            >
              {/* Small animated accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-4 right-4 top-0 h-px origin-left bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:left-6 sm:right-6 lg:left-7 lg:right-7"
              />

              {/* Number */}
              <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                <span className="text-gradient">{stat.v}</span>
              </div>

              {/* Label */}
              <div className="mt-2 max-w-[140px] text-xs leading-5 text-muted-foreground sm:text-sm">
                {stat.l}
              </div>

              {/* Hover dot */}
              <span className="absolute bottom-5 right-4 h-1.5 w-1.5 rounded-full bg-primary opacity-0 shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-opacity duration-500 group-hover:opacity-100 sm:right-6 lg:right-7" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    Icon: Globe,
    number: "01",
    t: "Web Development",
    d: "Modern, responsive websites built for performance, usability, and a strong digital presence.",
    tag: "Web Experience",
  },
  {
    Icon: Layers,
    number: "02",
    t: "Full Stack Development",
    d: "Complete web applications with frontend, backend, APIs, authentication, and database integration.",
    tag: "End-to-End",
  },
  {
    Icon: Briefcase,
    number: "03",
    t: "Business Websites",
    d: "Professional websites designed to build credibility and communicate your business clearly.",
    tag: "Business",
  },
  {
    Icon: UserRound,
    number: "04",
    t: "Portfolio & Personal Branding",
    d: "Premium websites for founders, professionals, athletes, creators, and entrepreneurs.",
    tag: "Brand Identity",
  },
  {
    Icon: LayoutDashboard,
    number: "05",
    t: "Admin Dashboards",
    d: "Clean and functional dashboards for managing business data, users, and applications.",
    tag: "Management",
  },
  {
    Icon: Boxes,
    number: "06",
    t: "Custom Web Applications",
    d: "Tailored digital solutions designed around specific business requirements and workflows.",
    tag: "Custom Build",
  },
];

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden bg-surface/30">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                What We <span className="text-gradient">Build</span>
              </>
            }
            sub="From business websites to custom web applications, we build digital solutions around real business needs."
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="hidden max-w-[230px] pb-1 text-right lg:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Digital solutions
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Designed with purpose.
              <br />
              Built to perform.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map(({ Icon, number, t, d, tag }, i) => (
            <TiltCard key={t}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.75,
                  delay: (i % 3) * 0.1,
                  ease,
                }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/80 p-6 transition-all duration-500 hover:border-primary/30 hover:bg-surface-2/80 hover:shadow-[0_18px_60px_rgba(139,92,246,0.08)] sm:p-7"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Subtle grid detail */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-28 w-28 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                  aria-hidden="true"
                />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-2 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow"
                    >
                      <Icon className="h-[18px] w-[18px] text-primary" />
                    </motion.div>

                    <span className="rounded-full border border-border/80 bg-surface-2/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover:border-primary/20 group-hover:text-primary">
                      {tag}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/40 transition-colors duration-500 group-hover:text-primary/70">
                    {number}
                  </span>
                </div>

                {/* Main content */}
                <div className="relative mt-8">
                  <h3
                    className="max-w-[270px] text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-foreground sm:text-[22px]"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {t}
                  </h3>

                  <p
                    className="mt-3 max-w-[360px] text-sm leading-6 text-muted-foreground"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {d}
                  </p>
                </div>

                {/* Bottom */}
                <div
                  className="relative mt-7 flex items-center justify-between border-t border-border/70 pt-4"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(139,92,246,0.9)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/60">
                      CMG Softtech
                    </span>
                  </div>

                  <motion.div
                    whileHover={{
                      x: 3,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </motion.div>
                </div>

                {/* Bottom animated line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-primary transition-all duration-700 group-hover:w-full"
                  aria-hidden="true"
                />

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
/* =========================================================
   TECHNOLOGY
========================================================= */

const tech = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
];

export function TechStack() {
  return (
    <Section id="tech">
      <SectionHeading
        center
        eyebrow="Technology"
        title={
          <>
            Built With <span className="text-gradient">Modern Technology</span>
          </>
        }
        sub="A modern stack chosen to build fast, maintainable, and scalable digital products."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {},
        }}
        className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:mt-14 sm:gap-3"
      >
        {tech.map((item, i) => (
          <motion.div
            key={item}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.94,
                filter: "blur(4px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -5,
              scale: 1.04,
              transition: {
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="glass group relative flex cursor-default items-center gap-2 overflow-hidden rounded-lg border border-border px-3.5 py-2.5 transition-all duration-500 hover:border-primary/30 hover:shadow-glow sm:px-4 sm:py-3"
          >
            {/* subtle hover glow */}
            <span className="pointer-events-none absolute -right-5 -top-5 h-12 w-12 rounded-full bg-primary/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <Code2 className="relative z-10 h-3.5 w-3.5 text-primary transition-transform duration-500 group-hover:rotate-12 sm:h-4 sm:w-4" />

            <span className="relative z-10 text-xs font-medium sm:text-sm">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

const steps = [
  ["Discover", "Understand the business, goals, audience, and requirements."],
  ["Plan", "Define features, architecture, technology, and project structure."],
  ["Design", "Create a clean, intuitive, and responsive user experience."],
  ["Develop", "Build the frontend, backend, APIs, database, and functionality."],
  ["Test", "Test responsiveness, functionality, performance, and usability."],
  ["Deploy", "Deploy the product and prepare it for real-world use."],
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 65%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="process" className="bg-surface/35">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                How We Turn Ideas <span className="text-gradient">Into Reality</span>
              </>
            }
            sub="A clear and collaborative process designed to keep every project moving in the right direction."
          />
        </div>

        {/* RIGHT TIMELINE */}
        <div ref={ref} className="relative pl-11 sm:pl-16">
          {/* Timeline background */}
          <div
            className="absolute bottom-2 left-[15px] top-2 w-px bg-border sm:left-[19px]"
            aria-hidden="true"
          />

          {/* Animated timeline */}
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-primary sm:left-[19px]"
            aria-hidden="true"
          />

          {/* Moving glow on timeline */}
          <motion.div
            style={{
              top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
            className="absolute left-[11px] h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(139,92,246,0.9)] sm:left-[15px]"
            aria-hidden="true"
          />

          {steps.map(([title, description], i) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                x: 35,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.75,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                x: 6,
                transition: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="group relative pb-11 sm:pb-12 last:pb-0"
            >
              {/* Step number */}
              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12 + 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.12,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="absolute -left-11 top-0 grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-background font-mono text-[10px] text-primary shadow-[0_0_20px_rgba(139,92,246,0.08)] transition-all duration-500 group-hover:border-primary/70 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] sm:-left-16 sm:h-10 sm:w-10 sm:text-[11px]"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>

              {/* Step content */}
              <div className="rounded-xl border border-transparent p-1 transition-all duration-500 group-hover:border-border/60 group-hover:bg-surface/30 sm:p-2">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                </div>

                <p className="mt-2 max-w-lg pl-[17px] text-sm leading-6 text-muted-foreground sm:text-base">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
/* =========================================================
   WHY US
========================================================= */

const reasons = [
  {
    Icon: Sparkles,
    number: "01",
    t: "Modern Approach",
    d: "We use current technologies and development practices to create digital products that feel modern, reliable, and ready for growth.",
  },
  {
    Icon: Workflow,
    number: "02",
    t: "Clean & Scalable Code",
    d: "We build maintainable solutions with a clear structure so your product can evolve as your business grows.",
  },
  {
    Icon: Smartphone,
    number: "03",
    t: "Responsive by Default",
    d: "Every experience is designed to work smoothly across desktop, tablet, and mobile devices.",
  },
  {
    Icon: Monitor,
    number: "04",
    t: "Design Meets Development",
    d: "We bring visual quality and technical performance together instead of treating them as separate priorities.",
  },
  {
    Icon: MessagesSquare,
    number: "05",
    t: "Transparent Communication",
    d: "We keep communication clear throughout the project so progress, decisions, and requirements stay aligned.",
  },
  {
    Icon: Target,
    number: "06",
    t: "Client-Focused Solutions",
    d: "We build around actual business requirements instead of forcing every project into a generic template.",
  },
];

export function WhyUs() {
  return (
    <Section id="why" className="relative overflow-hidden bg-surface/30">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary/8 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Why Us"
            title={
              <>
                Why Work With <span className="text-gradient">CMG Softtech?</span>
              </>
            }
            sub="We combine modern technology, thoughtful design, and practical development to create digital solutions that deliver real value."
          />

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="hidden items-center gap-3 pb-1 lg:flex"
          >
            <span className="h-px w-12 bg-border" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Our Principles
            </span>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {reasons.map(({ Icon, number, t, d }, i) => (
            <motion.div
              key={t}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease,
              }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.025)",
                transition: {
                  duration: 0.35,
                },
              }}
              className="group relative min-h-[245px] overflow-hidden bg-background p-6 transition-colors duration-500 sm:p-7 lg:min-h-[265px] lg:p-8"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Technical grid */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
                aria-hidden="true"
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between">
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-2 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow"
                >
                  <Icon className="h-[18px] w-[18px] text-primary" />
                </motion.div>

                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/35 transition-colors duration-500 group-hover:text-primary/70">
                  {number}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{t}</h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{d}</p>
              </div>

              {/* Bottom detail */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 pb-5 sm:px-7 lg:px-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(139,92,246,0.9)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground/40 transition-colors duration-500 group-hover:text-muted-foreground">
                    CMG Principle
                  </span>
                </div>

                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-primary transition-all duration-700 group-hover:w-full"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        <WhyUsMetrics />
      </div>
    </Section>
  );
} /* =========================================================
   PHILOSOPHY + FUTURE VISION
========================================================= */

export function Philosophy() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Outer container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-[#03050c]">
        {/* Technical grid */}
        <div
          className="grid-bg pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
        />

        {/* Global ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]"
          aria-hidden="true"
        />

        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}

        <div className="relative grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-primary/5 font-mono text-[10px] text-primary shadow-[0_0_20px_rgba(139,92,246,0.12)]">
                01
              </span>

              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-primary sm:text-[10px]">
                Philosophy
              </span>

              <span className="h-px w-10 bg-gradient-primary sm:w-16" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease,
              }}
              className="mt-7 max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.15rem]"
            >
              Your idea is the starting point.
              <span className="mt-1 block text-gradient">
                Our job is to turn it into something real.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease,
              }}
              className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              From the first discussion to deployment, we focus on understanding the requirement,
              solving the right problem, and delivering a polished digital product.
            </motion.p>

            {/* Small principles */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.38,
                ease,
              }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {["Thoughtful Planning", "Clean Development", "Better Experiences"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[10px] text-muted-foreground sm:text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden px-6 py-12 lg:min-h-0">
            {/* Background radial glow */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease,
              }}
              className="absolute h-64 w-64 rounded-full bg-primary/10 blur-[90px]"
              aria-hidden="true"
            />

            {/* Outer orbit */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="relative h-56 w-56 rounded-full border border-primary/30 sm:h-64 sm:w-64"
            >
              {/* Orbit ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-12px] rounded-full border border-primary/10 border-dashed"
              />

              {/* Orbit dot */}
              <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_rgba(168,85,247,0.95)]" />

              {/* Main glass object */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease,
                }}
                whileHover={{
                  scale: 1.04,
                  transition: {
                    duration: 0.35,
                  },
                }}
                className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-fuchsia-500/10 shadow-[0_0_50px_rgba(139,92,246,0.16)] backdrop-blur-xl sm:h-36 sm:w-36"
              >
                {/* Inner rings */}
                <div className="absolute inset-4 rounded-2xl border border-primary/15" />
                <div className="absolute inset-7 rounded-xl border border-primary/10" />

                {/* Code symbol */}
                <div className="relative flex items-center gap-1 font-mono text-3xl font-semibold text-primary">
                  <span className="text-fuchsia-400">&lt;</span>
                  <span className="text-white/90">/</span>
                  <span className="text-violet-400">&gt;</span>
                </div>
              </motion.div>

              {/* Floating dots */}
              <motion.span
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-5 top-8 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]"
              />

              <motion.span
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute bottom-8 right-7 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
              />
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            CENTER CONNECTION
        ===================================================== */}

        <div className="relative z-20">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />

          {/* Gradient line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="absolute left-0 right-0 top-1/2 h-px origin-center -translate-y-1/2 bg-gradient-primary opacity-70"
          />

          {/* Center node */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease,
            }}
            className="relative mx-auto grid h-11 w-11 place-items-center rounded-full border border-primary/50 bg-background shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          >
            <motion.div
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight className="h-4 w-4 rotate-45 text-primary" />
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            FUTURE VISION
        ===================================================== */}

        <div className="relative grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-primary/5 font-mono text-[10px] text-primary shadow-[0_0_20px_rgba(139,92,246,0.12)]">
                02
              </span>

              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-primary sm:text-[10px]">
                Future Vision
              </span>

              <span className="h-px w-10 bg-gradient-primary sm:w-16" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease,
              }}
              className="mt-7 max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.15rem]"
            >
              We're Just Getting
              <span className="mt-1 block text-gradient">Started.</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease,
              }}
              className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base"
            >
              <p>
                CMG Softtech is growing with every project, continuously learning, experimenting,
                and building better digital experiences.
              </p>

              <p>
                We aim to become a trusted technology partner for businesses, startups,
                organizations, and individuals looking to build meaningful digital products.
              </p>
            </motion.div>

            {/* Future points */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease,
              }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {["More Projects", "More Innovation", "Bigger Impact"].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[10px] text-muted-foreground sm:text-xs"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 0 ? "bg-fuchsia-400" : i === 1 ? "bg-violet-400" : "bg-primary"
                    } shadow-[0_0_8px_rgba(139,92,246,0.7)]`}
                  />

                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right future visual */}
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-6 py-12 lg:min-h-0">
            {/* Glow */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease,
              }}
              className="absolute h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]"
              aria-hidden="true"
            />

            {/* Main orbit */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="relative h-52 w-52 rounded-full border border-primary/20 sm:h-60 sm:w-60"
            >
              {/* Rotating orbit */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-14px] rounded-full border border-primary/10 border-dashed"
              />

              {/* Main future core */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease,
                }}
                className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-fuchsia-500/10 shadow-[0_0_55px_rgba(139,92,246,0.16)] backdrop-blur-xl sm:h-32 sm:w-32"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-background/70">
                  <ArrowUpRight className="h-7 w-7 text-gradient text-primary" />
                </div>
              </motion.div>

              {/* Orbit points */}
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.9)]" />

              <span className="absolute bottom-4 right-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />

              <span className="absolute bottom-12 left-0 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            </motion.div>
          </div>
        </div>

        {/* Bottom glow */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.3,
            delay: 0.2,
            ease,
          }}
          className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 origin-center bg-gradient-primary"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

/* =========================================================
   VISION
========================================================= */

/*
  Vision is already included inside Philosophy above.
  Keeping this component prevents duplicate rendering if
  index.tsx still contains <Vision />.
*/

export function Vision() {
  return null;
}
