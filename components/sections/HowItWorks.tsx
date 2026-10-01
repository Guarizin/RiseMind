"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link2, Settings, Eye, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Conecte",
    description: "Conecte sua operação à RiseMind AI.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Configure",
    description: "Defina como sua Squad deve trabalhar.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Acompanhe",
    description:
      "Os agentes passam a acompanhar diferentes áreas da operação.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Automatize",
    description:
      "Defina quais ações podem acontecer automaticamente e quais permanecem sob sua aprovação.",
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden"
      aria-label="Como funciona"
    >
      <div className="absolute inset-0 bg-surface-1/20" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Começar é simples"
            title="Da sua operação à sua Squad de IA."
          />
        </ScrollReveal>

        {/* Desktop: Horizontal Flow */}
        <div className="mt-16 lg:mt-24">
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />

              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <ScrollReveal key={step.number} delay={i * 120}>
                      <div className="relative flex flex-col items-center text-center">
                        {/* Node */}
                        <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-surface-2 border border-line-2 flex items-center justify-center mb-6 group hover:border-brand-500/30 transition-all duration-300">
                          <Icon
                            size={24}
                            className="text-txt-2 group-hover:text-brand-400 transition-colors duration-300"
                            strokeWidth={1.5}
                          />
                          {/* Number badge */}
                          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-brand-500 text-white text-[0.625rem] font-bold flex items-center justify-center">
                            {step.number}
                          </span>
                        </div>

                        <h3 className="text-h3 text-txt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-body-sm text-txt-2 leading-relaxed max-w-[220px]">
                          {step.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden">
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-line-1" />

              <div className="space-y-10">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <ScrollReveal key={step.number} delay={i * 100}>
                      <div className="relative flex gap-5">
                        {/* Node */}
                        <div className="absolute -left-10 w-9 h-9 rounded-xl bg-surface-2 border border-line-2 flex items-center justify-center z-10">
                          <span className="text-[0.625rem] font-bold text-brand-400">
                            {step.number}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Icon
                              size={18}
                              className="text-brand-400"
                              strokeWidth={1.5}
                            />
                            <h3 className="text-h3 text-txt-1">{step.title}</h3>
                          </div>
                          <p className="text-body-sm text-txt-2 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}