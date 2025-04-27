"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(138, 43, 226, 0.3)",
        borderColor: "rgba(138, 43, 226, 0.5)",
      }}
    >
      {children}
    </motion.div>
  );
}
