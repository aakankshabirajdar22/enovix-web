import { ContactForm } from "@/components/contact/contact-form";

export function ServicesContact() {
  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <h2 className="display-heading heading-2">Got a project<br /><span className="text-brand">project ?</span></h2>
          <p className="body-copy mt-7 max-w-sm">Lorem ipsum dolor sit amet consectetur. Phasellus consequat massa est volutpat lectus ut. Odio sollicitudin id augue ac in vel tortor odio auctor. Hac varius sem lorem augue. Ornare lacinia ultricies pha.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
