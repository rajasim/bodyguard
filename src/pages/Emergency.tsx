import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Radio, Shield, ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

import emergencyBg from "@/assets/emergency-response.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";

const Emergency = () => (
  <div>
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <img src={emergencyBg} alt="Emergency response" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-jet/70 via-jet/50 to-jet" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-destructive/10"
      />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <AlertTriangle className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Emergency Response</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Rapid <span className="gold-text">Tactical Deployment</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            When every second counts, our Quick Reaction Force teams mobilize with military precision to neutralize threats and secure the situation.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    {/* Emergency image + content */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal variant="fade-left">
            <div className="relative rounded-lg overflow-hidden h-72">
              <img src={serviceEmergency} alt="Rapid response team" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-jet/40 to-transparent" />
              <motion.div
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-destructive/10"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "< 15 Min Response", desc: "Average deployment time for urban zones." },
                { icon: Radio, title: "24/7 Command", desc: "Round-the-clock operations center monitoring." },
                { icon: Shield, title: "Tactical QRF", desc: "Quick Reaction Forces on perpetual standby." },
                { icon: Zap, title: "Crisis Management", desc: "Full crisis lifecycle from containment to resolution." },
              ].map((item) => (
                <div key={item.title} className="group glass rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding bg-jet-light">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Response <span className="gold-text">Protocol</span>
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {["Threat Detection & Alert", "QRF Mobilization", "Perimeter Containment", "Threat Neutralization", "Evacuation & Medical", "Post-Incident Analysis"].map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.1}>
              <div className="flex items-center gap-4 p-5 glass rounded-lg group hover:border-primary/30 transition-all">
                <div className="font-heading text-2xl font-bold gold-text">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-sub text-sm tracking-wide group-hover:text-primary transition-colors">{step}</div>
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
            Emergency <span className="gold-text">Hotline</span>
          </h2>
          <p className="text-muted-foreground mb-8">For immediate security emergencies, contact our 24/7 command center.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded animate-pulse-gold transition-all duration-300"
          >
            Contact Command Center <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Emergency;
