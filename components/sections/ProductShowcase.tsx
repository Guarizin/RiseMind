"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ShowcaseModule {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

const modules: ShowcaseModule[] = [
  {
    title: "Uma visão central da operação.",
    description:
      "Acompanhe diferentes áreas da operação a partir de uma experiência integrada, com informações organizadas e acessíveis.",
    imageAlt: "Visão central do dashboard da RiseMind AI",
    imageSrc: "/images/product/dashboard.png",
    imageWidth: 1680,
    imageHeight: 939,
  },
  {
    title: "Agentes trabalhando em diferentes frentes.",
    description:
      "Cada agente acompanha sua área de especialização, identificando padrões e pontos de atenção na operação.",
    imageAlt: "Agentes de IA trabalhando na operação",
    imageSrc: "/images/product/agents.png",
    imageWidth: 2010,
    imageHeight: 782,
  },
  {
    title: "Decisões importantes continuam visíveis.",
    description:
      "Ações que exigem sua aprovação permanecem organizadas e acessíveis para que você mantenha o controle.",
    imageAlt: "Painel de aprovações da RiseMind AI",
    imageSrc: "/images/product/approvals.png",
    imageWidth: 1851,
    imageHeight: 849,
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
                    <div className="group relative overflow-hidden rounded-2xl border border-line-2 bg-surface-2 p-1.5 shadow-2xl shadow-black/30 sm:p-2">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-70" />
                      <div className="relative overflow-hidden rounded-[0.7rem] bg-[#090a0d]">
                        <Image
                          src={mod.imageSrc}
                          alt={mod.imageAlt}
                          width={mod.imageWidth}
                          height={mod.imageHeight}
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                          quality={92}
                        />
                      </div>
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
