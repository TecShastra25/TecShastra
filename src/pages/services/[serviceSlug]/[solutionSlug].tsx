import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials-section";
import { services } from "@/data/services-data";

export default function SolutionDetails() {
  const { serviceSlug, solutionSlug } = useParams();
  const service = services.find(s => s.slug === serviceSlug);
  const solution = service?.solutions?.find(sol => sol.slug === solutionSlug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {service && solution ? (
        <div className="relative w-full min-h-[40vh] pt-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20">
          <div className="mb-6 relative z-10">
            <Link to={`/services/${service.slug}`} className="text-primary hover:underline">← Back to {service.title}</Link>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 mb-6 w-full max-w-5xl mx-auto">
            <span className="text-5xl md:text-6xl mr-4">{service.icon}</span>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent shadow-lg shadow-[0_0_16px_4px_rgba(0,0,0,0.15)]">{solution.title}</h1>
              <p className="text-lg md:text-2xl text-muted-foreground mb-4">{solution.description}</p>
              <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                  alt="Solution Success"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-primary/10 animate-float"
                />
                <svg className="w-56 h-36" viewBox="0 0 220 100" fill="none">
                  <polyline points="0,90 30,70 60,80 90,50 120,60 150,30 180,20 210,10" stroke="#818cf8" strokeWidth="4" fill="none" />
                  <circle cx="210" cy="10" r="6" fill="#a5b4fc" />
                  <text x="170" y="35" fontSize="16" fill="#818cf8">Growth ↑</text>
                </svg>
                <div className="flex flex-col gap-3">
                  <div className="bg-primary/10 rounded-xl px-4 py-3 text-primary font-bold text-xl shadow">98% Client Satisfaction</div>
                  <div className="bg-secondary/10 rounded-xl px-4 py-3 text-secondary font-bold text-xl shadow">+400% ROI</div>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl px-4 py-3 text-foreground font-bold text-xl shadow">Industry Leading Tech</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] opacity-30 animate-spin-slow" viewBox="0 0 500 500" fill="none">
              <defs>
                <radialGradient id="solutionBlobGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#a5b4fc" />
                  <stop offset="100%" stopColor="#818cf8" />
                </radialGradient>
              </defs>
              <ellipse cx="250" cy="250" rx="250" ry="200" fill="url(#solutionBlobGradient)" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-full h-24 opacity-40" viewBox="0 0 1440 320"><path fill="#818cf8" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,90.7C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 text-2xl text-muted-foreground">Solution not found.</div>
      )}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
