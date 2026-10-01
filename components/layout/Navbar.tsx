"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, navLinks } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
        ${
          isScrolled
            ? "bg-surface-0/80 backdrop-blur-xl border-b border-line-1"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <nav
          role="navigation"
          aria-label="Navegação principal"
          className="flex items-center justify-between h-16 lg:h-[4.25rem]"
        >
          {/* Logo */}
          <a
            href="/"
            className="relative z-50 flex items-center gap-1.5 group"
            aria-label="RiseMind AI — Página inicial"
          >
            <span className="text-lg font-bold text-txt-1 tracking-tight">
              Rise<span className="text-brand-400">Mind</span>
            </span>
            <span className="text-[0.65rem] font-semibold text-brand-400 tracking-wider uppercase mt-0.5">
              AI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-body-sm text-txt-2 hover:text-txt-1 transition-colors duration-200 rounded-lg hover:bg-surface-3/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.systemUrl}
              className="text-body-sm text-txt-2 hover:text-txt-1 transition-colors duration-200 flex items-center gap-1"
            >
              Acessar plataforma
              <ArrowUpRight size={14} className="opacity-50" />
            </a>
            <Button variant="primary" size="sm" href="#contato">
              Solicitar demonstração
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 lg:hidden p-2 -mr-2 text-txt-2 hover:text-txt-1 transition-colors"
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out
          ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="absolute inset-0 bg-surface-0/95 backdrop-blur-2xl"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`
            relative z-10 flex flex-col pt-24 pb-8 px-6 h-full
            transition-transform duration-300 ease-out
            ${isMobileOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  block py-3.5 px-4 text-lg font-medium text-txt-1 rounded-xl
                  hover:bg-surface-3/60 transition-all duration-200
                  ${isMobileOpen ? "animate-fade-in-up" : ""}
                `}
                style={{ animationDelay: `${i * 60 + 100}ms`, animationFillMode: "forwards" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={siteConfig.systemUrl}
              className="flex items-center justify-center gap-1.5 py-3 text-body text-txt-2 hover:text-txt-1 border border-line-2 rounded-xl transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Acessar plataforma
              <ArrowUpRight size={16} className="opacity-50" />
            </a>
            <Button
              variant="primary"
              size="lg"
              href="#contato"
              className="w-full"
              onClick={() => setIsMobileOpen(false)}
            >
              Solicitar demonstração
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}