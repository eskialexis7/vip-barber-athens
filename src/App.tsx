import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Booking />
      <Footer />
    </main>
  );
}
