import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, TrendingUp, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

const positions = [
  { title: "Combat Guard Operator", location: "Pan-India", type: "Full-time" },
  { title: "Executive Protection Specialist", location: "Delhi NCR", type: "Full-time" },
  { title: "Aviation Security Officer", location: "Mumbai / Delhi", type: "Full-time" },
  { title: "Control Room Operator", location: "Delhi NCR", type: "Shift-based" },
  { title: "Training Instructor — Krav Maga", location: "Academy, Gurugram", type: "Full-time" },
  { title: "Intelligence Analyst", location: "Remote / HQ", type: "Full-time" },
];

const Careers = () => (
  <div>
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-jet via-jet-light to-jet" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Careers</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join the <span className="gold-text">Elite Force</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We're looking for exceptional individuals who embody discipline, courage, and an unwavering commitment to excellence.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, title: "World-Class Training", desc: "Access to our elite combat academy and continuous development programs." },
            { icon: Heart, title: "Health & Insurance", desc: "Comprehensive health coverage and life insurance for all operators." },
            { icon: TrendingUp, title: "Career Growth", desc: "Clear advancement paths from operator to team lead to management." },
            { icon: Shield, title: "Elite Brotherhood", desc: "Join a community of the most disciplined professionals in the industry." },
          ].map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1} variant="fade-up">
              <div className="glass rounded-lg p-6 text-center h-full">
                <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-sm font-bold mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open <span className="gold-text">Positions</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {positions.map((pos, i) => (
            <ScrollReveal key={pos.title} delay={i * 0.08} variant="fade-left">
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 glass rounded-lg hover:border-primary/40 transition-all duration-300 gap-3">
                <div>
                  <h3 className="font-heading text-base font-bold group-hover:text-primary transition-colors">{pos.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">{pos.location}</span>
                    <span className="text-xs text-primary">{pos.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="font-sub text-xs tracking-widest uppercase text-primary hover:text-gold-light transition-colors flex items-center gap-1">
                  Apply <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
