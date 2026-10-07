import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Premium magnetic custom cursor.
 * - Default: ring that follows the mouse with spring physics
 * - On hover over interactive elements: expands and fills
 * - Hidden on touch devices
 */
export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { stiffness: 180, damping: 28, mass: 0.6 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover], input, textarea, select, label");
      if (interactive && ringRef.current) {
        isHovering.current = true;
        ringRef.current.setAttribute("data-hover", "true");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover], input, textarea, select, label");
      if (interactive && ringRef.current) {
        isHovering.current = false;
        ringRef.current.removeAttribute("data-hover");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="cursor-dot"
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
      />
    </>
  );
}
