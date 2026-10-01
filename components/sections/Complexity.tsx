"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const operationNodes = [
  "Anúncios",
  "SAC",
  "Ads",
  "Performance",
  "Dados",
  "Decisões",
  "Oportunidades",
];

export function Complexity() {
  return (
    <section
      id="complexidade"
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden"
      aria-label="Complexidade operacional"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-h2 text-txt-1">
              Quanto mais sua operação cresce,
              <br />
              <span className="text-txt-2">mais coisas exigem sua atenção.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Nodes dispersing then converging */}
        <div className="relative max-w-3xl mx-auto">
          {/* Scattered nodes */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-16">
            {operationNodes.map((node, i) => (
              <ScrollReveal key={node} delay={i * 80}>
                <div className="surface-card px-5 py-2.5 text-body-sm text-txt-2 font-medium">
                  {node}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Convergence arrow */}
          <ScrollReveal delay={operationNodes.length * 80 + 200}>
            <div className="flex flex-col items-center gap-6">
              {/* Lines converging */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 50"
                  className="w-48 h-12 text-brand-500"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 5 L100 40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    d="M60 5 L100 40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    d="M100 5 L100 40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <path
                    d="M140 5 L100 40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <path
                    d="M180 5 L100 40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <circle cx="100" cy="42" r="3" fill="currentColor" opacity="0.5" />
                </svg>
              </div>

              {/* RiseMind convergence point */}
              <div className="surface-elevated px-8 py-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse-slow" />
                <span className="text-body font-semibold text-txt-1 tracking-tight">
                  Rise<span className="text-brand-400">Mind</span> AI
                </span>
              </div>

              <p className="text-body-sm text-txt-3 text-center max-w-sm">
                Uma camada de inteligência organizando e acompanhando sua operação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}