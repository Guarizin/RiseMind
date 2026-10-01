import {
  LayoutDashboard,
  Headphones,
  BarChart3,
  FileText,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface Agent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: string;
}

export const agents: Agent[] = [
  {
    id: "gestor",
    name: "Gestor",
    tagline: "Visão e coordenação da operação.",
    description:
      "Centraliza a visão da operação e ajuda a coordenar informações e decisões entre diferentes áreas.",
    icon: LayoutDashboard,
    status: "Coordenando operação",
  },
  {
    id: "sac",
    name: "SAC",
    tagline: "Atendimento sob acompanhamento.",
    description:
      "Voltado ao acompanhamento das atividades relacionadas ao atendimento e relacionamento operacional.",
    icon: Headphones,
    status: "Acompanhando atendimento",
  },
  {
    id: "analista",
    name: "Analista",
    tagline: "Dados transformados em contexto.",
    description:
      "Analisa informações da operação e ajuda a identificar padrões, desempenho e pontos que merecem atenção.",
    icon: BarChart3,
    status: "Analisando performance",
  },
  {
    id: "anuncios",
    name: "Anúncios",
    tagline: "Seu catálogo sob análise.",
    description:
      "Voltado ao acompanhamento e análise dos anúncios da operação.",
    icon: FileText,
    status: "Monitorando catálogo",
  },
  {
    id: "ads",
    name: "Ads",
    tagline: "Campanhas sob acompanhamento.",
    description:
      "Voltado à análise e acompanhamento das campanhas de publicidade.",
    icon: Megaphone,
    status: "Monitorando campanhas",
  },
  {
    id: "criativo",
    name: "Criativo",
    tagline: "Inteligência aplicada ao conteúdo.",
    description:
      "Apoia necessidades criativas relacionadas à operação.",
    icon: Palette,
    status: "Apoiando conteúdo",
  },
];