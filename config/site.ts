export const siteConfig = {
  name: "RiseMind AI",
  title: "RiseMind AI | AI Ops para Mercado Livre",
  description:
    "Uma Squad de Inteligência Artificial para analisar, acompanhar e automatizar diferentes áreas da sua operação no Mercado Livre.",
  url: "https://risemind.ai",
  systemUrl: "https://app.risemind.ai",
  whatsapp: {
    number: "5511994754350",
    message: "Olá! Quero conhecer a RiseMind AI.",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  email: "contato@risemind.ai",
  social: {
    instagram: "https://instagram.com/risemindai",
    linkedin: "https://linkedin.com/company/risemindai",
  },
  og: {
    image: "/og-image.jpg",
    type: "website" as const,
  },
};

export const navLinks = [
  { label: "Produto", href: "#produto" },
  { label: "Agentes", href: "#squad" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Controle", href: "#controle" },
  { label: "FAQ", href: "#faq" },
];