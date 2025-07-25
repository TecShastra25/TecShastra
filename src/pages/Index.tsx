import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustedCompanies } from "@/components/trusted-companies"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection showAll={false} />
      <PortfolioSection showAll={false} />
      <TestimonialsSection />
      <ContactForm />
      <TrustedCompanies />
      <Footer />
    </div>
  );
};

export default Index;
