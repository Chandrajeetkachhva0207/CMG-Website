import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

/**
 * Premium scroll progress indicator — thin gradient bar at the very top of the page.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30, mass: 0.5 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep spring value in sync
  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress-bar"
      style={{ scaleX: spring, transformOrigin: "left" }}
    />
  );
}
