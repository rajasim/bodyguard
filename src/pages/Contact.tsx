import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <img src={contactBg} alt="City skyline" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="font-sub text-xs tracking-[0.4em] text-primary mb-3 uppercase">Contact</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gold-text">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Reach out to our command center for a confidential security consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="glass rounded-lg p-8 md:p-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Full Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Subject</label>
                      <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Security Consultation" />
                    </div>
                  </div>
                  <div>
                    <label className="font-sub text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-input border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Describe your security requirements..." />
                  </div>
                  <button type="submit" className="w-full font-sub text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground rounded hover:shadow-[0_0_30px_-5px_hsl(40,54%,50%,0.5)] transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal variant="fade-right" delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-4">Command Center</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Mail, text: "info@blackberets.com" },
                        { icon: Phone, text: "+91  9881391558" },
                        { icon: MapPin, text: "285, SUCHETA NIWAS, MUGAL BUILDING, SHAHID BHAGAT SINGH ROAD, FORT, MUMBAI 400001. " },
                        { icon: MapPin, text: "BBCS Company Head Office 5, Circle Tower, Ashok Stambh, Nashik, 422001. " },
                      ].map((c) => (
                        <div key={c.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <c.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-4">Operations Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between"><span>Command Center</span><span className="text-primary">24/7</span></div>
                      <div className="flex justify-between"><span>Corporate Office</span><span>Mon-Sat: 09:00-18:00</span></div>
                      <div className="flex justify-between"><span>Training Academy</span><span>Mon-Fri: 06:00-20:00</span></div>
                    </div>
                  </div>
                  <div className="relative glass rounded-lg overflow-hidden h-48">
                    <img src={contactBg} alt="Location" loading="lazy" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="font-sub text-xs tracking-widest uppercase text-muted-foreground">Mumbai, India</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
