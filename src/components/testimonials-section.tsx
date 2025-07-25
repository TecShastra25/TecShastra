import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4",
      rating: 5,
      content: "TecShastra transformed our entire digital infrastructure. Their AI-powered solutions increased our efficiency by 300% and reduced operational costs significantly. The team's expertise in emerging technologies is unmatched.",
      company: "TechStart Inc.",
      industry: "FinTech"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO, InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      content: "Working with TecShastra was a game-changer. They delivered our mobile app ahead of schedule with exceptional quality. The user experience is outstanding, and our customer satisfaction scores have increased by 40%.",
      company: "InnovateCorp",
      industry: "E-commerce"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Director, HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      rating: 5,
      content: "The healthcare management system TecShastra built for us has revolutionized patient care. The integration of telemedicine features during the pandemic was crucial for our continued operations.",
      company: "HealthTech Solutions",
      industry: "Healthcare"
    },
    {
      id: 4,
      name: "James Kim",
      role: "Founder, DataDriven Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      content: "TecShastra's data analytics platform gave us insights we never thought possible. Their machine learning algorithms helped us identify new market opportunities and optimize our business strategy.",
      company: "DataDriven Analytics",
      industry: "Data Science"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP of Technology, RetailMax",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      content: "The e-commerce platform TecShastra developed exceeded all our expectations. The AI-powered recommendation engine increased our sales by 60%, and the admin dashboard makes management effortless.",
      company: "RetailMax",
      industry: "Retail"
    }
  ]);

  const [form, setForm] = useState({ name: '', content: '', avatar: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.content.trim()) return
    setReviews([
      {
        id: Date.now(),
        name: form.name,
        role: 'Customer',
        avatar: form.avatar || `https://api .dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(form.name)}`,
        rating: 5,
        content: form.content,
        company: '',
        industry: ''
      },
      ...reviews
    ])
    setForm({ name: '', content: '', avatar: '' })
    setCurrentTestimonial(0)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % reviews.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const current = reviews[currentTestimonial]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the industry leaders who trust 
            TecShastra to power their digital transformation journey.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card hover-glow text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-16 pb-8">
              {/* Avatar */}
              <div className="mb-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20">
                  <AvatarImage src={current.avatar} alt={current.name} />
                  <AvatarFallback className="text-lg font-semibold">
                    {current.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                "{current.content}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="font-bold text-xl">{current.name}</div>
                <div className="text-primary font-medium">{current.role}</div>
                <div className="text-sm text-muted-foreground">
                  {current.company} • {current.industry}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="glass hover-glow rounded-full p-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="glass hover-glow rounded-full p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Submission Form */}
        <div className="max-w-xl mx-auto mt-12 animate-slide-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gradient">Share Your Experience</h3>
          <form className="glass-card flex flex-col gap-4 p-6 shadow-md" onSubmit={handleSubmit}>
            <input
              type="text"
              className="rounded-md border px-3 py-2 text-base"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
            />
            <textarea
              className="rounded-md border px-3 py-2 text-base resize-none"
              placeholder="Write your review here..."
              rows={3}
              value={form.content}
              onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              required
            />
            <div className="flex gap-2 items-center">
              <input
                type="url"
                className="rounded-md border px-3 py-2 text-base flex-1"
                placeholder="Avatar Image URL (optional)"
                value={form.avatar}
                onChange={e => setForm(f => ({ ...f, avatar: e.target.value }))}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-md py-2 px-6 text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Happy Clients", icon: "👥" },
            { number: "99%", label: "Success Rate", icon: "🎯" },
            { number: "24/7", label: "Support", icon: "🛠️" },
            { number: "5★", label: "Average Rating", icon: "⭐" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card text-center hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
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
    </section>
  )
}