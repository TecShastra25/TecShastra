import { Navbar } from "@/components/navbar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Shield, Target, Users, Award } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security and privacy of our clients' data above all else."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Constantly pushing boundaries to deliver cutting-edge technology solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our success is measured by the success and satisfaction of our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project we undertake."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">TecShastra</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Crafting tomorrow's technology today with innovative solutions that transform businesses and drive digital evolution.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  enhance efficiency, and create meaningful digital experiences for their customers.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe in the transformative power of technology and are committed to making 
                  it accessible, reliable, and impactful for organizations of all sizes.
                </p>
              </div>
              <div className="glass-card">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Our Values</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="text-center">
                        <value.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;