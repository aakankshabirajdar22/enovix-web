import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = Readonly<{ className?: string; variant?: "brand" | "legacy" }>;

export function Logo({ className, variant = "legacy" }: LogoProps) {
  return (
    <Link aria-label="EnovixWeb home" className={cn("inline-flex shrink-0", className)} href="/">
      {variant === "brand" ? <Image alt="EnovixWeb" height={62} priority src="/images/logo.svg" width={199} /> : <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="grid size-9 place-items-center rounded-full border-[3px] border-foreground bg-background"><span className="size-4 rotate-45 bg-brand" /></span><span className="leading-[.78]"><span className="block font-display text-xl font-black text-brand">ENOVIX</span><span className="block font-display text-xl font-black text-foreground">WEB</span></span></span>}
    </Link>
  );
}
