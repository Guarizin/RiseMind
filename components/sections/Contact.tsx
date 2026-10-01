"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import { MessageCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  volume: string;
  message: string;
}

type FormStatus = "idle" | "error";

const initialData: FormData = {
  name: "",
  company: "",
  whatsapp: "",
  email: "",
  volume: "",
  message: "",
};

export function Contact() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((prev) => new Set(prev).add(e.target.name));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isRequired = (field: keyof FormData) =>
    ["name", "company", "whatsapp", "email"].includes(field);

  const isFieldInvalid = (field: keyof FormData) => {
    if (!touched.has(field)) return false;
    if (isRequired(field) && !data[field].trim()) return true;
    if (field === "email" && data.email && !isValidEmail(data.email)) return true;
    return false;
  };

  const isFieldValid = (field: keyof FormData) => {
    if (!touched.has(field)) return false;
    if (isRequired(field) && !data[field].trim()) return false;
    if (field === "email") return isValidEmail(data.email);
    return true;
  };

  const canSubmit =
    data.name.trim() &&
    data.company.trim() &&
    data.whatsapp.trim() &&
    isValidEmail(data.email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      const volumeLabels: Record<string, string> = {
        inicio: "Estou começando",
        medio: "Operação média",
        alto: "Alto volume",
        enterprise: "Enterprise",
      };
      const message = [
        "Olá, equipe RiseMind AI! 👋",
        "Quero conversar sobre minha operação. Seguem meus dados:",
        "",
        `*Nome:* ${data.name.trim()}`,
        `*Empresa:* ${data.company.trim()}`,
        `*WhatsApp:* ${data.whatsapp.trim()}`,
        `*E-mail:* ${data.email.trim()}`,
        ...(data.volume ? [`*Volume da operação:* ${volumeLabels[data.volume]}`] : []),
        ...(data.message.trim() ? ["", "*Sobre minha operação:*", data.message.trim()] : []),
        "",
        "Tenho interesse em conhecer a RiseMind AI e entender como vocês podem ajudar minha operação!",
      ].join("\n");
      window.location.assign(
        `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
      );
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) => {
    const base =
      "w-full bg-surface-2 border rounded-xl px-4 py-3 text-body-sm text-txt-1 placeholder:text-txt-3/60 outline-none transition-all duration-200";
    if (isFieldInvalid(field))
      return `${base} border-status-danger/40 focus:border-status-danger/60 focus:ring-1 focus:ring-status-danger/20`;
    if (isFieldValid(field))
      return `${base} border-status-success/20 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/15`;
    return `${base} border-line-1 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/15`;
  };

  return (
    <section
      id="contato"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-label="Contato"
    >
      <div className="absolute inset-0 bg-surface-1/30" />

      <Container className="relative z-10">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-h2 text-txt-1 mb-4">
                Vamos conversar sobre sua operação.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="surface-elevated p-6 lg:p-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-txt-1 mb-2"
                    >
                      Nome <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={data.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("name")}
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-body-sm font-medium text-txt-1 mb-2"
                    >
                      Empresa <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      value={data.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("company")}
                      placeholder="Nome da empresa"
                    />
                  </div>

                  {/* WhatsApp + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="block text-body-sm font-medium text-txt-1 mb-2"
                      >
                        WhatsApp <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        required
                        autoComplete="tel"
                        value={data.whatsapp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("whatsapp")}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-body-sm font-medium text-txt-1 mb-2"
                      >
                        E-mail <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Volume */}
                  <div>
                    <label
                      htmlFor="volume"
                      className="block text-body-sm font-medium text-txt-1 mb-2"
                    >
                      Volume aproximado da operação
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      value={data.volume}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("volume")}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="inicio">Estou começando</option>
                      <option value="medio">Operação média</option>
                      <option value="alto">Alto volume</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-txt-1 mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={data.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass("message")} resize-none`}
                      placeholder="Conte um pouco sobre sua operação..."
                    />
                  </div>
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-status-danger/10 border border-status-danger/20">
                    <AlertCircle
                      size={18}
                      className="text-status-danger flex-shrink-0"
                    />
                    <p className="text-body-sm text-status-danger">
                      Ocorreu um erro. Tente novamente ou entre em contato pelo
                      WhatsApp.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={!canSubmit}
                >
                  <MessageCircle size={18} />
                  Quero conhecer a RiseMind AI
                </Button>

                {/* WhatsApp alternative */}
                <div className="text-center">
                  <p className="text-caption text-txt-3 mb-3">
                    Prefere falar direto?
                  </p>
                  <a
                    href={siteConfig.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-txt-2 hover:text-txt-1 transition-colors duration-200"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
