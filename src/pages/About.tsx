import { Shield, Target, Eye, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-jet via-jet-light to-jet" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">About Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="gold-text">Black Berets</span> Legacy
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Founded on the principles of discipline, honor, and uncompromising excellence,
            Black Berets Combat Services has emerged as a global leader in elite security solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <SectionDivider />

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Born from <span className="gold-text">Combat Excellence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Black Berets Combat Services Pvt. Ltd. was established by veterans with decades of combined
                experience in military operations, intelligence, and executive protection. Our founders
                envisioned a security company that transcends traditional guard services.
              </p>
              <p>
                Every operator in our force is not merely a security guard — they are combat-trained
                professionals capable of handling the most extreme scenarios with precision and composure.
                We don't just protect; we deter, prevent, and neutralize threats before they materialize.
              </p>
              <p>
                Our training methodology draws from Krav Maga, tactical combat systems, and intelligence-led
                security protocols used by the world's most elite forces.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="glass rounded-lg p-10 space-y-8">
              {[
                { icon: Target, title: "Mission", text: "To deliver unparalleled security through combat-ready personnel and intelligence-driven strategies." },
                { icon: Eye, title: "Vision", text: "To be the global benchmark for elite security and combat services, trusted by nations and corporations." },
                { icon: BookOpen, title: "Philosophy", text: "Zero compromise on training, discipline, and operational excellence — every operator embodies our standard." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Combat Guards Concept */}
    <section className="section-padding bg-jet-light">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Our Concept</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is a <span className="gold-text">Combat Guard?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed mb-12">
            A Combat Guard is not a conventional security officer. They are elite operators trained in
            close-quarters combat, threat neutralization, tactical movement, and crisis management.
            Every Combat Guard holds certifications in Krav Maga, first aid, and threat intelligence analysis.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Physical Mastery", desc: "Peak fitness with combat proficiency in multiple martial disciplines." },
            { title: "Tactical Intelligence", desc: "Real-time threat assessment and strategic decision-making under pressure." },
            { title: "Professional Discipline", desc: "Military-grade conduct, appearance, and communication standards." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15} variant="scale">
              <div className="glass rounded-lg p-8 h-full hover:border-primary/30 transition-all duration-300">
                <div className="font-heading text-4xl font-bold gold-text mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
