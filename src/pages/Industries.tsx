import { Plane, Building2, Hotel, Crown, Landmark, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

import industryAviation from "@/assets/industry-aviation.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";
import industryHotel from "@/assets/industry-hotel.jpg";
import industryVip from "@/assets/industry-vip.jpg";
import industryInfrastructure from "@/assets/industry-infrastructure.jpg";
import industryGovernment from "@/assets/industry-government.jpg";

const industries = [
  { icon: Plane, title: "Aviation", img: industryAviation, desc: "ICAO-compliant airport and airline security, anti-hijacking, baggage screening, and passenger profiling for international and domestic carriers." },
  { icon: Building2, title: "Corporate", img: industryCorporate, desc: "Fortune 500 campuses, tech parks, financial institutions, and multinational headquarters secured with layered access control and crisis management protocols." },
  { icon: Hotel, title: "Hospitality", img: industryHotel, desc: "Luxury hotels, resorts, and event venues protected with discreet, high-caliber security that maintains guest experience while ensuring safety." },
  { icon: Crown, title: "VIP & Private Estates", img: industryVip, desc: "Executive residences, private islands, and family compounds secured by close-protection specialists with counter-surveillance expertise." },
  { icon: Landmark, title: "Critical Infrastructure", img: industryInfrastructure, desc: "Power plants, data centers, oil refineries, and government installations protected with multi-tier defense protocols and armed response." },
  { icon: ShieldCheck, title: "Government & Defense", img: industryGovernment, desc: "Supporting governmental agencies with trained personnel for diplomatic protection, facility security, and intelligence-driven operations." },
];

const Industries = () => (
  <div>
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <img src={industryCorporate} alt="Industries" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Industries Served</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Protecting Every <span className="gold-text">Sector</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From aviation terminals to private estates — our security expertise spans every high-value industry.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.1} variant="scale">
              <div className="group glass rounded-lg overflow-hidden h-full hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(40,54%,50%,0.15)]">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
                  <ind.icon className="absolute bottom-4 left-6 w-10 h-10 text-primary drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Industries;
