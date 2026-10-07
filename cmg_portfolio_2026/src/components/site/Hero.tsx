import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Code2, Database, Layers3, LayoutDashboard, Rocket, Sparkles } from "lucide-react";
import { CTAButton, ease } from "./primitives";
import { Hero3DObject } from "./Hero3DObject";

const words = ["We", "Build", "Digital", "Products", "That", "Move", "Businesses", "Forward."];

const accent = new Set(["Digital", "Products"]);

const capabilities = ["Modern Technology", "Responsive by Design", "Built for Growth"];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 60,
    damping: 20,
  });

  const sy = useSpring(my, {
    stiffness: 60,
    damping: 20,
  });

  const rx = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const px = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const py = useTransform(sy, [-0.5, 0.5], [-18, 18]);

  // Live mouse values for 3D camera rig
  const rawMx = useMotionValue(0);
  const rawMy = useMotionValue(0);

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center
        overflow-hidden
        px-5 pb-20 pt-32
        sm:px-8
        lg:pb-24
      "
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;

        mx.set(nx);
        my.set(ny);
        rawMx.set(nx);
        rawMy.set(ny);
      }}
    >
      {/* Background grid */}
      <div className="grid-bg absolute inset-0" aria-hidden />

      {/* Perspective floor grid */}
      <div
        className="perspective-grid absolute bottom-0 left-0 right-0 h-72 opacity-20"
        aria-hidden
      >
        <div className="perspective-lines" />
      </div>

      <div
        className="
          orb animate-drift
          -left-40 top-20
          h-[420px] w-[420px]
          bg-primary/20
        "
        aria-hidden
      />

      <div
        className="
          orb animate-drift
          right-[-10%] top-1/3
          h-[520px] w-[520px]
          bg-indigo/20
          [animation-delay:-6s]
        "
        aria-hidden
      />

      {/* Subtle center glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-primary/5
          blur-[120px]
        "
        aria-hidden
      />

      <div
        className="
          relative mx-auto grid w-full max-w-7xl
          items-center gap-14
          lg:grid-cols-[1.08fr_0.92fr]
          lg:gap-16
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="
              glass inline-flex
              items-center gap-2.5
              rounded-full
              border border-primary/20
              px-4 py-2
              text-xs font-medium
              text-muted-foreground
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex
                  h-full w-full
                  animate-ping
                  rounded-full
                  bg-primary-glow
                  opacity-60
                "
              />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            Available for New Projects
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="
              mt-7 flex items-center gap-2
              text-[11px] font-semibold
              uppercase tracking-[0.22em]
              text-primary
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Products &amp; Software Solutions
          </motion.div>

          {/* Main Heading */}
          <h1
            className="
              mt-5
              max-w-4xl
              text-[2.7rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.035em]
              sm:text-6xl
              lg:text-[4.7rem]
              xl:text-[5rem]
            "
          >
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  ease,
                  delay: 0.15 + index * 0.065,
                }}
                className={`mr-[0.25em] inline-block ${accent.has(word) ? "text-gradient" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.8,
            }}
            className="
              mt-7 max-w-xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
              sm:leading-8
            "
          >
            CMG Softtech helps businesses, organizations, founders, and startups turn ideas into
            modern, scalable, and impactful digital products.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.95,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton href="#projects">View Our Work</CTAButton>

            <CTAButton href="#contact" variant="ghost">
              Let's Build Something
            </CTAButton>
          </motion.div>

          {/* Capability List */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease,
              delay: 1.15,
            }}
            className="
              mt-8
              flex flex-wrap
              gap-x-5 gap-y-3
            "
          >
            {capabilities.map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  text-xs
                  text-muted-foreground
                "
              >
                <span
                  className="
                    grid h-4 w-4
                    place-items-center
                    rounded-full
                    border border-primary/30
                    bg-primary/5
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT VISUAL - 3D CANVAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.35 }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
          aria-hidden
        >
          {/* Subtle Glow behind the 3D object */}
          <div className="absolute inset-[21%] rounded-full bg-gradient-primary opacity-35 blur-3xl" />

          <div className="relative h-full w-full rounded-full border border-primary/10">
            <React.Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
                <Hero3DObject mouseX={rawMx.get()} mouseY={rawMy.get()} />
              </Canvas>
            </React.Suspense>
          </div>

          {/* Floating Performance Indicator Overlay */}
          <motion.div
            style={{ x: px, y: py }}
            className="glass shadow-card animate-float absolute bottom-[5%] right-[-5%] w-[54%] rounded-2xl border border-border/50 p-4 sm:p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <LayoutDashboard className="h-4 w-4 text-primary" />
                System Status
              </div>
              <span className="text-[9px] font-medium text-primary-glow">Online</span>
            </div>
          </motion.div>

          {/* Floating tech tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease }}
            style={{
              x: useTransform(sx, [-0.5, 0.5], [8, -8]),
              y: useTransform(sy, [-0.5, 0.5], [8, -8]),
            }}
            className="glass animate-float absolute -left-[5%] top-[15%] rounded-xl border border-border/50 px-3 py-2 [animation-delay:-3s]"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
              <Code2 className="h-3 w-3 text-primary" />
              React + Three.js
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
