import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShieldCheck } from "lucide-react";
import { TrustedCompanies } from "@/components/trusted-companies";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 flex justify-center items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-primary-glow" /> Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
            <div className="glass-card p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Information We Collect</h2>
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>Personal information you provide (name, email, etc.)</li>
                <li>Usage data (pages visited, time spent, etc.)</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">How We Use Your Information</h2>
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>To provide and improve our services</li>
                <li>To communicate with you</li>
                <li>To ensure site security</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gradient">Your Rights</h2>
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>Access, correct, or delete your data</li>
                <li>Opt out of communications</li>
              </ul>
              <p className="text-muted-foreground mt-8">For questions, contact <a href="mailto:privacy@tecshastra.com" className="text-primary underline">privacy@tecshastra.com</a>.</p>
            </div>
          </div>
        </section>
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
}
