"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { agents } from "@/config/agents";
import { Bell, ChevronDown, MoreHorizontal, TrendingUp } from "lucide-react";

const heroModules = [
  // Lado Esquerdo (3 agentes)
  { agent: agents[0], pos: "-left-[4%] top-[12%]", delay: 500 }, // Gestor
  { agent: agents[1], pos: "-left-[8%] top-[42%]", delay: 700 }, // SAC
  { agent: agents[3], pos: "-left-[4%] top-[72%]", delay: 900 }, // Anúncios

  // Lado Direito (3 agentes)
  { agent: agents[2], pos: "-right-[4%] top-[12%]", delay: 600 }, // Analista
  { agent: agents[4], pos: "-right-[8%] top-[42%]", delay: 800 }, // Ads
  { agent: agents[5], pos: "-right-[4%] top-[72%]", delay: 1000 }, // Criativo
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="produto" className="relative min-h-svh flex items-center overflow-hidden noise-bg">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="relative">
          {/* Badge */}
          <div className={`flex justify-center mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/15 text-brand-300 text-label uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
              AI Ops para Mercado Livre
            </span>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-display text-txt-1 font-bold transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Sua operação.<br />
              <span className="text-gradient">Agora com uma Squad de IA.</span>
            </h1>
            <p className={`mt-6 text-body-lg text-txt-2 max-w-xl mx-auto transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Agentes especializados trabalhando juntos para analisar, acompanhar e automatizar diferentes áreas da sua operação.
            </p>
            <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Button variant="primary" size="lg" href="#contato" className="w-full sm:w-auto">Solicitar demonstração</Button>
              <Button variant="secondary" size="lg" href="#squad" className="w-full sm:w-auto">Ver como funciona</Button>
            </div>
            <p className={`mt-5 text-caption text-txt-3 transition-all duration-700 delay-[400ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
              Automação com controle. Você decide até onde a IA pode agir.
            </p>
          </div>

          {/* Product Preview Area */}
          <div className={`mt-16 lg:mt-20 relative transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Agent Modules - Desktop */}
            <div className="hidden xl:block">
              {heroModules.map(({ agent, pos, delay }) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={agent.id}
                    className={`absolute ${pos} z-20 transition-all ease-out`}
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
                        <p className="text-[0.7rem] font-semibold text-txt-1 tracking-wide uppercase">{agent.name}</p>
                        <p className="text-[0.65rem] text-txt-3">{agent.status}</p>
                      </div>
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Abstract orchestration visual — not a product screen */}
            <div className="relative max-w-5xl mx-auto">
              <div className="surface-elevated overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8.5] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-surface-3/80 to-surface-1/40" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative z-10 p-4 sm:p-6 lg:p-10 h-full flex flex-col opacity-0 pointer-events-none" aria-hidden="true">
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-7">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-brand-400/80" />
                        <div className="w-2 h-2 rounded-full bg-surface-4" />
                        <div className="w-2 h-2 rounded-full bg-surface-4" />
                      </div>
                      <span className="hidden sm:block h-4 w-px bg-line-2" />
                      <p className="text-[0.6rem] sm:text-[0.7rem] font-medium tracking-wide text-txt-2">Visão geral da operação</p>
                    </div>
                    <div className="flex items-center gap-2 text-txt-3">
                      <span className="hidden sm:inline text-[0.65rem]">Últimos 30 dias</span>
                      <Bell size={13} />
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 flex gap-3 sm:gap-6">
                    <aside className="hidden md:flex flex-col gap-2 w-36 lg:w-40 border-r border-line-1 pr-4">
                      <p className="text-[0.58rem] uppercase tracking-[0.15em] text-txt-3 px-2 mb-1">Workspace</p>
                      {[
                        ["Resumo", true], ["Vendas", false], ["Atendimento", false], ["Campanhas", false], ["Catálogo", false],
                      ].map(([label, active]) => (
                        <div key={label as string} className={`h-8 px-2 rounded-lg flex items-center text-[0.65rem] ${active ? "bg-brand-500/15 text-brand-300 border border-brand-500/20" : "text-txt-3"}`}>
                          <span className={`mr-2 w-1.5 h-1.5 rounded-full ${active ? "bg-brand-400" : "bg-surface-4"}`} />
                          {label as string}
                        </div>
                      ))}
                      <div className="mt-auto rounded-lg border border-brand-500/15 bg-brand-500/5 p-2.5">
                        <p className="text-[0.58rem] text-brand-300">6 agentes ativos</p>
                        <p className="text-[0.55rem] text-txt-3 mt-1">Tudo sob controle</p>
                      </div>
                    </aside>
                    <div className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.14em] text-txt-3">Performance</p>
                          <p className="text-[0.8rem] sm:text-sm font-semibold text-txt-1 mt-0.5">Bom dia, equipe</p>
                        </div>
                        <button className="w-7 h-7 rounded-lg border border-line-1 grid place-items-center text-txt-3" aria-label="Mais opções"><MoreHorizontal size={14} /></button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {[
                          ["Faturamento", "R$ 48,2k", "+12,4%"],
                          ["Pedidos", "1.284", "+8,2%"],
                          ["Conversão", "4,86%", "+0,6%"],
                        ].map(([label, value, change]) => (
                          <div key={label} className="rounded-xl bg-surface-4/20 border border-line-1 p-2.5 sm:p-4">
                            <p className="text-[0.52rem] sm:text-[0.62rem] text-txt-3 truncate">{label}</p>
                            <p className="text-[0.75rem] sm:text-base font-semibold text-txt-1 mt-1 truncate">{value}</p>
                            <p className="hidden sm:flex items-center gap-1 text-[0.6rem] text-status-success mt-1"><TrendingUp size={10} />{change}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 min-h-0 grid grid-cols-5 gap-3 sm:gap-4">
                        <div className="col-span-3 rounded-xl bg-surface-4/15 border border-line-1 p-3 sm:p-4 flex flex-col min-h-0">
                          <div className="flex items-center justify-between">
                            <div><p className="text-[0.65rem] font-medium text-txt-2">Evolução de vendas</p><p className="text-[0.55rem] text-txt-3 mt-0.5">Receita diária</p></div>
                            <span className="text-[0.58rem] text-brand-300">Este mês</span>
                          </div>
                          <div className="flex-1 min-h-[62px] mt-3 relative flex items-end gap-1.5 sm:gap-2">
                            {[32, 46, 38, 58, 49, 72, 62, 85, 76, 92, 80, 100].map((height, i) => <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-600/30 to-brand-400/90" style={{ height: `${height}%` }} />)}
                            <div className="absolute inset-x-0 top-[35%] border-t border-dashed border-brand-400/30" />
                          </div>
                        </div>
                        <div className="col-span-2 rounded-xl bg-surface-4/15 border border-line-1 p-3 sm:p-4 hidden sm:block">
                          <p className="text-[0.65rem] font-medium text-txt-2">Ações da IA</p>
                          <div className="mt-3 space-y-3">
                            {["3 campanhas otimizadas", "12 tickets priorizados", "4 anúncios revisados"].map((item, i) => <div key={item} className="flex gap-2"><span className={`mt-1 w-1.5 h-1.5 rounded-full flex-none ${i === 1 ? "bg-status-warning" : "bg-status-success"}`} /><p className="text-[0.56rem] leading-relaxed text-txt-3">{item}</p></div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 sm:p-10">
                  <p className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.24em] text-brand-300/80">Inteligência em movimento</p>
                  <p className="mt-2 text-xs sm:text-sm text-txt-2 text-center">Uma squad conectada, trabalhando em conjunto</p>
                  <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 1000 520" fill="none" aria-hidden="true">
                    <path d="M120 125 C280 125 310 235 500 260 C690 285 730 125 880 125" className="connection-line-active" />
                    <path d="M120 385 C285 385 325 285 500 260 C675 235 715 385 880 385" className="connection-line-active" />
                    <path d="M120 125 C280 125 310 385 500 260 C690 135 730 385 880 385" className="connection-line" />
                    <path d="M120 385 C280 385 310 125 500 260 C690 395 730 125 880 125" className="connection-line" />
                    <path d="M120 125 C285 185 340 155 500 260 C660 365 720 325 880 385" className="connection-line" />
                    <path d="M120 385 C285 325 340 365 500 260 C660 155 720 185 880 125" className="connection-line" />
                    <path d="M120 125 C300 225 320 300 500 260 C680 220 700 295 880 385" className="connection-line" />
                    <path d="M120 385 C300 295 320 220 500 260 C680 300 700 225 880 125" className="connection-line" />
                    <path d="M305 230 C380 230 420 248 500 260" className="connection-line-active" />
                    <path d="M695 230 C620 230 580 248 500 260" className="connection-line-active" />
                    <path d="M340 365 C400 330 440 292 500 260" className="connection-line-active" />
                    <path d="M660 365 C600 330 560 292 500 260" className="connection-line-active" />
                  </svg>
                  <div className="absolute left-[10%] top-[20%] rounded-xl border border-line-2 bg-surface-2/85 backdrop-blur-sm px-3 py-2 text-[0.6rem] text-txt-2">Dados da operação</div>
                  <div className="absolute left-[10%] bottom-[20%] rounded-xl border border-line-2 bg-surface-2/85 backdrop-blur-sm px-3 py-2 text-[0.6rem] text-txt-2">Sinais do mercado</div>
                  <div className="absolute right-[10%] top-[20%] rounded-xl border border-line-2 bg-surface-2/85 backdrop-blur-sm px-3 py-2 text-[0.6rem] text-txt-2">Decisões claras</div>
                  <div className="absolute right-[10%] bottom-[20%] rounded-xl border border-line-2 bg-surface-2/85 backdrop-blur-sm px-3 py-2 text-[0.6rem] text-txt-2">Ações acompanhadas</div>
                  <span className="absolute z-10 left-[22%] top-[42%] rounded-full border border-brand-500/30 bg-surface-2/90 px-2 py-1 text-[0.48rem] sm:px-3 sm:py-1.5 sm:text-[0.6rem] text-brand-200/90">Agentes especializados</span>
                  <span className="absolute z-10 right-[22%] top-[42%] rounded-full border border-brand-500/30 bg-surface-2/90 px-2 py-1 text-[0.48rem] sm:px-3 sm:py-1.5 sm:text-[0.6rem] text-brand-200/90">Visão centralizada</span>
                  <span className="absolute z-10 left-[25%] bottom-[23%] rounded-full border border-brand-500/30 bg-surface-2/90 px-2 py-1 text-[0.48rem] sm:px-3 sm:py-1.5 sm:text-[0.6rem] text-brand-200/90">Decisões assistidas</span>
                  <span className="absolute z-10 right-[22%] bottom-[23%] rounded-full border border-brand-500/30 bg-surface-2/90 px-2 py-1 text-[0.48rem] sm:px-3 sm:py-1.5 sm:text-[0.6rem] text-brand-200/90">Automação com controle</span>
                  <div className="relative z-10 grid place-items-center w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-brand-400/40 bg-brand-500/10 shadow-[0_0_60px_rgba(249,115,22,0.2)]">
                    <div className="absolute inset-2 rounded-full border border-brand-400/20 animate-pulse-slow" />
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-500/20 border border-brand-400/50 grid place-items-center"><div className="w-4 h-4 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" /></div>
                  </div>
                  <p className="relative z-10 mt-4 text-[0.65rem] sm:text-xs font-medium text-txt-1">RiseMind AI</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-2 to-transparent pointer-events-none z-30" />
              </div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-500/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`flex justify-center mt-12 transition-all duration-700 delay-[800ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
            <a href="#complexidade" className="text-txt-3 hover:text-txt-2 transition-colors animate-bounce" aria-label="Rolar para baixo">
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
