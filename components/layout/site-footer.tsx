import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const FOOTER_CLIP = "polygon(0 clamp(1rem,3vw,2.25rem), clamp(2rem,6vw,4.5rem) 0, calc(100% - clamp(2rem,6vw,4.5rem)) 0, 100% clamp(1rem,3vw,2.25rem), 100% 100%, 0 100%)";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-brand px-5 pb-10 pt-14 text-background sm:px-10 lg:mt-32 lg:pt-20" style={{ clipPath: FOOTER_CLIP }}>
      <div className="section-shell grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
          <Image alt="EnovixWeb" className="size-14 shrink-0" height={150} src="/images/footer_icon.png" width={150} />
          <nav aria-label="Footer navigation" className="grid max-w-xs grid-cols-2 gap-x-6 gap-y-3 text-base font-medium"><Link href="/">Home</Link><Link href="/services/ui-ux">Services</Link><Link href="/case-study">Work</Link><Link href="#contact">Contact</Link></nav>
        </div>
        <div>
          <p className="mb-2 font-display text-sm font-black">Contact us</p>
          <a className="font-display text-xl font-black" href="tel:+918668759934">(+91 86687 59934)</a>
          <div className="mt-7 grid gap-7 sm:grid-cols-3">
            <div><p className="mb-2 font-display text-sm font-black">Location</p><p className="text-base">2972 Pune, Maharashtra</p></div>
            <div><p className="mb-2 font-display text-sm font-black">Email</p><a className="text-base wrap-break-word" href="mailto:teamenovixweb@gmail.com">teamenovixweb@gmail.com</a></div>
            <div><p className="mb-2 font-display text-sm font-black">Mo—Fr</p><p className="font-display text-xl font-black">9am—6pm</p></div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-14 flex items-end justify-between"><p className="text-sm">© 2026 — Copyright / EnovixWeb</p><a aria-label="Back to top" className="grid size-11 place-items-center rounded-full border border-background" href="#top"><ArrowUp size={22} /></a></div>
      <div className="section-shell @container overflow-hidden">
        <p aria-hidden="true" className="pointer-events-none mt-7 w-full select-none whitespace-nowrap text-center font-display font-black leading-none text-background/10" style={{ fontSize: "clamp(1.5rem, 13.5cqw, 11rem)" }}>ENOVIXWEB</p>
      </div>
    </footer>
  );
}