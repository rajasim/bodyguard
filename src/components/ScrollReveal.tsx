import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  duration?: number;
}

const variants = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  "scale": { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  "fade": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

const ScrollReveal = ({ children, className = "", variant = "fade-up", delay = 0, duration = 0.6 }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
