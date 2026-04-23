import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center justify-center py-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
