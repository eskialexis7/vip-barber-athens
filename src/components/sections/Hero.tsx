import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="VIP Barber - Κινητός Κουρέας Βόρεια Προάστια Αθήνα"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium VIP Barber setup — κούρεμα κατ οίκον"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center md:text-left max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 justify-center md:justify-start mb-6"
        >
          <span className="h-px w-12 bg-gradient-gold" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            VIP Barber · Athens
          </span>
          <span className="h-px w-12 bg-gradient-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          Premium Barbering,
          <br />
          <span className="text-gradient-gold italic">Στο Χώρο Σου.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
        >
          Διακριτική, εξατομικευμένη εμπειρία κουρέματος κατ' οίκον — αποκλειστικά
          στα Βόρεια Προάστια. Χωρίς αναμονές. Χωρίς συμβιβασμούς.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#booking"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm font-semibold tracking-wide transition-all hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
            aria-label="Κλείσε ραντεβού για κούρεμα κατ οίκον"
          >
            <Calendar className="w-5 h-5" />
            Κλείσε Ραντεβού
          </a>
          <a
            href="tel:+306975785563"
            className="group inline-flex items-center justify-center gap-3 border border-primary/40 text-foreground px-8 py-4 rounded-sm font-semibold tracking-wide transition-all hover:bg-primary/10 hover:border-primary"
            aria-label="Άμεση κλήση κινητού κουρέα Αθήνα"
          >
            <Phone className="w-5 h-5 text-primary" />
            Άμεση Κλήση
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-muted-foreground"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
