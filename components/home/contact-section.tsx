import { ContactForm } from "@/components/contact/contact-form";

export function ContactSection() {
  return <section className="section-shell py-20 sm:py-28 lg:py-40" id="contact"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><h2 className="display-heading heading-2">Got a project<br /><span className="text-brand">project ?</span></h2><p className="body-copy mt-7 max-w-sm">Let&apos;s discuss your vision and build a website that helps your business attract more customers, improve online visibility, and create lasting digital impact.</p></div><ContactForm /></div></section>;
}
