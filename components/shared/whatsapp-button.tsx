import Image from "next/image";

const WHATSAPP_MESSAGE =
  "Hi EnovixWeb! I’m interested in your website design, development, or branding services. I’d like to discuss my requirements and get a quote.";

const WHATSAPP_URL = `https://wa.me/918668759934?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
      href={WHATSAPP_URL}
      rel="noreferrer"
      target="_blank"
    >
      <Image alt="" aria-hidden="true" className="h-12 w-auto sm:h-14" height={89} src="/images/whatsapp.png" width={76} />
    </a>
  );
}