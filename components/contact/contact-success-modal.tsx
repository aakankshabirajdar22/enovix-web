"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Mail, MessageCircle, X } from "lucide-react";

const PANEL_CLIP = "polygon(1.5rem 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%, 0 1.5rem)";

const emptySubscribe = () => () => {};

type ContactSuccessModalProps = Readonly<{ isOpen: boolean; onClose: () => void }>;

export function ContactSuccessModal({ isOpen, onClose }: ContactSuccessModalProps) {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") { onClose(); return; }
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div animate={{ opacity: 1 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onKeyDown={handleKeyDown} role="presentation" transition={{ duration: 0.25 }}>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-label="Request sent successfully"
            aria-modal="true"
            className="relative w-full max-w-md border bg-background p-8 sm:p-10"
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            ref={dialogRef}
            role="dialog"
            style={{ borderColor: "#c8ff00", clipPath: PANEL_CLIP }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button aria-label="Close" className="absolute right-4 top-4 grid size-8 place-items-center text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" onClick={onClose} ref={closeButtonRef} type="button">
              <X size={20} strokeWidth={1.75} />
            </button>

            <div className="mx-auto grid size-16 place-items-center rounded-full border-2" style={{ borderColor: "#c8ff00" }}>
              <Check className="text-brand" size={30} strokeWidth={2.25} />
            </div>

            <h2 className="display-heading heading-3 mt-6 text-center leading-tight">
              Request sent<br /><span className="text-brand">successfully</span>
            </h2>

            <p className="body-copy mt-4 text-center font-bold text-brand">Thanks for reaching out!</p>
            <p className="body-copy mt-2 text-center text-xs text-muted">
              We&apos;ve received your project details. Our team will review your request and contact you within <span className="font-bold text-foreground">24 business hours</span>.
            </p>

            <button className="mt-6 flex min-h-11 w-full items-center justify-center gap-2 bg-brand px-5 font-display text-sm font-black uppercase text-background transition hover:bg-brand-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground" onClick={onClose} type="button">
              Continue browsing <ArrowRight size={16} strokeWidth={2} />
            </button>

            <div className="mt-6 border-t border-border pt-4">
              <p className="body-copy text-center text-xs text-muted">Prefer a quick chat?</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <motion.a className="flex min-h-10 items-center justify-center gap-2 border border-border text-xs font-bold text-foreground" href="https://wa.me/919552960796" rel="noreferrer" target="_blank" transition={{ duration: 0.25 }} whileHover={{ borderColor: "#c8ff00" }}>
                  <MessageCircle className="text-brand" size={16} /> WhatsApp
                </motion.a>
                <motion.a className="flex min-h-10 items-center justify-center gap-2 border border-border text-xs font-bold text-foreground" href="mailto:teamenovixweb@gmail.com" transition={{ duration: 0.25 }} whileHover={{ borderColor: "#c8ff00" }}>
                  <Mail className="text-brand" size={16} /> Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
