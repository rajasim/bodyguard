import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
  zoom?: boolean;
  eager?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  speed = 0.3,
  overlay = true,
  overlayColor = "from-jet/80 via-jet/40 to-jet/80",
  zoom = false,
  eager = false,
}: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`absolute inset-0 w-full h-full object-cover ${zoom ? "scale-110" : "scale-125"}`}
        loading={eager ? "eager" : "lazy"}
      />
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
      )}
    </div>
  );
};

export default ParallaxImage;
