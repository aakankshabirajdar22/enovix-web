export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  message: string;
  company: string;
};

export type ContactFormErrors = Partial<Record<Exclude<keyof ContactFormValues, "company">, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(values.email.trim())) errors.email = "Enter a valid email address.";

  if (!values.phone.trim()) errors.phone = "Phone number is required.";

  if (!values.businessName.trim()) errors.businessName = "Business name is required.";
  if (!values.businessType.trim()) errors.businessType = "Business type is required.";

  if (!values.message.trim()) errors.message = "Please share a few details about your project.";
  else if (values.message.trim().length < 10) errors.message = "Please add a bit more detail (at least 10 characters).";

  return errors;
}
