import React from "react";

const steps = [
  { title: "Discovery & Consultation", desc: "We listen to your needs and analyze your requirements." },
  { title: "Strategy & Proposal", desc: "We design a tailored solution and provide a clear proposal." },
  { title: "Development & Integration", desc: "Our team builds, tests, and integrates your solution." },
  { title: "Launch & Support", desc: "We deploy, monitor, and support your project for success." },
];

export const OurProcessSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
      <ol className="relative border-l-4 border-primary/40 ml-4">
        {steps.map((step, idx) => (
          <li key={step.title} className="mb-12 ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full -left-6 ring-4 ring-background font-bold text-lg">
              {idx + 1}
            </span>
            <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
            <p className="text-muted-foreground">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
