import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/TecShastra25", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tecshastra/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" }
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]

  const services = [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "AI & Machine Learning", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
    { name: "Data Analytics", href: "/services" }
  ]

  const contactInfo = [
    { icon: MapPin, text: "39 Rue Boieldieu, 94400 Vitry-Sur-Seine, France", href: "https://maps.google.com/?q=39+Rue+Boieldieu+94400+Vitry-Sur-Seine+France" },
    { icon: Phone, text: "(+33) 752-18-6161", href: "tel:+33752186161" },
    { icon: Mail, text: "tecshastra25@gmail.com", href: "mailto:tecshastra25@gmail.com" }
  ]

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-card max-w-4xl mx-auto text-center hover-glow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with <span className="text-gradient">Tech Insights</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest technology trends, industry insights, and exclusive updates 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="glass border-border/50"
              />
              <Button className="tech-gradient hover-glow font-semibold px-6">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* Light mode logo */}
              <img
                src="/images/TecShastra_Logo-removebg-preview.png"
                alt="TecShastra Logo"
                className="h-12 w-auto block dark:hidden"
                loading="eager"
              />
              {/* Dark mode (white) logo */}
              <img
                src="/images/White Logo.png"
                alt="TecShastra Logo White"
                className="h-12 w-auto hidden dark:block"
                loading="eager"
              />
              <span className="font-logo-title font-extrabold text-base md:text-lg text-black dark:text-white transition-colors duration-300">
                TecShastra
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting tomorrow's technology today. We transform businesses through 
              innovative digital solutions and cutting-edge development.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass hover-glow flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  {service.href.startsWith("#") ? (
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </a>
                  ) : (
                    <Link
                      to={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm leading-relaxed">{contact.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Button className="w-full tech-gradient hover-glow font-semibold">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TecShastra. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}