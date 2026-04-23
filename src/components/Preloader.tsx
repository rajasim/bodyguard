import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Preloader = ({ loading }: { loading: boolean }) => (
  <AnimatePresence>
    {loading && (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="preloader"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <img src={logo} alt="Black Berets Logo" className="w-14 h-14" />
          <div className="font-heading text-xl tracking-[0.4em] text-foreground">BLACK BERETS</div>
          <div className="w-24 h-0.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Preloader;
