"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { agents } from "@/config/agents";
import { ChevronDown } from "lucide-react";

const heroModules = [
  { agent: agents[2], x: "right-[2%]", y: "top-[18%]", delay: 600 },
  { agent: agents[4], x: "right-[6%]", y: "top-[48%]", delay: 800 },
  { agent: agents[0], x: "left-[3%]", y: "top-[22%]", delay: 500 },
  { agent: agents[1], x: "left-[5%]", y: "top-[52%]", delay: 700 },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="produto"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
      aria-label="Seção principal"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-[15%] left-[20%] w-80 h-80 bg-brand-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-brand-600/5 rounded-full blur-[120px]" />

      <Container className="relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="relative">
          {/* Badge */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/8 border border-brand-500/15 text-brand-300 text-label uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
              AI Ops para Mercado Livre
            </span>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className={`text-display text-txt-1 transition-all duration-700 ease-out delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Sua operação.
              <br />
              <span className="text-gradient">Agora com uma Squad de IA.</span>
            </h1>

            <p
              className={`mt-6 text-body-lg text-txt-2 max-w-xl mx-auto transition-all duration-700 ease-out delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Agentes especializados trabalhando juntos para analisar, acompanhar
              e automatizar diferentes áreas da sua operação.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Button variant="primary" size="lg" href="#contato">
                Solicitar demonstração
              </Button>
              <Button variant="secondary" size="lg" href="#squad">
                Ver como funciona
              </Button>
            </div>

            {/* Microcopy */}
            <p
              className={`mt-5 text-caption text-txt-3 transition-all duration-700 ease-out delay-[400ms] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              Automação com controle. Você decide até onde a IA pode agir.
            </p>
          </div>

          {/* Product Preview Area */}
          <div
            className={`mt-16 lg:mt-20 relative transition-all duration-1000 ease-out delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Agent Modules - Desktop only */}
            <div className="hidden xl:block">
              {heroModules.map(({ agent, x, y, delay }, i) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={agent.id}
                    className={`absolute ${x} ${y} z-20 transition-all ease-out`}
                    style={{
                      transitionDuration: "800ms",
                      transitionDelay: `${delay}ms`,
                      opacity: loaded ? 1 : 0,
                      transform: loaded ? "translateY(0)" : "translateY(16px)",
                    }}
                  >
                    <div className="surface-card px-4 py-3 flex items-center gap-3 min-w-[200px]">
                      <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-brand-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.7rem] font-semibold text-txt-1 tracking-wide uppercase">
                          {agent.name}
                        </p>
                        <p className="text-[0.65rem] text-txt-3">{agent.status}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 block animate-pulse-dot" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dashboard Placeholder */}
            <div className="relative max-w-5xl mx-auto">
              <div className="surface-elevated overflow-hidden aspect-[16/9] lg:aspect-[16/8.5] relative">
                {/* Stylized abstract placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-surface-3/80 to-surface-1/40" />
                <div className="absolute inset-0 grid-bg opacity-40" />

                {/* Placeholder UI elements */}
                <div className="relative z-10 p-6 lg:p-10 h-full flex flex-col">
                  {/* Top bar */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-surface-4" />
                    <div className="w-3 h-3 rounded-full bg-surface-4" />
                    <div className="w-3 h-3 rounded-full bg-surface-4" />
                    <div className="ml-4 h-3 w-40 bg-surface-4/50 rounded-full" />
                  </div>

                  {/* Sidebar + Content */}
                  <div className="flex-1 flex gap-6">
                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col gap-3 w-44">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded-lg ${
                            i === 0
                              ? "bg-brand-500/15 border border-brand-500/20"
                              : "bg-surface-4/30"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Main content area */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex gap-4">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 h-20 lg:h-24 rounded-xl bg-surface-4/20 border border-line-1"
                          />
                        ))}
                      </div>
                      <div className="flex-1 rounded-xl bg-surface-4/15 border border-line-1" />
                    </div>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-2 to-transparent" />
              </div>

              {/* Frame glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-500/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`flex justify-center mt-12 transition-all duration-700 ease-out delay-[800ms] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#complexidade"
              className="text-txt-3 hover:text-txt-2 transition-colors animate-bounce"
              aria-label="Rolar para baixo"
            >
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}