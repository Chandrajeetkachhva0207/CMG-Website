import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "why", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#home"
      className={cn("group flex items-center gap-3 transition-all duration-300", className)}
      aria-label="CMG SoftTech Home"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="relative flex items-center"
      >
        <img
          src="/cmg-logo-dark.png"
          alt="CMG SoftTech Logo"
          className="h-10 sm:h-11 w-auto max-w-[220px] object-contain filter drop-shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_22px_rgba(59,130,246,0.65)]"
        />
      </motion.div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActive(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed inset-x-0 top-0 z-50
        "
      >
        {/* Main Navbar */}
        <div
          className={cn(
            "relative transition-all duration-500",
            scrolled
              ? "border-b border-white/[0.07] bg-[#050507]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-b border-white/[0.03] bg-[#050507]/35 backdrop-blur-md",
          )}
        >
          {/* Top purple light */}
          <div
            className="
              pointer-events-none absolute inset-x-0 top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary/60
              to-transparent
              opacity-70
            "
          />

          {/* Subtle bottom glow */}
          <motion.div
            animate={{
              opacity: scrolled ? 0.7 : 0.25,
            }}
            transition={{ duration: 0.4 }}
            className="
              pointer-events-none absolute
              bottom-0 left-1/2
              h-px w-1/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-primary
              to-transparent
              blur-[1px]
            "
          />

          <nav
            className="
              mx-auto flex h-[72px]
              max-w-7xl items-center
              justify-between
              px-5 sm:px-8 lg:px-10
            "
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.id;

                return (
                  <li key={link.id} className="relative">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setActive(link.id)}
                      className={cn(
                        `
                          group relative block
                          overflow-hidden rounded-lg
                          px-3.5 py-2.5
                          text-[13px] font-medium
                          transition-all duration-300
                        `,
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {/* Hover background */}
                      <motion.span
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                        }}
                        whileHover={{ opacity: 1 }}
                        className="
                          absolute inset-0 -z-10
                          rounded-lg
                          bg-primary/[0.08]
                        "
                      />

                      {/* Hover border */}
                      <span
                        className="
                          pointer-events-none absolute inset-0
                          rounded-lg border
                          border-primary/0
                          transition-all duration-300
                          group-hover:border-primary/15
                        "
                      />

                      {/* Label */}
                      <span className="relative z-10">{link.label}</span>

                      {/* Active glow line */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                          className="
                            absolute bottom-0.5
                            left-1/2
                            h-[2px] w-5
                            -translate-x-1/2
                            rounded-full
                            bg-gradient-primary
                            shadow-[0_0_12px_hsl(var(--primary)/0.8)]
                          "
                        />
                      )}

                      {/* Active dot */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="
                            absolute right-1.5 top-1.5
                            h-1 w-1
                            rounded-full
                            bg-primary
                            shadow-[0_0_8px_hsl(var(--primary))]
                          "
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
                y: -1,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative hidden
                items-center gap-2
                overflow-hidden
                rounded-xl
                border border-primary/30
                bg-primary/[0.06]
                px-4 py-2.5
                text-sm font-semibold
                text-foreground
                transition-all duration-300
                hover:border-primary/60
                hover:bg-primary/[0.12]
                hover:shadow-[0_0_28px_hsl(var(--primary)/0.18)]
                lg:inline-flex
              "
            >
              {/* CTA glow */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-primary/10
                  to-transparent
                  -translate-x-full
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">Let's Talk</span>

              <ArrowRight
                className="
                  relative z-10 h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen((current) => !current)}
              className="
                relative grid h-11 w-11
                place-items-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-foreground
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/[0.07]
                hover:shadow-[0_0_20px_hsl(var(--primary)/0.12)]
                lg:hidden
              "
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {/* Button glow */}
              <span
                className={cn(
                  "absolute inset-0 rounded-xl transition-opacity duration-300",
                  open
                    ? "opacity-100 shadow-[inset_0_0_20px_hsl(var(--primary)/0.08)]"
                    : "opacity-0",
                )}
              />

              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="relative z-10 h-5 w-5 text-primary" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="relative z-10 h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop */}
                <motion.button
                  type="button"
                  aria-label="Close navigation menu"
                  className="
                    fixed inset-0 top-[72px]
                    -z-10
                    bg-black/60
                    backdrop-blur-sm
                    lg:hidden
                  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMenu}
                />

                {/* Menu Panel */}
                <motion.div
                  id="mobile-navigation"
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    overflow-hidden
                    border-t border-white/[0.07]
                    bg-[#050507]/95
                    shadow-2xl
                    backdrop-blur-2xl
                    lg:hidden
                  "
                >
                  {/* Mobile glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      left-1/2 top-0
                      h-32 w-72
                      -translate-x-1/2
                      bg-primary/10
                      blur-[80px]
                    "
                  />

                  <ul
                    className="
                      relative mx-auto
                      max-w-7xl
                      px-5 py-5
                      sm:px-8
                    "
                  >
                    {navLinks.map((link, index) => {
                      const isActive = active === link.id;

                      return (
                        <motion.li
                          key={link.id}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.045,
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            href={`#${link.id}`}
                            onClick={() => {
                              setActive(link.id);
                              closeMenu();
                            }}
                            className={cn(
                              `
                                group relative
                                flex items-center
                                justify-between
                                overflow-hidden
                                rounded-xl
                                px-4 py-3.5
                                font-display text-lg
                                transition-all duration-300
                              `,
                              isActive
                                ? "bg-primary/[0.10] text-primary"
                                : "text-foreground hover:bg-white/[0.035]",
                            )}
                          >
                            {/* Active side glow */}
                            {isActive && (
                              <motion.span
                                layoutId="mobile-active-line"
                                className="
                                  absolute left-0 top-1/2
                                  h-7 w-[2px]
                                  -translate-y-1/2
                                  rounded-full
                                  bg-gradient-primary
                                  shadow-[0_0_12px_hsl(var(--primary))]
                                "
                              />
                            )}

                            <span>{link.label}</span>

                            {isActive && (
                              <motion.span
                                layoutId="mobile-active-dot"
                                className="
                                  h-1.5 w-1.5
                                  rounded-full
                                  bg-primary
                                  shadow-[0_0_10px_hsl(var(--primary)/0.8)]
                                "
                              />
                            )}
                          </a>
                        </motion.li>
                      );
                    })}

                    {/* Mobile CTA */}
                    <motion.li
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: navLinks.length * 0.045,
                        duration: 0.3,
                      }}
                    >
                      <a
                        href="#contact"
                        onClick={closeMenu}
                        className="
                          group relative mt-4
                          flex min-h-12
                          items-center
                          justify-center
                          gap-2
                          overflow-hidden
                          rounded-xl
                          bg-gradient-primary
                          px-5
                          font-semibold
                          text-primary-foreground
                          shadow-glow
                          transition-all duration-300
                        "
                      >
                        <span
                          className="
                            absolute inset-0
                            bg-white/10
                            -translate-x-full
                            transition-transform duration-500
                            group-hover:translate-x-full
                          "
                        />

                        <span className="relative z-10">Let's Talk</span>

                        <ArrowRight
                          className="
                            relative z-10 h-4 w-4
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
