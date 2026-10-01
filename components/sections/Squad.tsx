"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { agents } from "@/config/agents";

export function Squad() {
  const [activeId, setActiveId] = useState<string>("gestor");

  const gestorAgent = agents[0];
  const GestorIcon = gestorAgent.icon;
  const activeAgent = agents.find((a) => a.id === activeId) || agents[0];
  const ActiveIcon = activeAgent.icon;
  const peripheralAgents = agents.filter((a) => a.id !== "gestor");

  const handleAgentClick = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  return (
    <section
      id="squad"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-label="Squad de agentes"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/4 rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-body-lg text-txt-3">Não é uma IA fazendo tudo.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <SectionHeader
            title="É uma Squad."
            description="6 agentes especializados. Uma única operação."
          />
        </ScrollReveal>

        <div className="mt-16 lg:mt-24">
          {/* Desktop: Orbital Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-4xl mx-auto" style={{ height: "520px" }}>
              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 520"
                fill="none"
                aria-hidden="true"
              >
                {peripheralAgents.map((agent, i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const rx = 280;
                  const ry = 180;
                  const cx = 400;
                  const cy = 260;
                  const x = cx + rx * Math.cos(angle);
                  const y = cy + ry * Math.sin(angle);
                  return (
                    <line
                      key={agent.id}
                      x1={cx}
                      y1={cy}
                      x2={x}
                      y2={y}
                      className={
                        activeId === agent.id
                          ? "connection-line-active"
                          : "connection-line"
                      }
                      style={{ transition: "all 0.4s ease-out" }}
                    />
                  );
                })}
              </svg>

              {/* Center: Gestor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={() => handleAgentClick("gestor")}
                  aria-label="Agente Gestor: Visão e coordenação da operação"
                  aria-pressed={activeId === "gestor"}
                  className="group flex flex-col items-center gap-3 outline-none"
                >
                  <div
                    className={`
                      w-28 h-28 rounded-3xl flex items-center justify-center
                      border-2 transition-all duration-400 relative
                      ${
                        activeId === "gestor"
                          ? "bg-brand-500/15 border-brand-500/50 shadow-xl shadow-brand-500/15"
                          : "bg-surface-3 border-line-2 hover:border-line-3"
                      }
                    `}
                  >
                    {activeId === "gestor" && (
                      <div className="absolute inset-0 rounded-3xl bg-brand-500/5 animate-pulse-slow" />
                    )}
                    <GestorIcon
                      size={32}
                      className={`relative z-10 transition-colors duration-300 ${
                        activeId === "gestor" ? "text-brand-400" : "text-txt-3"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className={`text-body-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                      activeId === "gestor" ? "text-txt-1" : "text-txt-3"
                    }`}
                  >
                    Gestor
                  </span>
                </button>
              </div>

              {/* Peripheral Agents */}
              {peripheralAgents.map((agent, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const rx = 280;
                const ry = 180;
                const x = 50 + ((rx * Math.cos(angle)) / 400) * 50;
                const y = 50 + ((ry * Math.sin(angle)) / 260) * 50;
                const Icon = agent.icon;
                const isActive = activeId === agent.id;

                return (
                  <div
                    key={agent.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <button
                      onClick={() => handleAgentClick(agent.id)}
                      aria-label={`Agente ${agent.name}: ${agent.tagline}`}
                      aria-pressed={isActive}
                      className="group flex flex-col items-center gap-2.5 outline-none"
                    >
                      <div
                        className={`
                          w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center
                          border transition-all duration-300 relative
                          ${
                            isActive
                              ? "bg-brand-500/15 border-brand-500/40 shadow-lg shadow-brand-500/10"
                              : "bg-surface-3/60 border-line-1 hover:bg-surface-3 hover:border-line-2"
                          }
                        `}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-2xl bg-brand-500/5 animate-pulse-slow" />
                        )}
                        <Icon
                          size={22}
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive ? "text-brand-400" : "text-txt-3 group-hover:text-txt-2"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <span
                          className={`text-caption font-semibold tracking-wide uppercase transition-colors duration-300 ${
                            isActive ? "text-txt-1" : "text-txt-3 group-hover:text-txt-2"
                          }`}
                        >
                          {agent.name}
                        </span>
                        <span
                          className={`text-[0.625rem] transition-colors duration-300 ${
                            isActive ? "text-txt-2" : "text-txt-3"
                          }`}
                        >
                          {agent.status}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center">
              <ScrollReveal>
                <button
                  onClick={() => handleAgentClick("gestor")}
                  aria-label="Agente Gestor"
                  aria-pressed={activeId === "gestor"}
                  className="group flex flex-col items-center gap-2.5 mb-8 outline-none"
                >
                  <div
                    className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300
                      ${
                        activeId === "gestor"
                          ? "bg-brand-500/15 border-brand-500/50 shadow-lg shadow-brand-500/10"
                          : "bg-surface-3 border-line-2"
                      }
                    `}
                  >
                    <GestorIcon
                      size={26}
                      className={activeId === "gestor" ? "text-brand-400" : "text-txt-3"}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className={`text-caption font-semibold uppercase tracking-wide ${
                      activeId === "gestor" ? "text-txt-1" : "text-txt-3"
                    }`}
                  >
                    Gestor
                  </span>
                </button>
              </ScrollReveal>

              <div className="w-px h-8 bg-gradient-to-b from-brand-500/30 to-brand-500/10 mb-6" />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full max-w-sm sm:max-w-lg">
                {peripheralAgents.map((agent, i) => {
                  const Icon = agent.icon;
                  const isActive = activeId === agent.id;
                  return (
                    <ScrollReveal key={agent.id} delay={i * 80}>
                      <button
                        onClick={() => handleAgentClick(agent.id)}
                        aria-label={`Agente ${agent.name}: ${agent.tagline}`}
                        aria-pressed={isActive}
                        className={`
                          w-full flex flex-col items-center gap-2.5 p-4 rounded-2xl border transition-all duration-300 outline-none
                          ${
                            isActive
                              ? "bg-brand-500/10 border-brand-500/30"
                              : "bg-surface-2/40 border-line-1 hover:bg-surface-2/60"
                          }
                        `}
                      >
                        <div
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300
                            ${
                              isActive
                                ? "bg-brand-500/15 border-brand-500/30"
                                : "bg-surface-3/60 border-line-1"
                            }
                          `}
                        >
                          <Icon
                            size={20}
                            className={isActive ? "text-brand-400" : "text-txt-3"}
                            strokeWidth={1.5}
                          />
                        </div>
                        <span
                          className={`text-caption font-semibold uppercase tracking-wide ${
                            isActive ? "text-txt-1" : "text-txt-3"
                          }`}
                        >
                          {agent.name}
                        </span>
                      </button>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Agent Detail */}
          <ScrollReveal>
            <div className="mt-14 lg:mt-16 max-w-lg mx-auto text-center">
              <div
                className="surface-card p-6 lg:p-8 transition-all duration-300"
                key={activeAgent.id}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <ActiveIcon
                    size={20}
                    className="text-brand-400"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-h3 text-txt-1">{activeAgent.name}</h3>
                </div>
                <p className="text-brand-300 text-body-sm font-medium mb-3">
                  {activeAgent.tagline}
                </p>
                <p className="text-body-sm text-txt-2 leading-relaxed">
                  {activeAgent.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}