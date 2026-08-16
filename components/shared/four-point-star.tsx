import { cn } from "@/lib/utils";

const STAR_CLIP = "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)";

type FourPointStarProps = Readonly<{ className?: string }>;

export function FourPointStar({ className }: FourPointStarProps) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute bg-[#dfff55]", className)} style={{ clipPath: STAR_CLIP }} />;
}