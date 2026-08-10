import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowButton({ className, ...props }: ComponentProps<"button">) {
  return <button aria-label="View project" className={cn("grid size-10 place-items-center rounded-full border border-background text-background transition hover:scale-105", className)} type="button" {...props}><ArrowRight size={22} strokeWidth={1.7} /></button>;
}
