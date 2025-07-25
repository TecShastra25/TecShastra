import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Zap, Code, Star, Smartphone, Cloud, Shield, BarChart3, Github, Linkedin, Twitter, Instagram, Mail, Phone, Send, ExternalLink, Eye, MapPin, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  
  const dynamicTexts = [
    "TecShastra",
    "Tomorrow's Tech",
    "Innovation",
    "Digital Solutions",
    "Future Systems",
    "Crafted for performance.",
    "Responsive. Reliable. Ready.",
    "Web to wow.",
    "Apps that scale with you.",
    "Speed meets design.",
    "Pixel-perfect, code-solid.",
    "Automate everything.",
    "Smarter workflows, less work.",
    "AI at your service.",
    "Privacy-first intelligence.",
    "Automate, Accelerate, Achieve.",
    "AI that protects, not spies.",
    "Designs users love.",
    "Simple, Clean, Effective.",
    "Built to engage.",
    "Feel the flow.",
    "Design that performs.",
    "Interfaces with impact.",
    "Built-in security.",
    "Data stays yours.",
    "Secure from the start.",
    "Privacy by default.",
    "Guarded by code.",
    "Zero-leak tech.",
    "Ideas into identity.",
    "Brand. Boldly.",
    "Your vision, styled.",
    "Design-led growth.",
    "Positioned to lead.",
    "Creative that converts.",
    "Your stack. Your way.",
    "Tailored tech, no fluff.",
    "Solutions that scale.",
    "Built to fit. Built to last.",
    "Tech for tomorrow.",
    "We solve what others skip."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-16 h-16 rounded-full bg-secondary/20 blur-xl"></div>
        </div>
      </div>

      {/* Floating Icons - Four Corners and Sides with More Icon Types */}
      {/* Top Left Corner */}
      <div className="absolute top-6 left-6 animate-float opacity-40 neon-glow" style={{ animationDelay: '0s' }}>
        <Star className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />
      </div>
      {/* Top Right Corner */}
      <div className="absolute top-6 right-6 animate-float opacity-40 neon-glow" style={{ animationDelay: '0.3s' }}>
        <Smartphone className="w-8 h-8 text-cyan-400 dark:text-cyan-300" />
      </div>
      {/* Bottom Left Corner */}
      <div className="absolute bottom-6 left-6 animate-float opacity-40 neon-glow" style={{ animationDelay: '0.6s' }}>
        <Cloud className="w-8 h-8 text-blue-400 dark:text-blue-300" />
      </div>
      {/* Bottom Right Corner */}
      <div className="absolute bottom-6 right-6 animate-float opacity-40 neon-glow" style={{ animationDelay: '0.9s' }}>
        <Shield className="w-8 h-8 text-violet-400 dark:text-violet-300" />
      </div>

      {/* Diagonal Top Left to Center */}
      <div className="absolute top-16 left-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '1.1s' }}>
        <Github className="w-8 h-8 text-gray-400 dark:text-gray-300" />
      </div>
      {/* Diagonal Top Right to Center */}
      <div className="absolute top-16 right-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '1.3s' }}>
        <Twitter className="w-8 h-8 text-blue-400 dark:text-blue-300" />
      </div>
      {/* Diagonal Bottom Left to Center */}
      <div className="absolute bottom-16 left-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '1.5s' }}>
        <Instagram className="w-8 h-8 text-pink-400 dark:text-pink-300" />
      </div>
      {/* Diagonal Bottom Right to Center */}
      <div className="absolute bottom-16 right-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '1.7s' }}>
        <Mail className="w-8 h-8 text-green-400 dark:text-green-300" />
      </div>
      {/* Between Middle and Bottom Left */}
      <div className="absolute top-3/4 left-3 animate-float opacity-40 neon-glow" style={{ animationDelay: '2.3s' }}>
        <ArrowRight className="w-8 h-8 text-pink-400 dark:text-pink-300" />
      </div>
      {/* Middle Right */}
      <div className="absolute top-35 right-28 animate-float opacity-40 neon-glow" style={{ animationDelay: '2.5s', transform: 'translateY(-50%)' }}>
        <Linkedin className="w-8 h-8 text-blue-500 dark:text-blue-400" />
      </div>
      {/* Between Top and Middle Right */}
      <div className="absolute top-1/4 right-5 animate-float opacity-40 neon-glow" style={{ animationDelay: '2.7s' }}>
        <Sparkles className="w-8 h-8 text-purple-400 dark:text-purple-300" />
      </div>
      {/* Between Middle and Bottom Right */}
      <div className="absolute top-3/4 right-3 animate-float opacity-40 neon-glow" style={{ animationDelay: '2.9s' }}>
        <Send className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />
      </div>

      {/* Additional center-side fillers */}
      <div className="absolute top-1/2 left-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '3.1s', transform: 'translateY(-50%)' }}>
        <ExternalLink className="w-8 h-8 text-indigo-400 dark:text-indigo-300" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-40 neon-glow" style={{ animationDelay: '3.3s', transform: 'translateY(-50%)' }}>
        <Eye className="w-8 h-8 text-red-400 dark:text-red-300" />
      </div>
      <div className="absolute top-1/3 left-1/2 animate-float opacity-40 neon-glow" style={{ animationDelay: '3.5s' }}>
        <MapPin className="w-8 h-8 text-orange-400 dark:text-orange-300" />
      </div>
      <div className="absolute top-2/3 right-1/2 animate-float opacity-40 neon-glow" style={{ animationDelay: '3.7s' }}>
        <Code2 className="w-8 h-8 text-teal-400 dark:text-teal-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl space-x-2 font-bold mb-6 leading-tight mt-32">
            <span className="block">Building</span>
            <span className="text-gradient block transition-all duration-500">
              {dynamicTexts[currentText]}
            </span>
            <span className="block">That Matters</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. 
            We create innovative digital experiences that drive growth and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="tech-gradient hover-glow font-semibold px-8 py-4 text-lg group animate-pulse-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300 font-semibold px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pb-16">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
    </section>
  )
}