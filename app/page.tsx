import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Complexity } from "@/components/sections/Complexity";
import { Paradigm } from "@/components/sections/Paradigm";
import { Squad } from "@/components/sections/Squad";
import { Autonomy } from "@/components/sections/Autonomy";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Comparison } from "@/components/sections/Comparison";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Complexity />
        <Paradigm />
        <Squad />
        <Autonomy />
        <ProductShowcase />
        <HowItWorks />
        <Benefits />
        <Comparison />
        <FinalCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}