"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { faqItems } from "@/content/faq";
import type { FaqItem } from "@/types/content";

type FaqSectionProps = Readonly<{
  defaultOpenFirst?: boolean;
  items?: readonly FaqItem[];
}>;

export function FaqSection({
  defaultOpenFirst = false,
  items = faqItems,
}: FaqSectionProps) {
  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40">
      <h2 className="display-heading heading-2">
        Frequently
        <br />
        asked <span className="text-brand">questions</span>
      </h2>
      <Accordion.Root
        className="mt-10 border-t border-border"
        collapsible
        defaultValue={defaultOpenFirst ? "faq-0" : undefined}
        type="single"
      >
        {items.map(({ question, answer }, index) => (
          <Accordion.Item
            className="border-b border-border"
            key={question}
            value={`faq-${index}`}
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl font-black sm:text-xl">
                <span>{question}</span>
                <span className="text-brand group-data-[state=open]:hidden">
                  <Plus />
                </span>
                <span className="hidden text-brand group-data-[state=open]:block">
                  <Minus />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="max-w-3xl pb-6 text-brand text-xl">{answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
