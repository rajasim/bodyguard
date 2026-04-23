import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, X, Plane, Swords, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import ParallaxImage from "@/components/ParallaxImage";

import heroImg from "@/assets/training-courses-hero.jpg";
import airportImg from "@/assets/course-airport.jpg";
import aviationImg from "@/assets/course-aviation.jpg";
import corporateImg from "@/assets/course-corporate.jpg";
import combatImg from "@/assets/course-combat.jpg";
import vipImg from "@/assets/course-vip.jpg";
import ctaBg from "@/assets/training-cta-bg.jpg";

type Category = "All" | "Aviation" | "Combat" | "Corporate";

const courses = [
  {
    name: "Airport Staff Security Course",
    duration: "45 Days",
    fees: "₹65,000",
    category: "Aviation" as Category,
    image: airportImg,
    desc: "Comprehensive training in airport perimeter security, access control systems, baggage screening protocols, and passenger management. Graduates are fully equipped to handle terminal security operations at any major airport.",
    highlights: ["BCAS-aligned curriculum", "Hands-on screening drills", "Job placement assistance"],
  },
  {
    name: "IATA Course",
    duration: "60 Days",
    fees: "₹3,00,000 (Approx)",
    category: "Aviation" as Category,
    image: aviationImg,
    desc: "Globally recognized IATA certification program covering dangerous goods handling, aviation security management, ground operations, and international compliance standards for airline professionals.",
    highlights: ["Internationally recognized certification", "Global career opportunities", "Industry-standard training"],
  },
  {
    name: "Aviation Security Course",
    duration: "60 Days",
    fees: "₹2,00,000 (Approx)",
    category: "Aviation" as Category,
    image: aviationImg,
    desc: "Advanced aviation security training including threat assessment for aircraft, in-flight security protocols, anti-hijacking procedures, and coordination with aviation authorities for crisis management.",
    highlights: ["Anti-hijacking protocols", "Threat assessment mastery", "Aviation authority coordination"],
  },
  {
    name: "Corporate Security Course",
    duration: "21 Days",
    fees: "₹26,000",
    category: "Corporate" as Category,
    image: corporateImg,
    desc: "Professional corporate security training covering office premises protection, visitor management systems, CCTV surveillance operations, fire safety, and corporate risk assessment frameworks.",
    highlights: ["Corporate risk assessment", "Surveillance operations", "Rapid deployment ready"],
  },
  {
    name: "Airlines Security Course",
    duration: "21 Days",
    fees: "₹35,000",
    category: "Aviation" as Category,
    image: airportImg,
    desc: "Specialized training for airline security personnel including pre-flight security checks, cabin crew coordination, passenger profiling techniques, and emergency response during flight operations.",
    highlights: ["Pre-flight security expertise", "Passenger profiling", "Emergency response training"],
  },
  {
    name: "Special Combat Security Course",
    duration: "60 Days",
    fees: "₹65,000",
    category: "Combat" as Category,
    image: combatImg,
    desc: "Elite combat training program featuring advanced hand-to-hand combat, tactical weapon handling, urban warfare scenarios, and high-risk environment operations designed for elite security operatives.",
    highlights: ["Advanced tactical combat", "Urban warfare scenarios", "Elite operative certification"],
  },
  {
    name: "VIP Security & Combat Course",
    duration: "45 Days",
    fees: "₹52,000",
    category: "Combat" as Category,
    image: vipImg,
    desc: "Intensive VIP protection training including close protection formations, motorcade security, advance route planning, threat neutralization, and executive evacuation protocols for high-profile clients.",
    highlights: ["Close protection mastery", "Motorcade operations", "Executive evacuation drills"],
  },
  {
    name: "Combat Security Guards Course",
    duration: "21 Days",
    fees: "₹26,000",
    category: "Combat" as Category,
    image: combatImg,
    desc: "Foundational combat security program covering physical fitness conditioning, basic self-defense techniques, patrol operations, crowd control, and armed/unarmed guard duty fundamentals.",
    highlights: ["Physical combat readiness", "Patrol & crowd control", "Armed guard fundamentals"],
  },
];

const categories: Category[] = ["All", "Aviation", "Combat", "Corporate"];
const categoryIcons = { All: Swords, Aviation: Plane, Combat: Swords, Corporate: Briefcase };

const TrainingCourses = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [inquiry, setInquiry] = useState<string | null>(null);

  const filtered = filter === "All" ? courses : courses.filter((c) => c.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <img src={heroImg} alt="Elite security training" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Training Academy</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Elite Security & Combat <span className="gold-text">Training Programs</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
              Build strength, discipline, and professional excellence with India's most rigorous security training courses.
            </p>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Courses */}
      <section id="courses" className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gold-text">Courses</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-sm">
              Industry-certified programs designed by former special forces operators and security experts.
            </p>
          </ScrollReveal>

          {/* Filter */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex items-center gap-2 font-sub text-xs tracking-widest uppercase px-5 py-2.5 rounded border transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_hsl(40,54%,50%,0.4)]"
                      : "border-border/40 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat}
                </button>
              );
            })}
          </ScrollReveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.name}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group glass rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(40,54%,50%,0.3)] flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
                    <span className="absolute top-3 right-3 font-sub text-[10px] tracking-widest uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded">
                      {course.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="flex items-center gap-1.5 text-primary">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{course.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setInquiry(course.name)}
                      className="w-full font-sub text-xs tracking-widest uppercase py-3 border border-primary/50 text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <ParallaxImage src={ctaBg} alt="Training formation" className="absolute inset-0" speed={0.2} />
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the <span className="gold-text">Elite Force</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-10">
              Take the first step towards a career in professional security. Our training programs have placed thousands of operatives across India's top organizations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
            >
              Apply for Training <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {inquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setInquiry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-lg p-8 w-full max-w-md relative border border-border/30"
            >
              <button onClick={() => setInquiry(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-heading text-xl font-bold mb-1">Enroll Now</h3>
              <p className="text-muted-foreground text-sm mb-6">{inquiry}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquiry(null);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-background/50 border border-border/30 rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-background/50 border border-border/30 rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-background/50 border border-border/30 rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full bg-background/50 border border-border/30 rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full font-sub text-sm tracking-widest uppercase py-3 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingCourses;
