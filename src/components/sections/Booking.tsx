import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { CalendarIcon, Send, MapPin } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const AREAS = ["Κηφισιά", "Μαρούσι", "Χαλάνδρι", "Βριλήσσια", "Μελίσσια", "Εκάλη", "Νέα Ερυθραία", "Πεντέλη", "Νέα Πεντέλη", "Ανθούσα", "Ντράφι"];
const PHONE = "306975785563";

// Generate 45-min slots for given day
function getSlots(date: Date | undefined): string[] {
  if (!date) return [];
  const day = date.getDay(); // 0=Sun .. 6=Sat
  const isWeekend = day === 0 || day === 6;
  const start = isWeekend ? 10 * 60 : 9 * 60;
  const end = isWeekend ? 17 * 60 : 19 * 60;
  const slots: string[] = [];
  for (let m = start; m + 45 <= end; m += 45) {
    const h = Math.floor(m / 60);
    const mm = m % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`);
  }
  return slots;
}

const schema = z.object({
  name: z.string().trim().min(2, "Συμπλήρωσε όνομα").max(80),
  phone: z.string().trim().min(8, "Έγκυρο τηλέφωνο").max(20),
  address: z.string().trim().min(5, "Συμπλήρωσε διεύθυνση").max(200),
  area: z.string().min(1, "Επίλεξε περιοχή"),
  date: z.date({ message: "Επίλεξε ημερομηνία" }),
  time: z.string().min(1, "Επίλεξε ώρα"),
});

export function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const slots = useMemo(() => getSlots(date), [date]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, address, area, date, time });
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const dateStr = format(result.data.date, "dd/MM/yyyy", { locale: el });
    const message = `Νέο Ραντεβού VIP Barber! ✂️\nΌνομα: ${name}\nΤηλέφωνο: ${phone}\nΔιεύθυνση: ${address}, ${area}\nΗμερομηνία: ${dateStr}\nΏρα: ${time}`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const inputCls =
    "w-full bg-input/40 border border-border focus:border-primary text-foreground rounded-sm px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/50";

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 bg-background"
      aria-label="Smart booking form για ραντεβού κατ οίκον στα Βόρεια Προάστια"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Booking</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-5">
            Κλείσε <span className="text-gradient-gold italic">Ραντεβού</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Συμπλήρωσε τα στοιχεία σου — επιβεβαιώνουμε άμεσα μέσω WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-sm p-6 md:p-10 space-y-5"
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Όνομα</label>
              <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="Το όνομά σου" maxLength={80} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Τηλέφωνο</label>
              <input type="tel" className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="69XXXXXXXX" maxLength={20} />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Διεύθυνση</label>
            <input className={inputCls} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Οδός & αριθμός" maxLength={200} />
            <div className="flex items-center gap-2 mt-2 text-xs text-primary/80">
              <MapPin className="w-3 h-3" /> Εξυπηρέτηση αποκλειστικά στα Βόρεια Προάστια
            </div>
            {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
          </div>

          <div>
            <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Περιοχή</label>
            <select className={cn(inputCls, "appearance-none cursor-pointer")} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">— Επίλεξε δήμο —</option>
              {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            {errors.area && <p className="text-destructive text-xs mt-1">{errors.area}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Ημερομηνία</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-input/40 border-border hover:bg-input/60 hover:text-foreground rounded-sm py-6",
                      !date && "text-muted-foreground/70"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {date ? format(date, "EEEE d MMMM yyyy", { locale: el }) : "Επίλεξε ημέρα"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => { setDate(d); setTime(""); }}
                    disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                    locale={el}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Ώρα</label>
              <select
                className={cn(inputCls, "appearance-none cursor-pointer")}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={!date}
              >
                <option value="">{date ? "— Επίλεξε ώρα —" : "Επίλεξε πρώτα ημέρα"}</option>
                {slots.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.time && <p className="text-destructive text-xs mt-1">{errors.time}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-sm font-semibold tracking-wide flex items-center justify-center gap-3 hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5 transition-all"
            aria-label="Αποστολή ραντεβού μέσω WhatsApp"
          >
            <Send className="w-5 h-5" />
            Επιβεβαίωση μέσω WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Ωράριο: Δευ–Παρ 09:00–19:00 · Σαβ–Κυρ 10:00–17:00
          </p>
        </motion.form>
      </div>
    </section>
  );
}
