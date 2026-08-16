import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LimeButtonProps = Readonly<{
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
}> & ComponentProps<"button">;

export function LimeButton({ href, children, className, type, target, rel, style, ...props }: LimeButtonProps) {
  const styles = cn("inline-flex min-h-10 items-center justify-center bg-brand px-5 font-display text-sm font-black uppercase text-background transition hover:bg-brand-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground", className);
  if (href) return <a className={styles} href={href} rel={rel} style={style} target={target}>{children}</a>;
  return <button className={styles} style={style} type={type ?? "button"} {...props}>{children}</button>;
}
