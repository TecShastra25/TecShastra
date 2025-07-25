import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "@/data/services-data";
import { Button } from "@/components/ui/button";

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) return <div className="p-10 text-center">Service not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[40vh] w-full max-w-4xl mx-auto overflow-hidden mb-12 rounded-3xl shadow-lg">
        {service.heroImage && (
          <img src={service.heroImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-4 flex items-center justify-center">
            {/* Service icon if available */}
            {service.icon && typeof service.icon === 'string' ?
              (() => {
                try {
                  // Dynamically import from lucide-react
                  // Fallback to BarChart3 if not found
                  // @ts-ignore
                  const { [service.icon]: LucideIcon, BarChart3 } = require('lucide-react');
                  const Icon = LucideIcon || BarChart3;
                  return <Icon className="w-14 h-14 text-primary drop-shadow-lg" />;
                } catch {
                  return null;
                }
              })()
            : null}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-xl">
            {service.title}
          </h1>
          {service.heroTagline && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">{service.heroTagline}</p>
          )}
          <p className="mb-6 text-lg text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
          <Button className="bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-semibold px-8 py-3 text-lg shadow-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors" onClick={() => navigate('/contact')}>
            Get Started
          </Button>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-70" />
      </section>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.solutions.map((solution) => (
            <div key={solution.slug} className="glass-card p-6 rounded-xl cursor-pointer hover:shadow-lg transition" onClick={() => navigate(`/solutions/${solution.slug}`)}>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground mb-2">{solution.description}</p>
              <Button variant="outline" className="mt-2">View Details</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
