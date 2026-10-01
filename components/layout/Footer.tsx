import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Produto: [
    { label: "Agentes", href: "#squad" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Controle", href: "#controle" },
  ],
  Empresa: [
    { label: "Contato", href: "#contato" },
  ],
  Acesso: [
    { label: "Acessar plataforma", href: siteConfig.systemUrl },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
  ],
};

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-line-1 bg-surface-1/40">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-1.5" aria-label="RiseMind AI">
              <span className="text-lg font-bold text-txt-1 tracking-tight">
                Rise<span className="text-brand-400">Mind</span>
              </span>
              <span className="text-[0.65rem] font-semibold text-brand-400 tracking-wider uppercase mt-0.5">
                AI
              </span>
            </a>
            <p className="mt-3 text-body-sm text-txt-3 max-w-xs">
              AI Ops para Mercado Livre.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 lg:col-span-2">
              <h3 className="text-label uppercase tracking-widest text-txt-3 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm text-txt-2 hover:text-txt-1 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-line-1 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-txt-3">
            © {new Date().getFullYear()} RiseMind AI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-txt-3 hover:text-txt-1 transition-colors text-caption"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-txt-3 hover:text-txt-1 transition-colors text-caption"
                aria-label="Instagram"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}