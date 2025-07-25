import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard";
import { services as sharedServices } from '@/data/services-data';


export function ServicesSection({ showAll = false }: { showAll?: boolean }) {
  const navigate = useNavigate();
  // Only declare hoveredService and setHoveredService ONCE in this component
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Map service.icon string to the best Lucide icon for each service
  const iconMap: Record<string, React.ElementType> = {
    Zap: Zap,                     // AI/ML
    Sparkles: Sparkles,           // Automation
    Code2: Code2,                 // Web/App Dev
    Smartphone: Smartphone,       // UI/UX Design
    Shield: Shield,               // Cybersecurity
    Cloud: Cloud,                 // Cloud/DevOps
    ShoppingBag: BarChart3,       // E-Commerce (use ShoppingCart if available, fallback to BarChart3)
    Megaphone: BarChart3,         // Digital Marketing (use Megaphone if available, fallback)
    BarChart3: BarChart3,         // Analytics
    // For any emoji or unknowns, fallback to BarChart3 or another fitting icon
    '🧑‍💼': BarChart3,
    '📡': Cloud,
    '🧾': BarChart3,
    '🔌': Cloud,
    '🧪': BarChart3,
    '🛠️': BarChart3,
  };
  const services = sharedServices.map(service => ({
    ...service,
    icon: (iconMap[service.icon] || BarChart3) as React.ComponentType<{ className?: string }>,
    color: 'from-primary to-secondary',
  }));


  // Remove duplicate hoveredService/setHoveredService declaration below. Only declare once at the top.

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="relative overflow-hidden min-h-[60vh] flex flex-col justify-center bg-gradient-to-br from-background to-muted/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Comprehensive Tech</span> Solutions
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions
            that drive innovation and accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={service.slug}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.icon}
                onClick={() => navigate(`/services/${service.slug}`)}
                className={hoveredService === index ? 'neon-glow scale-105' : ''}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card max-w-2xl mx-auto hover-glow">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our expert team can help you achieve your technology goals.
            </p>
            <Button className="tech-gradient hover-glow font-semibold px-8">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
      {/* View More Services Button */}
      {!showAll && (
        <div className="flex justify-center mt-10">
          <Button
            className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300 font-semibold px-8"
            onClick={() => navigate('/services')}
          >
            View More Services
          </Button>
        </div>
      )}
    </section>
  )
}