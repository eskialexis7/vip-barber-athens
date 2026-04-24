import { motion } from "framer-motion";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import cert1 from "@/assets/cert-1.png";
import cert2 from "@/assets/cert-2.png";
import cert3 from "@/assets/cert-3.png";
import cert4 from "@/assets/cert-4.png";

const work = [
  { src: work1, label: "Skin Fade" },
  { src: work2, label: "Hair Design" },
  { src: work3, label: "Textured Taper" },
  { src: work4, label: "Classic Side Part" },
  { src: work5, label: "Beard & Fade" },
  { src: work6, label: "Signature Design" },
];

const certs = [
  { src: cert1, label: "International Barber Certificate" },
  { src: cert2, label: "Barber Student Commitment" },
  { src: cert3, label: "Certificate of Excellence" },
  { src: cert4, label: "Eagles of Beauty 2024" },
];

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
              className="mb-5 break-inside-avoid relative group overflow-hidden rounded-sm bg-card"
            >
              <img
                src={w.src}
                alt={`${w.label} — VIP Barber Athens`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
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
            <div className="hairline w-32 mx-auto mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-sm p-3 group hover:border-primary/40 transition-colors"
              >
                <div className="overflow-hidden rounded-sm bg-white">
                  <img
                    src={c.src}
                    alt={`${c.label} — Thanasis Alamaras Salaris`}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 px-1 pb-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-1">Diploma</div>
                  <div className="font-display text-foreground text-sm leading-snug">{c.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
