"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que é a RiseMind AI?",
    answer:
      "A RiseMind AI é uma plataforma de AI Ops criada para operações no Mercado Livre. Ela funciona como uma Squad de agentes de inteligência artificial que acompanham, analisam e podem automatizar diferentes áreas da sua operação.",
  },
  {
    question: "Para quem a RiseMind AI foi criada?",
    answer:
      "Para vendedores e empresas que operam no Mercado Livre e lidam diariamente com anúncios, campanhas, atendimento, análise de dados e decisões operacionais.",
  },
  {
    question: "A RiseMind AI funciona com Mercado Livre?",
    answer:
      "Sim. A RiseMind AI foi projetada especificamente para operações no Mercado Livre, integrando-se às informações da sua operação nessa plataforma.",
  },
  {
    question: "O que são os agentes de IA?",
    answer:
      "São módulos especializados que acompanham diferentes áreas da operação. Cada agente possui uma função específica — como gestão, atendimento, análise, anúncios, campanhas e criação de conteúdo.",
  },
  {
    question: "Os agentes trabalham juntos?",
    answer:
      "Sim. Os agentes fazem parte de um mesmo sistema e compartilham contexto. Eles foram projetados para funcionar de forma integrada, não como ferramentas isoladas.",
  },
  {
    question: "A IA pode executar ações automaticamente?",
    answer:
      "Sim, mas apenas dentro dos limites que você definir. Cada tipo de ação pode ser classificado para execução automática, para validação ou para aguardar sua aprovação.",
  },
  {
    question: "Eu continuo tendo controle?",
    answer:
      "Sempre. A RiseMind AI foi pensada para oferecer diferentes níveis de autonomia, mantendo decisões importantes visíveis e acessíveis para você.",
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer:
      "Não. A RiseMind AI funciona diretamente pelo navegador. Basta acessar a plataforma para começar.",
  },
  {
    question: "Como conhecer a plataforma?",
    answer:
      "Você pode solicitar uma demonstração através do nosso formulário de contato ou falar diretamente com a equipe pelo WhatsApp.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line-1 last:border-b-0">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 rounded-lg"
        >
          <span
            className={`text-body font-medium transition-colors duration-200 ${
              isOpen ? "text-txt-1" : "text-txt-2 group-hover:text-txt-1"
            }`}
          >
            {item.question}
          </span>
          <ChevronDown
            size={18}
            className={`text-txt-3 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-brand-400" : ""
            }`}
          />
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="region"
      >
        <p className="pb-5 text-body-sm text-txt-2 leading-relaxed pr-10">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-label="Perguntas frequentes"
    >
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas frequentes."
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 lg:mt-16 max-w-2xl mx-auto">
            <div className="surface-card divide-y-0 px-6 lg:px-8">
              {faqItems.map((item, i) => (
                <FAQAccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}