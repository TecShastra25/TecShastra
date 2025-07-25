import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { TrustedCompanies } from "@/components/trusted-companies"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "39 Rue Boieldieu, 94400 Vitry-Sur-Seine, France",
      description: "Find us in Vitry-Sur-Seine, France."
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(+33) 752-18-6161",
      description: "Call us during business hours."
    },
    {
      icon: Mail,
      title: "Email",
      details: "tecshastra25@gmail.com",
      description: "Send us an email anytime."
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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your next project? Let's discuss how we can help transform your ideas into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're here to help and answer any question you might have. 
                    We look forward to hearing from you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="glass-card p-6 hover-lift">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12">
  <iframe
    title="TecShastra France Location"
    src="https://www.google.com/maps?q=39+Rue+Boieldieu+94400+Vitry-Sur-Seine+France&output=embed"
    width="100%"
    height="350"
    style={{ border: 0, borderRadius: '1rem' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<TrustedCompanies />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;