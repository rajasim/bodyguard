import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "", label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gold-text mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-sub text-sm md:text-base text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
