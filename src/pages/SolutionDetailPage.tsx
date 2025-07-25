import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "@/data/services-data";
import { Button } from "@/components/ui/button";

const SolutionDetailPage: React.FC = () => {
  const { solutionSlug } = useParams<{ solutionSlug: string }>();
  const navigate = useNavigate();

  // Find the solution and its parent service
  let foundSolution = null;
  let parentService = null;
  for (const service of services) {
    const solution = service.solutions.find(s => s.slug === solutionSlug);
    if (solution) {
      foundSolution = solution;
      parentService = service;
      break;
    }
  }

  if (!foundSolution) return <div className="p-10 text-center">Solution not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[40vh] w-full max-w-3xl mx-auto overflow-hidden mb-12 rounded-3xl shadow-lg">
        {foundSolution.heroImage && (
          <img src={foundSolution.heroImage} alt={foundSolution.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center py-10 px-4">
          <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
            ← Back
          </Button>
          <Button className="bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-semibold px-8 py-3 text-lg shadow-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors" onClick={() => navigate('/contact')}>
            Get Started
          </Button>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-xl">
            {foundSolution.title}
          </h1>
          {foundSolution.heroTagline && (
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">{foundSolution.heroTagline}</p>
          )}
          <p className="mb-6 text-lg text-muted-foreground max-w-2xl mx-auto">{foundSolution.description}</p>
          {foundSolution.image && (
            <img src={foundSolution.image} alt={foundSolution.title} className="rounded-lg mb-6 w-full max-h-80 object-cover" />
          )}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-70" />
      </section>
      <div className="max-w-3xl mx-auto py-16 px-4">
        {foundSolution.features && foundSolution.features.length > 0 && (
          <ul className="list-disc pl-6 mb-6">
            {foundSolution.features.map((feature, idx) => (
              <li key={idx} className="mb-2 text-base">{feature}</li>
            ))}
          </ul>
        )}
        {parentService && (
          <div className="mt-8">
            <span className="text-muted-foreground text-sm">Service: </span>
            <Button variant="link" onClick={() => navigate(`/services/${parentService.slug}`)}>
              {parentService.title}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionDetailPage;
