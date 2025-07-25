import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TechStackSection } from "@/components/TechStackSection";
import { OurProcessSection } from "@/components/OurProcessSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ArrowRight, Code2, Smartphone, Shield, Cloud, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services as sharedServices } from '@/data/services-data';
import { ServiceCard } from "@/components/ServiceCard";
import { TrustedCompanies } from "@/components/trusted-companies";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Zap,
    Sparkles,
    Code2,
    Smartphone,
    Shield,
    Cloud,
    ShoppingBag: BarChart3,
    Megaphone: BarChart3,
    BarChart3,
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

const ServicePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background relative">
            <Navbar />
            <section id="services" className="relative min-h-[60vh] flex flex-col justify-center pt-20">
                {/* Decorative SVG Background */}

                {/* HERO SECTION */}
                <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[60vh] w-full max-w-7xl mx-auto overflow-hidden mb-20 animate-fade-in">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-transparent opacity-70" />
                        <svg className="absolute -top-24 right-0 w-96 h-96 opacity-20" viewBox="0 0 400 400" fill="none">
                            <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)" />
                            <defs>
                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(180)" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#a5b4fc" />
                                    <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4">
                        <h1
                            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl text-black dark:text-white"
                        >
                            Accelerate Your Digital Transformation
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
                            AI, Automation, Cloud, Web, and Digital Solutions for Ambitious Brands
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <Button className="tech-gradient hover-glow font-semibold px-10 py-4 text-xl shadow-xl animate-pulse" onClick={() => navigate('/get-a-quote')}>Get a Quote</Button>
                            <Button variant="outline" className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300 font-semibold px-8" onClick={() => navigate('/portfolio')}>See Our Work</Button>
                            <Button variant="secondary" className="px-10 py-4 text-xl font-semibold" onClick={() => navigate('/contact')}>Talk to Us</Button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-70" />
                </section>

                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-flex items-center space-x-2 glass-card mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Our Services</span>
                    </div>
                </div>

                {/* SERVICES GRID */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                title={service.title}
                                description={service.description}
                                Icon={service.icon}
                                onClick={() => navigate(`/services/${service.slug}`)}
                            />
                        ))}
                    </div>
                </div>

                {/* 2. SERVICE CATEGORIES / OVERVIEW */}
                <TechStackSection />
                <OurProcessSection />
                <CaseStudiesSection />
                <FAQSection />
                <CTASection />
                <TrustedCompanies />
            </section>
            <Footer />
        </div>
    );
};

export default ServicePage;
