import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LimeButtonProps = Readonly<{
  href?: string;
  children: ReactNode;
  className?: string;
}> & ComponentProps<"button">;

export function LimeButton({ href, children, className, type, ...props }: LimeButtonProps) {
  const styles = cn("inline-flex min-h-10 items-center justify-center bg-brand px-5 font-display text-sm font-black uppercase text-background transition hover:bg-brand-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground", className);
  if (href) return <Link className={styles} href={href}>{children}</Link>;
  return <button className={styles} type={type ?? "button"} {...props}>{children}</button>;
}
