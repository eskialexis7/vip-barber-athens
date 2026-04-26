import { motion } from "framer-motion";
import { Scissors, Home, Clock, Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      style={{ background: "var(--gradient-radial-dark)" }}
      aria-label="Σχετικά με τον VIP κινητό κουρέα και τιμοκατάλογος"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary">About</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight">
              Μια <span className="text-gradient-gold italic">διακριτική</span>
              <br /> εμπειρία.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Φέρνω το barber shop στο σπίτι σου. Επαγγελματικός εξοπλισμός,
              αψεγάδιαστη υγιεινή και απόλυτη συγκέντρωση στη δική σου εικόνα —
              όλα μέσα στην άνεση του προσωπικού σου χώρου.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Εξυπηρέτηση αποκλειστικά στα Βόρεια Προάστια Αθήνας, με ραντεβού που
              τηρούνται στο λεπτό.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Home, text: "Κατ' οίκον" },
                { icon: Sparkles, text: "Premium υγιεινή" },
                { icon: Clock, text: "Στο λεπτό" },
                { icon: Scissors, text: "Master barber" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-sm p-10 md:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative">
                <span className="text-xs tracking-[0.3em] uppercase text-primary">Signature Service</span>
                <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
                  VIP Κούρεμα <br /> Κατ' Οίκον
                </h3>
                <div className="hairline my-6" />
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-bold text-gradient-gold font-display">15</span>
                    <span className="text-3xl text-primary">€</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 border border-primary/30">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="font-display italic text-primary tracking-wider text-sm font-semibold">
                      20% Έκπτωση
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3"><span className="text-primary">✓</span> Premium κούρεμα στο χώρο σου</li>
                  <li className="flex gap-3"><span className="text-primary">✓</span> Αποστειρωμένα εργαλεία</li>
                  <li className="flex gap-3"><span className="text-primary">✓</span> Styling & finishing</li>
                  <li className="flex gap-3"><span className="text-primary">✓</span> Καθαριότητα μετά την υπηρεσία</li>
                </ul>
                <a
                  href="#booking"
                  className="mt-8 inline-flex w-full items-center justify-center bg-gradient-gold text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:shadow-[var(--shadow-gold)] transition-all"
                >
                  Κλείσε Ραντεβού
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
