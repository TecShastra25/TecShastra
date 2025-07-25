import React, { useState } from "react";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We work with clients in fintech, healthcare, retail, real estate, education, and more.",
  },
  {
    q: "How do you price your services?",
    a: "Pricing is tailored to each project based on scope, complexity, and required expertise. Contact us for a custom quote.",
  },
  {
    q: "What is your project delivery process?",
    a: "We follow a consultative approach: discovery, proposal, development, launch, and support.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely! We specialize in seamless integrations with CRMs, ERPs, and third-party APIs.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border rounded-xl bg-white dark:bg-muted/60 shadow">
              <button
                className="w-full flex justify-between items-center p-6 text-lg font-semibold focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                {faq.q}
                <span>{open === idx ? "-" : "+"}</span>
              </button>
              {open === idx && (
                <div className="p-6 pt-0 text-muted-foreground text-base animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
