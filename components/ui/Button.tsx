import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-400 active:bg-brand-600 shadow-lg shadow-brand-500/20 hover:shadow-brand-400/30",
  secondary:
    "bg-surface-3 text-txt-1 border border-line-2 hover:bg-surface-4 hover:border-line-3 active:bg-surface-3",
  ghost:
    "text-txt-2 hover:text-txt-1 hover:bg-surface-3/60",
  outline:
    "border border-line-2 text-txt-1 hover:bg-surface-3/40 hover:border-line-3",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-body-sm gap-2",
  md: "h-11 px-6 text-body-sm gap-2",
  lg: "h-12 px-8 text-body gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center font-medium rounded-xl
    transition-all duration-200 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400
    disabled:opacity-50 disabled:pointer-events-none
    whitespace-nowrap select-none
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}