"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Minus, Zap, Layers, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Minus,
    title: "Menos trabalho operacional",
    description:
      "Reduza atividades repetitivas e concentre sua atenção onde ela realmente importa.",
  },
  {
    icon: Zap,
    title: "Mais velocidade",
    description:
      "Agentes especializados podem acompanhar diferentes frentes simultaneamente.",
  },
  {
    icon: Layers,
    title: "Operação centralizada",
    description:
      "Reúna diferentes áreas da operação em uma experiência integrada.",
  },
  {
    icon: Shield,
    title: "Automação controlada",
    description:
      "Defina onde a IA pode agir e onde você prefere manter a decisão.",
  },
  {
    icon: TrendingUp,
    title: "Preparada para escalar",
    description:
      "Estruture processos capazes de acompanhar o crescimento da operação.",
  },
];

export function Benefits() {
  return (
    <section
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden"
      aria-label="Benefícios"
    >
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            title="Menos trabalho repetitivo."
            titleHighlight="Mais inteligência na operação."
          />
        </ScrollReveal>

        {/* Editorial layout — alternating */}
        <div className="mt-16 lg:mt-24">
          {/* Top row: 2 items wide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {benefits.slice(0, 2).map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={i * 100}>
                  <div className="surface-card p-7 lg:p-8 h-full group hover:border-line-2 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                      <div className="w-11 h-11 rounded-xl bg-brand-500/8 border border-brand-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/12 transition-colors duration-300">
                        <Icon
                          size={20}
                          className="text-brand-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-h3 text-txt-1 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-body-sm text-txt-2 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.slice(2).map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={(i + 2) * 100}>
                  <div className="surface-card p-7 lg:p-8 h-full group hover:border-line-2 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-brand-500/8 border border-brand-500/15 flex items-center justify-center mb-5 group-hover:bg-brand-500/12 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-brand-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-h3 text-txt-1 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-body-sm text-txt-2 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
