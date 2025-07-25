import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Users, Award, Briefcase, Lightbulb } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join <span className="text-gradient">TecShastra</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We’re always looking for passionate, talented people to help shape the future of technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="glass-card p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Why Work With Us?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Users className="w-6 h-6 text-primary" /> Collaborative, inclusive culture
                    </li>
                    <li className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Award className="w-6 h-6 text-yellow-500" /> Competitive salaries & benefits
                    </li>
                    <li className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Briefcase className="w-6 h-6 text-blue-500" /> Flexible work environment
                    </li>
                    <li className="flex items-center gap-3 text-lg text-muted-foreground">
                      <Lightbulb className="w-6 h-6 text-green-500" /> Learning & growth opportunities
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gradient">How to Apply</h2>
                  <p className="text-lg text-muted-foreground mb-2">
                    To apply, send your resume and a short introduction to:
                  </p>
                  <a href="mailto:careers@tecshastra.com" className="text-primary underline text-lg font-semibold">
                    careers@tecshastra.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/careers-illustration.svg" alt="Careers at TecShastra" className="w-full max-w-md rounded-xl shadow-lg mb-8" />
                <div className="glass-card p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Shape the Future</h3>
                  <p className="text-muted-foreground">
                    Be part of a team that’s building innovative solutions and making a real impact for businesses around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
