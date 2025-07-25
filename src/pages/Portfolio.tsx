import { Navbar } from "@/components/navbar"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"
import { TrustedCompanies } from "@/components/trusted-companies";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our latest projects and success stories that showcase our expertise in technology solutions.
              </p>
            </div>
          </div>
        </section>
        <PortfolioSection showAll={true} />
        <TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;