"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ShowcaseModule {
  title: string;
  description: string;
  imagePlaceholder: string;
  imageAlt: string;
  imageSrc: string;
}

const modules: ShowcaseModule[] = [
  {
    title: "Uma visão central da operação.",
    description:
      "Acompanhe diferentes áreas da operação a partir de uma experiência integrada, com informações organizadas e acessíveis.",
    imagePlaceholder: "Dashboard principal",
    imageAlt: "Visão central do dashboard da RiseMind AI",
    imageSrc: "/images/product/dashboard.webp",
  },
  {
    title: "Agentes trabalhando em diferentes frentes.",
    description:
      "Cada agente acompanha sua área de especialização, identificando padrões e pontos de atenção na operação.",
    imagePlaceholder: "Painel de agentes",
    imageAlt: "Agentes de IA trabalhando na operação",
    imageSrc: "/images/product/agents.webp",
  },
  {
    title: "Decisões importantes continuam visíveis.",
    description:
      "Ações que exigem sua aprovação permanecem organizadas e acessíveis para que você mantenha o controle.",
    imagePlaceholder: "Fila de aprovações",
    imageAlt: "Painel de aprovações da RiseMind AI",
    imageSrc: "/images/product/approvals.webp",
  },
];

export function ProductShowcase() {
  return (
    <section
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden"
      aria-label="Produto"
    >
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Produto"
            title="Veja a RiseMind AI trabalhando."
          />
        </ScrollReveal>

        <div className="mt-16 lg:mt-24 space-y-20 lg:space-y-28">
          {modules.map((mod, i) => {
            const isReversed = i % 2 === 1;
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Text */}
                  <div className="w-full min-w-0 lg:w-5/12 text-center lg:text-left">
                    <h3 className="text-h3 text-txt-1 mb-4">{mod.title}</h3>
                    <p className="text-body text-txt-2 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full min-w-0 lg:w-7/12">
                    <div className="surface-elevated overflow-hidden aspect-[16/10] relative group">
                      {/* Placeholder UI */}
                      <div className="absolute inset-0 bg-gradient-to-br from-surface-3/60 to-surface-2/30" />
                      <div className="absolute inset-0 grid-bg opacity-30" />

                      <div className="relative z-10 h-full flex items-center justify-center p-8">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-brand-500/30" />
                          </div>
                          <p className="text-caption text-txt-3 font-medium">
                            {mod.imagePlaceholder}
                          </p>
                          <p className="text-[0.625rem] text-txt-3/50">
                            Screenshot será inserido aqui
                          </p>
                        </div>
                      </div>

                      {/* Glow */}
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-500/5 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
