"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Search,
  BarChart3,
  Tag,
  Zap,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowDown,
} from "lucide-react";

const flowSteps = [
  { icon: Search, label: "Situação identificada" },
  { icon: BarChart3, label: "Análise" },
  { icon: Tag, label: "Classificação" },
  { icon: Zap, label: "Ação" },
];

const actionQueue = [
  {
    agent: "SAC",
    action: "Responder dúvidas de clientes",
    level: "success" as const,
    levelLabel: "Automático",
    state: "Executado",
  },
  {
    agent: "Ads",
    action: "Pausar campanha com baixo desempenho",
    level: "warning" as const,
    levelLabel: "Atenção",
    state: "Aguardando validação",
  },
  {
    agent: "SAC",
    action: "Resposta a reclamação de produto",
    level: "danger" as const,
    levelLabel: "Aprovação",
    state: "Aguardando decisão",
  },
  {
    agent: "Analista",
    action: "Alerta de queda em conversão",
    level: "warning" as const,
    levelLabel: "Atenção",
    state: "Notificado",
  },
];

export function Autonomy() {
  return (
    <section
      id="controle"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-label="Autonomia controlada"
    >
      <div className="absolute inset-0 bg-surface-1/30" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Autonomia controlada"
            title="A IA trabalha."
            titleHighlight="Você continua no controle."
            description="Cada ação pode seguir o nível de autonomia definido para a sua operação."
          />
        </ScrollReveal>

        {/* Flow Visualization */}
        <ScrollReveal delay={200}>
          <div className="mt-16 lg:mt-20 max-w-3xl mx-auto">
            {/* Linear flow */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 mb-12">
              {flowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 lg:gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-3 border border-line-1 flex items-center justify-center">
                        <Icon size={18} className="text-txt-2" strokeWidth={1.5} />
                      </div>
                      <span className="text-body-sm text-txt-2 font-medium whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowDown
                        size={14}
                        className="text-txt-3 lg:rotate-[-90deg] flex-shrink-0 mx-1"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bifurcation */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-16">
              <div className="flex-1 surface-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-status-success/10 border border-status-success/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={18} className="text-status-success" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-txt-1">
                    Executar automaticamente
                  </p>
                  <p className="text-caption text-txt-3">
                    Ações classificadas para execução
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center text-txt-3 text-caption font-medium">
                ou
              </div>
              <div className="flex-1 surface-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-status-warning/10 border border-status-warning/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-status-warning" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-txt-1">
                    Solicitar aprovação
                  </p>
                  <p className="text-caption text-txt-3">
                    Ações que aguardam sua decisão
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Semaphore — Action Queue Interface */}
        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto">
            <div className="surface-elevated overflow-hidden">
              {/* Queue header */}
              <div className="px-5 lg:px-6 py-4 border-b border-line-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-dot" />
                  <span className="text-body-sm font-semibold text-txt-1">
                    Fila de ações
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge level="success" label="Automático" />
                  <StatusBadge level="warning" label="Atenção" className="hidden sm:inline-flex" />
                  <StatusBadge level="danger" label="Aprovação" className="hidden sm:inline-flex" />
                </div>
              </div>

              {/* Queue items */}
              <div className="divide-y divide-line-1">
                {actionQueue.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 lg:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 hover:bg-surface-3/20 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <StatusBadge level={item.level} label={item.levelLabel} />
                      <div className="min-w-0 flex-1">
                        <p className="text-body-sm text-txt-1 font-medium truncate">
                          {item.action}
                        </p>
                        <p className="text-caption text-txt-3">
                          {item.agent}
                        </p>
                      </div>
                    </div>
                    <span className="text-caption text-txt-3 whitespace-nowrap pl-10 sm:pl-0">
                      {item.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Message */}
        <ScrollReveal delay={400}>
          <div className="mt-20 lg:mt-24 text-center max-w-xl mx-auto">
            <h3 className="text-h3 text-txt-1 mb-4">
              Automação não precisa significar perda de controle.
            </h3>
            <p className="text-body text-txt-2">
              A RiseMind AI foi pensada para permitir diferentes níveis de autonomia,
              mantendo decisões importantes visíveis para você.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
