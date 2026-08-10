import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function OutlinedCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border border-border", className)} {...props} />;
}
