export type EmailConfiguration = {
  host: string;
  port: number;
  user: string;
  password: string;
  from: string;
  to: string;
};

export function getEmailConfiguration(): EmailConfiguration | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return null;
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    user: SMTP_USER,
    password: SMTP_PASSWORD,
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
  };
}
