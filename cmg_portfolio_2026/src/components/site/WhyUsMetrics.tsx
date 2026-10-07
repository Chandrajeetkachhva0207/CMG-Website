import React from "react";
import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";

export function WhyUsMetrics() {
  const metrics = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support & Monitoring" },
    { value: "100%", label: "Custom Solutions" },
  ];

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {metrics.map((metric, i) => (
        <TiltCard key={metric.label}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2/40 p-8 text-center transition-colors hover:border-primary/30 hover:bg-surface-2/60"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <h4
              style={{ transform: "translateZ(30px)" }}
              className="text-4xl font-display font-bold text-foreground transition-colors group-hover:text-primary sm:text-5xl"
            >
              {metric.value}
            </h4>
            <p
              style={{ transform: "translateZ(20px)" }}
              className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground"
            >
              {metric.label}
            </p>
          </motion.div>
        </TiltCard>
      ))}
    </div>
  );
}
