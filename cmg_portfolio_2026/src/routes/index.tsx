import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  JourneyStrip,
  Philosophy,
  ProcessTimeline,
  Services,
  TechStack,
  Vision,
  WhyUs,
} from "@/components/site/Sections";
import { Projects } from "@/components/site/Projects";
import { CTA, ContactForm, Footer } from "@/components/site/Contact";

const title = "CMG Softtech | Modern Web Development & Digital Solutions";
const description =
  "CMG Softtech builds modern websites, full-stack applications, business platforms, and premium digital experiences for businesses, organizations, founders, and startups.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <JourneyStrip />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <ProcessTimeline />
        <WhyUs />
        <Philosophy />
        <Vision />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </MotionConfig>
  );
}
