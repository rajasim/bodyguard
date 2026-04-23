import { Shield, Crosshair, Users, Plane, Zap, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

import serviceCombat from "@/assets/service-combat.jpeg";
import serviceVip from "@/assets/service-vip.jpeg";
import serviceCorporate from "@/assets/service-corporate.jpeg";
import serviceAviation from "@/assets/service-aviation.jpeg";
import serviceEmergency from "@/assets/service-emergency.jpeg";
import serviceFacility from "@/assets/service-facility.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Crosshair, title: "Combat Guards Deployment", img: serviceCombat, desc: "Our flagship service — deploying highly trained combat operators to secure high-risk zones, critical infrastructure, and sensitive locations worldwide. Every guard is trained in Krav Maga and tactical response.", features: ["24/7 armed deployment", "Krav Maga certified", "Tactical threat response", "Global availability"] },
  { icon: Shield, title: "VIP & Executive Protection", img: serviceVip, desc: "Close protection services for executives, dignitaries, celebrities, and high-net-worth individuals. Our CPOs operate with discretion, intelligence, and lethal precision when required.", features: ["Advance security planning", "Route & venue analysis", "Counter-surveillance", "Travel security"] },
  { icon: Users, title: "Corporate Security Solutions", img: serviceCorporate, desc: "Comprehensive security architecture for corporate campuses, data centers, financial institutions, and multinational offices. From access control to crisis management.", features: ["Access control systems", "Threat assessment", "Emergency protocols", "Personnel screening"] },
  { icon: Plane, title: "Aviation Security", img: serviceAviation, desc: "ICAO and national-standard compliant aviation security for airports, airlines, cargo terminals, and private aviation. Specialized in anti-hijacking and baggage screening protocols.", features: ["AVSEC compliance", "Passenger screening", "Cargo security", "Anti-hijacking ops"] },
  { icon: Zap, title: "Emergency Response", img: serviceEmergency, desc: "Rapid deployment tactical teams capable of crisis intervention within minutes. From natural disasters to active threats, our QRF teams are always on standby.", features: ["Rapid mobilization", "Crisis intervention", "Disaster response", "Tactical extraction"] },
  { icon: Lock, title: "Facility & Perimeter Security", img: serviceFacility, desc: "End-to-end physical security solutions including CCTV surveillance, access management, perimeter defense, and 24/7 control room operations.", features: ["CCTV monitoring", "Perimeter defense", "Control room ops", "Intrusion detection"] },
];

const Services = () => (
  <div>
    {/* Hero with background image */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <img src={heroBg} alt="Security services" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive <span className="gold-text">Security Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From combat deployment to corporate infrastructure — we deliver end-to-end security services with military precision.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1} variant="scale">
              <div className="group glass rounded-lg overflow-hidden h-full hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(40,54%,50%,0.15)]">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
                  <s.icon className="absolute bottom-4 left-6 w-8 h-8 text-primary drop-shadow-lg" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding bg-jet-light">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="gold-text">Custom Solution?</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-10">
            Our security architects design bespoke frameworks tailored to your specific threat landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sub text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300"
          >
            Get a Security Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Services;
