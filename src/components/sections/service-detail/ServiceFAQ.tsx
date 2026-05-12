'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import AccordionItem from '@/components/ui/AccordionItem';
import type { Service } from '@/types';

export default function ServiceFAQ({ service }: { service: Service }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (service.faq.length === 0) return null;

  return (
    <section className="bg-site-bg py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          accent="Frequently Asked"
          title="Common Questions"
        />
        <div>
          {service.faq.map((f, i) => (
            <AccordionItem
              key={f.question}
              question={f.question}
              answer={f.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
