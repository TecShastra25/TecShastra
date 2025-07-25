import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { useMemo } from "react";
import { services, Service, Solution } from "@/data/services-data";
import { Sparkles } from "lucide-react";



export default function ServiceDetails() {
  const { slug } = useParams();
  const service = useMemo(() => services.find(s => s.slug === slug), [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative w-full min-h-[50vh] pt-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20">
        {service ? (
          <>
            {/* Full-Width Modern Hero for Service */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-10 animate-fade-in w-full max-w-7xl mx-auto min-h-[40vh]">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent shadow-lg shadow-[0_0_16px_4px_rgba(0,0,0,0.2)]">
                  {service.title}
                </h1>
                <p className="text-lg md:text-2xl text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    <span className="mr-2 text-2xl">{service.icon}</span>
                    {service.title}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
                  alt="Service Illustration"
                  className="rounded-2xl shadow-2xl w-full max-w-xs object-cover border-4 border-primary/10 animate-float"
                />
              </div>
            </div>

            {/* Decorative SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg className="absolute top-[-12%] left-[-8%] w-[60vw] h-[60vw] opacity-30 animate-spin-slow" viewBox="0 0 500 500" fill="none">
                <defs>
                  <radialGradient id="serviceBlobGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </radialGradient>
                </defs>
                <ellipse cx="250" cy="250" rx="250" ry="200" fill="url(#serviceBlobGradient)" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-full h-32 opacity-40" viewBox="0 0 1440 320"><path fill="#818cf8" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,90.7C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            {/* Rich Hero Content: Image, Graph, Stats */}
            <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
              {/* Large Service Image */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Service Success"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-primary/10 animate-float"
              />
              {/* Graph Example (SVG) */}
              <svg className="w-56 h-36" viewBox="0 0 220 100" fill="none">
                <polyline points="0,90 30,70 60,80 90,50 120,60 150,30 180,20 210,10" stroke="#818cf8" strokeWidth="4" fill="none" />
                <circle cx="210" cy="10" r="6" fill="#a5b4fc" />
                <text x="170" y="35" fontSize="16" fill="#818cf8">Success ↑</text>
              </svg>
              {/* Stats */}
              <div className="flex flex-col gap-3">
                <div className="bg-primary/10 rounded-xl px-4 py-3 text-primary font-bold text-xl shadow">99% Success Rate</div>
                <div className="bg-secondary/10 rounded-xl px-4 py-3 text-secondary font-bold text-xl shadow">+500% Marketing Reach</div>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl px-4 py-3 text-foreground font-bold text-xl shadow">Award-Winning Solutions</div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-2xl text-muted-foreground">Service not found.</div>
        )}
      </div>
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
