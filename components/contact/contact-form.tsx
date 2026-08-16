"use client";

import { useState, type FormEvent } from "react";
import { ContactSuccessModal } from "@/components/contact/contact-success-modal";
import { validateContactForm, type ContactFormErrors, type ContactFormValues } from "@/lib/contact";

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  businessType: "",
  message: "",
  company: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass = "h-10 border border-border bg-transparent px-3 text-foreground outline-none focus:border-brand";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => null)) as { message?: string; errors?: ContactFormErrors } | null;

      if (!response.ok) {
        setStatus("error");
        setErrors(data?.errors ?? {});
        setStatusMessage(data?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(null);
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="clip-panel bg-[#99bd00] p-px">
    <form className="clip-panel grid gap-5 bg-background p-6 sm:p-9" noValidate onSubmit={handleSubmit}>
      <h3 className="display-heading heading-3 text-brand">Connect with us now !</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-xs text-muted">
          First Name
          <input className={fieldClass} name="firstName" onChange={(event) => updateField("firstName", event.target.value)} type="text" value={values.firstName} />
          {errors.firstName && <span className="text-[11px] text-red-400">{errors.firstName}</span>}
        </label>
        <label className="grid gap-1 text-xs text-muted">
          Last Name
          <input className={fieldClass} name="lastName" onChange={(event) => updateField("lastName", event.target.value)} type="text" value={values.lastName} />
          {errors.lastName && <span className="text-[11px] text-red-400">{errors.lastName}</span>}
        </label>
        <label className="grid gap-1 text-xs text-muted">
          Email
          <input className={fieldClass} name="email" onChange={(event) => updateField("email", event.target.value)} type="email" value={values.email} />
          {errors.email && <span className="text-[11px] text-red-400">{errors.email}</span>}
        </label>
        <label className="grid gap-1 text-xs text-muted">
          Phone No
          <input className={fieldClass} name="phone" onChange={(event) => updateField("phone", event.target.value)} type="tel" value={values.phone} />
          {errors.phone && <span className="text-[11px] text-red-400">{errors.phone}</span>}
        </label>
        <label className="grid gap-1 text-xs text-muted">
          Business Name
          <input className={fieldClass} name="businessName" onChange={(event) => updateField("businessName", event.target.value)} type="text" value={values.businessName} />
          {errors.businessName && <span className="text-[11px] text-red-400">{errors.businessName}</span>}
        </label>
        <label className="grid gap-1 text-xs text-muted">
          Business Type
          <input className={fieldClass} name="businessType" onChange={(event) => updateField("businessType", event.target.value)} type="text" value={values.businessType} />
          {errors.businessType && <span className="text-[11px] text-red-400">{errors.businessType}</span>}
        </label>
      </div>
      <label className="grid gap-1 text-xs text-muted">
        Project Details
        <textarea className="min-h-44 resize-y border border-border bg-transparent p-3 text-foreground outline-none focus:border-brand" name="projectDetails" onChange={(event) => updateField("message", event.target.value)} value={values.message} />
        {errors.message && <span className="text-[11px] text-red-400">{errors.message}</span>}
      </label>
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Leave this field empty
          <input autoComplete="off" name="company" onChange={(event) => updateField("company", event.target.value)} tabIndex={-1} type="text" value={values.company} />
        </label>
      </div>
      {status === "error" && statusMessage && <p aria-live="polite" className="text-xs text-red-400" role="status">{statusMessage}</p>}
      <button className="min-h-11 bg-brand px-5 font-display text-sm font-black uppercase text-background transition hover:bg-brand-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Let's build together"}
      </button>
      <ContactSuccessModal isOpen={status === "success"} onClose={() => setStatus("idle")} />
    </form>
    </div>
  );
}
