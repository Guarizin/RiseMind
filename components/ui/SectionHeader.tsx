interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-label uppercase tracking-widest text-brand-400 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 text-txt-1">
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className="text-gradient">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg text-txt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}