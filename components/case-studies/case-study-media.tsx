import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseStudyImage } from "@/types/content";

type CaseStudyMediaProps = Readonly<{
  image: CaseStudyImage;
  tone?: "light" | "muted";
  aspectRatio?: string;
  placeholderLabel?: string;
  contained?: boolean;
}>;

export function CaseStudyMedia({ image, tone = "light", aspectRatio = "8/5", placeholderLabel, contained = true }: CaseStudyMediaProps) {
  const media = (
    <div className={cn("relative w-full overflow-hidden", tone === "light" ? "bg-[#f4f4f2]" : "bg-[#d4d4d2]")} style={{ aspectRatio }}>
      {image.src ? (
        <Image alt={image.alt} className="object-cover" fill sizes="100vw" src={image.src} />
      ) : (
        placeholderLabel && <p className="absolute inset-0 grid place-items-center px-6 text-center font-display text-sm font-black text-muted sm:text-base">{placeholderLabel}</p>
      )}
    </div>
  );

  return contained ? <div className="section-shell">{media}</div> : media;
}