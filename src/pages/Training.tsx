import { Link } from "react-router-dom";
import { ArrowRight, Swords, Shield, Brain, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

import trainingCombat from "@/assets/training-combat.jpg";
import trainingDrill from "@/assets/training-drill.jpg";

const programs = [
  { icon: Swords, title: "Krav Maga Combat", duration: "12 Weeks", desc: "Intensive Krav Maga training covering street combat, disarming techniques, and real-world threat neutralization scenarios." },
  { icon: Shield, title: "Tactical Defense Systems", duration: "8 Weeks", desc: "Advanced defensive tactics including shield formations, crowd control, and protective detail operations." },
  { icon: Brain, title: "Threat Intelligence", duration: "6 Weeks", desc: "Intelligence gathering, threat assessment, surveillance detection, and counter-intelligence fundamentals." },
  { icon: Target, title: "Executive Protection", duration: "10 Weeks", desc: "Close protection operations, advance planning, motorcade security, and VIP evacuation protocols." },
];

const Training = () => (
  <div>
    {/* Hero with training image */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <img src={trainingDrill} alt="Combat training" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Training & Academy</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Forging <span className="gold-text">Elite Warriors</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Our academy produces the most combat-ready security professionals in the industry through rigorous, world-class training programs.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    {/* Training images showcase */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal variant="fade-left">
            <div className="relative rounded-lg overflow-hidden h-80">
              <img src={trainingCombat} alt="Krav Maga training" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-jet/60 to-transparent" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="relative rounded-lg overflow-hidden h-80">
              <img src={trainingDrill} alt="Tactical drill" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-jet/60 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training <span className="gold-text">Programs</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-sm">
            Each program is designed by former special forces operators and certified combat instructors.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12} variant="fade-up">
              <div className="group glass rounded-lg p-8 h-full hover:border-primary/40 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <p.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-sub text-xs tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded">{p.duration}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding bg-jet-light">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training <span className="gold-text">Structure</span>
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          {["Physical Conditioning & Assessment", "Combat Fundamentals (Krav Maga)", "Tactical Operations & Drills", "Intelligence & Threat Analysis", "Live Scenario Simulations", "Certification & Deployment"].map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.1} variant="fade-left">
              <div className="flex items-center gap-6 py-5 border-b border-border/20 group hover:border-primary/30 transition-colors">
                <div className="font-heading text-3xl font-bold gold-text w-16 text-right">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-sub text-lg tracking-wide group-hover:text-primary transition-colors">{step}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become <span className="gold-text">Elite?</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-10">
            Join the next cohort of Black Berets operators. Applications open for qualified candidates.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Training;
