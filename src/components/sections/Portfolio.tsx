import { motion } from "framer-motion";
import { Award } from "lucide-react";

const work = [
  { h: "h-72", label: "Skin Fade" },
  { h: "h-96", label: "Classic Cut" },
  { h: "h-64", label: "Beard Sculpt" },
  { h: "h-80", label: "Modern Pompadour" },
  { h: "h-72", label: "Textured Crop" },
  { h: "h-96", label: "Executive Style" },
];

const certs = ["Master Barber Diploma", "Advanced Fade Techniques", "Beard Grooming Specialist", "Hair Design Academy"];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-background"
      aria-label="Portfolio και πιστοποιήσεις VIP Barber Athens"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-5">
            Η Τέχνη του <span className="text-gradient-gold italic">Κουρέματος</span>
          </h2>
          <div className="hairline w-32 mx-auto" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-5 max-w-6xl mx-auto">
          {work.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`mb-5 break-inside-avoid relative group overflow-hidden rounded-sm bg-card ${w.h}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-background" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm">
                Photo {i + 1}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs tracking-[0.25em] uppercase text-primary mb-1">Style</div>
                <div className="text-foreground font-display text-lg">{w.label}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/40 transition-all duration-500 rounded-sm" />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary">Expertise</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4">Πιστοποιήσεις</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass aspect-[3/4] rounded-sm p-5 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors"
              >
                <Award className="w-10 h-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Diploma</div>
                <div className="font-display text-foreground text-sm leading-snug">{c}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
