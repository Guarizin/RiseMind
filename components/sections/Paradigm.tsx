"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    text: "Um dashboard mostra o que aconteceu.",
    opacity: "text-txt-3",
  },
  {
    number: "02",
    text: "A RiseMind AI ajuda a entender o que fazer.",
    opacity: "text-txt-2",
  },
  {
    number: "03",
    text: "E pode agir junto com você.",
    opacity: "text-txt-1",
    highlight: true,
  },
];

export function Paradigm() {
  return (
    <section
      className="relative py-16 sm:py-24 lg:py-40 overflow-hidden"
      aria-label="Paradigma"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-line-2 to-transparent ml-[50%] hidden lg:block" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto space-y-20 lg:space-y-28">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="text-center">
                <span className="text-label text-brand-400/60 tracking-widest mb-4 block">
                  {step.number}
                </span>
                <p
                  className={`text-h2 ${step.opacity} ${
                    step.highlight ? "font-bold" : "font-medium"
                  }`}
                >
                  {step.text}
                </p>
                {step.highlight && (
                  <div className="mt-6 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}