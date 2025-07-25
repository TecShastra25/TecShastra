import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText } from "lucide-react";
import { TrustedCompanies } from "@/components/trusted-companies";
import React from "react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 flex justify-center items-center gap-4">
                <FileText className="w-10 h-10 text-primary-glow" /> Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                By using our website and services, you agree to the following terms and conditions:
              </p>
            </div>
            <div className="glass-card p-10 max-w-2xl mx-auto">
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>Use our services responsibly and lawfully</li>
                <li>Do not misuse or attempt to disrupt our site</li>
                <li>Respect intellectual property rights</li>
              </ul>
              <p className="text-muted-foreground mt-8">For questions, contact <a href="mailto:legal@tecshastra.com" className="text-primary underline">legal@tecshastra.com</a>.</p>
            </div>
          </div>
        </section>
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
}
