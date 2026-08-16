import Image from "next/image";
import { cn } from "@/lib/utils";

type DoubleLiningProps = Readonly<{ className?: string }>;

export function DoubleLining({ className }: DoubleLiningProps) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={cn("h-auto w-full select-none", className)}
      height={104}
      src="/images/double-lining.png"
      width={1600}
    />
  );
}