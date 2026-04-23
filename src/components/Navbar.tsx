import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
 
  { path: "/security-training-courses-mumbai", label: "Courses" },
  { path: "/industries", label: "Industries" },
  { path: "/emergency", label: "Emergency" },
  { path: "/careers", label: "Careers" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Black Berets Logo" className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(196,167,103,0.3)]" />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-foreground">BLACK BERETS</span>
            <span className="font-sub text-[10px] md:text-xs tracking-[0.3em] text-primary">COMBAT SERVICES</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-sub text-sm tracking-wider uppercase px-3 py-2 transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <a
  href="https://black-berets-admin.vercel.app/"
  className="ml-4 font-sub text-sm tracking-wider uppercase px-5 py-2 border border-primary/50 text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
>
  Staff Login
</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sub text-sm tracking-wider uppercase px-4 py-3 rounded transition-colors ${
                    location.pathname === link.path ? "text-primary bg-primary/10" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                className="mt-2 font-sub text-sm tracking-wider uppercase px-4 py-3 border border-primary/50 text-primary rounded text-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Staff Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
