type Level = "success" | "warning" | "danger";

interface StatusBadgeProps {
  level: Level;
  label: string;
  className?: string;
}

const levelStyles: Record<Level, { dot: string; text: string; bg: string }> = {
  success: {
    dot: "bg-status-success",
    text: "text-status-success",
    bg: "bg-status-success/10 border-status-success/20",
  },
  warning: {
    dot: "bg-status-warning",
    text: "text-status-warning",
    bg: "bg-status-warning/10 border-status-warning/20",
  },
  danger: {
    dot: "bg-status-danger",
    text: "text-status-danger",
    bg: "bg-status-danger/10 border-status-danger/20",
  },
};

export function StatusBadge({ level, label, className = "" }: StatusBadgeProps) {
  const styles = levelStyles[level];
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-caption font-medium border ${styles.bg} ${styles.text} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
      {label}
    </span>
  );
}