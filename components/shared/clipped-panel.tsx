import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function ClippedPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("clip-panel", className)} {...props} />;
}
