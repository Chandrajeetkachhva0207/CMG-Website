import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import gurukul from "@/assets/project-gurukul.jpg";
import founder from "@/assets/project-founder.jpg";

import { Reveal, Section, SectionHeading } from "./primitives";
import { TiltCard } from "./TiltCard";

/* =========================================================
   PROJECT DATA
   ========================================================= */

export const projects = [
  {
    number: "01",
    title: "Maa Narmada Adhyatmik Warkari Gurukul",
    shortTitle: "Maa Narmada Gurukul",
    category: "Institutional Website",
    description:
      "A bilingual digital platform designed to present the Gurukul's journey, activities, values, programs, reports, and contact information.",
    tech: ["React", "TypeScript", "TanStack Router"],
    image: gurukul,
    url: "#",
  },
  {
    number: "02",
    title: "Pradip Divansing Jadhav",
    shortTitle: "Pradip Jadhav",
    category: "Founder Portfolio",
    description:
      "A premium personal branding website showcasing an entrepreneur, international athlete, mentor, achievements, companies, and vision.",
    tech: ["React", "TanStack Router", "Motion"],
    image: founder,
    url: "#",
  },
];

/* =========================================================
   PROJECT CARD
   ========================================================= */

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target={project.url !== "#" ? "_blank" : undefined}
      rel={project.url !== "#" ? "noreferrer" : undefined}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-2xl
        border
        border-border/70
        bg-surface/70
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-glow
      "
    >
      <TiltCard>
        {/* ===================================================
            IMAGE
            =================================================== */}

        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              width={1200}
              height={675}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />
          </div>

          {/* Image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-background/80
              via-background/10
              to-transparent
              opacity-70
            "
          />

          {/* Project number */}
          <div
            className="
              absolute
              left-4
              top-4
              flex
              h-9
              min-w-9
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-black/40
              px-2.5
              font-mono
              text-[10px]
              font-semibold
              tracking-[0.15em]
              text-white/80
              backdrop-blur-md
            "
          >
            {project.number}
          </div>

          {/* Category */}
          <div
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              border
              border-white/10
              bg-black/40
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/80
              backdrop-blur-md
            "
          >
            {project.category}
          </div>

          {/* Hover icon */}
          <div
            className="
              absolute
              right-4
              top-4
              grid
              h-9
              w-9
              place-items-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-white/70
              opacity-0
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:translate-x-0
              group-hover:opacity-100
            "
            style={{ transform: "translateZ(30px)" }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* ===================================================
            CONTENT
            =================================================== */}

        <div className="p-5 sm:p-6" style={{ transform: "translateZ(20px)" }}>
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3
                className="
                  font-display
                  text-lg
                  font-semibold
                  leading-tight
                  tracking-[-0.025em]
                  text-foreground
                  transition-colors
                  duration-300
                  group-hover:text-primary
                  sm:text-xl
                "
              >
                {project.shortTitle}
              </h3>

              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-primary/80">
                {project.category}
              </p>
            </div>

            <span
              className="
                shrink-0
                text-xs
                font-mono
                text-muted-foreground/40
              "
            >
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xl
              text-xs
              leading-6
              text-muted-foreground
              sm:text-sm
              sm:leading-6
            "
          >
            {project.description}
          </p>

          {/* Bottom */}
          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              border-t
              border-border/50
              pt-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
            style={{ transform: "translateZ(10px)" }}
          >
            {/* Tech */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-md
                    border
                    border-border/70
                    bg-white/[0.02]
                    px-2
                    py-1
                    text-[9px]
                    font-medium
                    text-muted-foreground
                    transition-colors
                    duration-300
                    group-hover:border-primary/20
                    group-hover:text-foreground
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View */}
            <span
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                text-xs
                font-semibold
                text-foreground
                transition-colors
                duration-300
                group-hover:text-primary
              "
            >
              View Project
              <span
                className="
                  grid
                  h-7
                  w-7
                  place-items-center
                  rounded-full
                  border
                  border-border
                  transition-all
                  duration-300
                  group-hover:border-primary/40
                  group-hover:bg-primary/10
                "
              >
                <ExternalLink
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.a>
  );
}

/* =========================================================
   PROJECTS SECTION
   ========================================================= */

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects We've <span className="text-gradient">Built</span>
            </>
          }
          sub="A selection of websites and digital experiences we've designed and developed for real clients."
        />
      </Reveal>

      <div
        className="
          mt-10
          grid
          gap-6
          sm:mt-12
          lg:grid-cols-2
          lg:gap-7
        "
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Small bottom statement */}
      <Reveal>
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-muted-foreground/50
            sm:text-xs
          "
        >
          <span className="h-px w-8 bg-border" />
          More projects coming soon
          <span className="h-px w-8 bg-border" />
        </div>
      </Reveal>
    </Section>
  );
}
