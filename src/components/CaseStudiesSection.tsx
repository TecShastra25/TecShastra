import React from "react";

const caseStudies = [
  {
    title: "AI Chatbot for Fintech",
    summary: "Automated 24/7 support and lead qualification for a digital bank.",
    result: "Reduced response time by 80% and boosted lead conversion by 30%.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Retail Automation Suite",
    summary: "Streamlined inventory and personalized marketing for a retail chain.",
    result: "Cut manual work by 50% and increased sales by 18% in 6 months.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Healthcare CRM Integration",
    summary: "Unified patient data and improved compliance for a hospital group.",
    result: "Improved patient retention and audit-readiness, with 100% HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

export const CaseStudiesSection = () => (
  <section className="py-16 bg-white dark:bg-muted/30">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs) => (
          <div key={cs.title} className="bg-muted/10 dark:bg-muted rounded-2xl shadow p-6 flex flex-col items-center">
            <img src={cs.image} alt={cs.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
            <p className="text-muted-foreground mb-2">{cs.summary}</p>
            <p className="font-semibold text-primary mb-2">{cs.result}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
