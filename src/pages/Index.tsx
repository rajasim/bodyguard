import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Crosshair, Users, Plane, Zap, ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionDivider from "@/components/SectionDivider";

import heroBg from "@/assets/hero-bg.jpg";
import serviceVip from "@/assets/service-vip.jpeg";
import serviceCorporate from "@/assets/service-corporate.jpeg";
import serviceAviation from "@/assets/service-aviation.jpeg";
import serviceCombat from "@/assets/service-combat.jpeg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import industryAviation from "@/assets/industry-aviation.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";
import industryHotel from "@/assets/industry-hotel.jpg";
import industryVip from "@/assets/industry-vip.jpg";
import industryInfrastructure from "@/assets/industry-infrastructure.jpg";
import industryGovernment from "@/assets/industry-government.jpg";
import serviceFacility from "@/assets/service-facility.jpeg";

const services = [
  { icon: Crosshair, title: "Combat Guards", desc: "Highly trained operatives for high-risk deployment zones worldwide.", img: serviceCombat },
  { icon: Shield, title: "VIP Protection", desc: "Executive close protection with advanced threat assessment protocols.", img: serviceVip },
  { icon: Users, title: "Corporate Security", desc: "Comprehensive security infrastructure for enterprise environments.", img: serviceCorporate },
  { icon: Plane, title: "Aviation Security", desc: "Airport and airline security compliant with international standards.", img: serviceAviation },
  { icon: Zap, title: "Emergency Response", desc: "Rapid deployment tactical teams for crisis situations.", img: serviceEmergency },
];

const industries = [
  { name: "Aviation", img: industryAviation },
  { name: "Corporate", img: industryCorporate },
  { name: "Hospitality", img: industryHotel },
  { name: "VIP Estates", img: industryVip },
  { name: "Infrastructure", img: industryInfrastructure },
  { name: "Government", img: industryGovernment },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Hero with Ken Burns */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img src={heroBg} alt="Elite tactical team" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="sync" loading="eager" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-jet/70 via-jet/50 to-jet" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="font-sub text-sm md:text-base tracking-[0.5em] text-primary mb-6 uppercase">
              Black Berets Combat Services
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
              Elite Combat Guards
              <br />
              <span className="gold-text">For High-Risk</span>
              <br />
              Environments
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
              Delivering world-class security and combat-trained personnel to governments,
              corporations, and high-value assets across the globe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group font-sub text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
              >
                Request Security Consultation
                <ArrowRight className="inline ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="font-sub text-sm tracking-widest uppercase px-8 py-4 border border-border text-foreground rounded hover:border-primary hover:text-primary transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </section>

      <SectionDivider />

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-left">
              <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Who We Are</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                India's Most <span className="gold-text">Disciplined</span> Security Force
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Black Berets Combat Services provides elite-level security and combat-trained
                personnel for the most demanding environments on earth. Our operators undergo
                rigorous Krav Maga and tactical combat training that exceeds military standards.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase text-primary hover:text-gold-light transition-colors">
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative">
                <div className="glass rounded-lg p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { n: "24/7", l: "Operations" },
                      { n: "150+", l: "Trained Operators" },
                      { n: "12", l: "Countries Served" },
                      { n: "100%", l: "Client Retention" },
                    ].map((s) => (
                      <div key={s.l} className="text-center p-4">
                        <div className="font-heading text-2xl md:text-3xl font-bold gold-text mb-1">{s.n}</div>
                        <div className="font-sub text-xs tracking-widest text-muted-foreground uppercase">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-primary/10 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services with Images */}
      <section className="section-padding bg-jet-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">What We Do</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our <span className="gold-text">Core Services</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1} variant="scale">
                <div className="group glass rounded-lg overflow-hidden h-full hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(40,54%,50%,0.2)]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
                    <s.icon className="absolute bottom-4 left-4 w-8 h-8 text-primary drop-shadow-lg" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase text-primary hover:text-gold-light transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Industries with Images */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Sectors</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Industries <span className="gold-text">We Serve</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 0.08} variant="fade-up">
                <div className="group relative rounded-lg overflow-hidden h-48 md:h-56 cursor-default">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-jet/60 group-hover:bg-jet/40 transition-colors duration-500" />
                  <div className="absolute inset-0 border border-border/30 rounded-lg group-hover:border-primary/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-heading text-sm md:text-base tracking-widest group-hover:text-primary transition-colors duration-300">{ind.name.toUpperCase()}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats */}
      <section className="section-padding bg-jet-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Our Impact</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Numbers That <span className="gold-text">Define Us</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Deployments" />
            <AnimatedCounter end={150} suffix="+" label="Elite Operators" />
            <AnimatedCounter end={12} label="Countries" />
            <AnimatedCounter end={99} suffix="%" label="Success Rate" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Why Us</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The <span className="gold-text">Black Berets</span> Advantage
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Combat-Trained Operators", desc: "Every guard undergoes intensive combat and tactical training exceeding military standards." },
              { title: "Global Deployment", desc: "Rapid mobilization capability across 12+ countries with local compliance expertise." },
              { title: "24/7 Command Center", desc: "Round-the-clock monitoring and coordination from our advanced operations hub." },
              { title: "Intelligence-Led Security", desc: "Threat assessment and risk analysis powered by real-time intelligence networks." },
              { title: "Custom Protocols", desc: "Bespoke security frameworks designed for each client's unique risk profile." },
              { title: "Zero Compromise", desc: "100% client retention rate — a testament to our uncompromising service standards." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <span className="font-heading text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="section-padding bg-jet-light">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for <span className="gold-text">Elite Protection?</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-10">
              Contact our command center for a confidential security assessment tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
