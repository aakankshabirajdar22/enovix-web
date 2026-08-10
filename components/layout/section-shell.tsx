import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionShell({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("section-shell", className)} {...props} />;
}
