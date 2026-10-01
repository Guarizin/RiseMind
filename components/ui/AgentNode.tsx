"use client";

import { type Agent } from "@/config/agents";

interface AgentNodeProps {
  agent: Agent;
  isActive: boolean;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AgentNode({
  agent,
  isActive,
  onClick,
  size = "md",
  className = "",
}: AgentNodeProps) {
  const Icon = agent.icon;

  const sizeClasses = {
    sm: "w-14 h-14",
    md: "w-[4.5rem] h-[4.5rem]",
    lg: "w-24 h-24",
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 28,
  };

  return (
    <button
      onClick={onClick}
      aria-label={`Agente ${agent.name}: ${agent.tagline}`}
      aria-pressed={isActive}
      className={`
        group relative flex flex-col items-center gap-2.5 outline-none
        ${className}
      `}
    >
      <div
        className={`
          ${sizeClasses[size]} rounded-2xl flex items-center justify-center
          border transition-all duration-300 ease-out relative
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
          size={iconSizes[size]}
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
        {size !== "sm" && (
          <span
            className={`text-[0.6875rem] transition-colors duration-300 ${
              isActive ? "text-txt-2" : "text-txt-3"
            }`}
          >
            {agent.status}
          </span>
        )}
      </div>
    </button>
  );
}