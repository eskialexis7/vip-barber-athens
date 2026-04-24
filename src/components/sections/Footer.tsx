import { Phone, MessageCircle, Clock, Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16 bg-background" aria-label="Επικοινωνία VIP Barber Athens">
      <span className="sr-only">
        VIP Barber Athens — κομμωτηριο στο σπιτι βορεια προαστια, κινητος κουρεας αθηνα,
        vip barber athens, κουρεμα κατ οικον, premium κουρέας Κηφισιά, Μαρούσι, Χαλάνδρι, Εκάλη.
      </span>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="font-display text-xl">VIP Barber</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VIP Barber premium υπηρεσίας στα Βόρεια Προάστια Αθήνας. Κούρεμα
              κατ' οίκον με επαγγελματισμό και διακριτικότητα.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Επικοινωνία</h4>
            <div className="space-y-3">
              <a href="tel:+306975785563" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors" aria-label="Κάλεσε VIP Barber">
                <Phone className="w-4 h-4" /> +30 697 578 5563
              </a>
              <a href="https://wa.me/306975785563" target="_blank" rel="noopener" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors" aria-label="WhatsApp VIP Barber">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Ωράριο</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /> Δευ – Παρ · 09:00 – 19:00</div>
              <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /> Σαβ – Κυρ · 10:00 – 17:00</div>
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VIP Barber Athens. All rights reserved.</p>
          <p>Βόρεια Προάστια · Athens, Greece</p>
        </div>
      </div>
    </footer>
  );
}
