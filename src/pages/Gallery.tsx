import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import snowTeam from "@/assets/gallery/snow-team.jpg";
import himalayanCamp from "@/assets/gallery/himalayan-camp.jpg";
import riverRafting from "@/assets/gallery/river-rafting.jpg";
import annualFunction from "@/assets/gallery/annual-function.jpg";
import teamFormal from "@/assets/gallery/team-formal.jpg";
import tacticalTraining from "@/assets/gallery/tactical-training.jpg";
import convoy from "@/assets/gallery/convoy.jpg";
import baseCamp from "@/assets/gallery/base-camp.jpg";
import combatDrill from "@/assets/gallery/combat-drill.jpg";
import physicalTraining from "@/assets/gallery/physical-training.jpg";

const photos = [
  { src: snowTeam, title: "Snow Operations Training", category: "Training", aspect: "aspect-[4/3]" },
  { src: annualFunction, title: "Annual Strategy Conference", category: "Events", aspect: "aspect-video" },
  { src: combatDrill, title: "Combat Drill Operations", category: "Training", aspect: "aspect-video" },
  { src: himalayanCamp, title: "BBCF Himalayan Camp", category: "Camps", aspect: "aspect-[4/3]" },
  { src: tacticalTraining, title: "Tactical Defense Training", category: "Training", aspect: "aspect-[4/3]" },
  { src: teamFormal, title: "Officers Assembly", category: "Events", aspect: "aspect-video" },
  { src: riverRafting, title: "River Rafting Expedition", category: "Adventure", aspect: "aspect-[4/3]" },
  { src: convoy, title: "Field Convoy Movement", category: "Operations", aspect: "aspect-video" },
  { src: physicalTraining, title: "Physical Conditioning", category: "Training", aspect: "aspect-[3/2]" },
  { src: baseCamp, title: "Mountain Base Camp", category: "Camps", aspect: "aspect-video" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <span className="font-sub text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Visual Archive
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Gallery</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg">
              A glimpse into our operations, training programs, and the elite force that defines Black Berets Combat Services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-sub text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300 ${
                    active === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border/30 text-foreground/50 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setLightbox(photos.indexOf(photo))}
                >
                  <div className="relative overflow-hidden rounded-xl border border-border/10">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <div>
                        <span className="font-sub text-[10px] tracking-widest uppercase text-primary">{photo.category}</span>
                        <h3 className="font-heading text-lg font-bold text-foreground">{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center">
              <span className="font-sub text-xs tracking-widest uppercase text-primary">{photos[lightbox].category}</span>
              <h3 className="font-heading text-xl font-bold text-foreground">{photos[lightbox].title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
