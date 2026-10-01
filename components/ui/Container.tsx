import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`w-full max-w-site mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}