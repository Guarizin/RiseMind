"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { agents } from "@/config/agents";

export function FinalCTA() {
  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      aria-label="Chamada final"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h1 text-txt-1 mb-6">
              Sua operação pode crescer
              <br />
              <span className="text-gradient">de um jeito mais inteligente.</span>
            </h2>

            <p className="text-body-lg text-txt-2 mb-10 max-w-xl mx-auto">
              Conheça a RiseMind AI e veja como uma Squad de agentes pode
              trabalhar ao lado da sua operação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="primary" size="lg" href="#contato">
                Solicitar demonstração
              </Button>
              <Button variant="outline" size="lg" href="#contato">
                Falar com a equipe
              </Button>
            </div>

            {/* Mini agent representation */}
            <div className="flex items-center justify-center gap-3">
              {agents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={agent.id}
                    className="w-9 h-9 rounded-xl bg-surface-3/60 border border-line-1 flex items-center justify-center"
                    title={agent.name}
                  >
                    <Icon
                      size={15}
                      className="text-txt-3"
                      strokeWidth={1.5}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}