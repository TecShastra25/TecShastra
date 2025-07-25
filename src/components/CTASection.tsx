import React from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => (
  <section className="py-16 bg-white dark:bg-muted/60 shadow text-center">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
      <p className="text-lg mb-8">Contact us today for a free consultation or to get a custom quote for your next project.</p>
      <Button size="lg" className="px-10 py-4 text-lg font-semibold bg-white text-primary hover:bg-secondary hover:text-white transition">
        Get a Quote
      </Button>
    </div>
  </section>
);
