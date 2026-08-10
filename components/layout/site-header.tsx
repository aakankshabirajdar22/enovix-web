import { Logo } from "@/components/shared/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between sm:h-24">
        <Logo className="w-32 sm:w-40" variant="brand" />
        <MobileMenu />
      </div>
    </header>
  );
}
