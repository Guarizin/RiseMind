"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowDown, User, Bot } from "lucide-react";

const withoutSteps = [
  "Você procura",
  "Você analisa",
  "Você decide",
  "Você executa",
  "Você acompanha",
];

const withSteps = [
  "Agentes acompanham",
  "A IA identifica",
  "A plataforma analisa",
  "Ação é sugerida ou executada",
  "Você mantém controle",
];

export function Comparison() {
  return (
    <section
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-label="Comparação"
    >
      <div className="absolute inset-0 bg-surface-1/20" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            title="De operação manual para operação assistida por inteligência."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
              {/* Without */}
              <div className="surface-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-surface-4 flex items-center justify-center">
                    <User size={16} className="text-txt-3" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-label uppercase tracking-widest text-txt-3">
                      Sem RiseMind
                    </p>
                  </div>
                </div>

                <div className="space-y-0">
                  {withoutSteps.map((step, i) => (
                    <div key={step}>
                      <div className="flex items-center gap-3 py-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-txt-3/40 flex-shrink-0" />
                        <span className="text-body-sm text-txt-3">{step}</span>
                      </div>
                      {i < withoutSteps.length - 1 && (
                        <div className="flex justify-center">
                          <ArrowDown size={12} className="text-txt-3/30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* With */}
              <div className="surface-elevated p-6 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Bot size={16} className="text-brand-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-label uppercase tracking-widest text-brand-400">
                      Com RiseMind AI
                    </p>
                  </div>
                </div>

                <div className="space-y-0">
                  {withSteps.map((step, i) => (
                    <div key={step}>
                      <div className="flex items-center gap-3 py-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        <span className="text-body-sm text-txt-1 font-medium">
                          {step}
                        </span>
                      </div>
                      {i < withSteps.length - 1 && (
                        <div className="flex justify-center">
                          <ArrowDown size={12} className="text-brand-500/30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}