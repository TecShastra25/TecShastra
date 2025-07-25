import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In a real application, you would send this data to your backend
    console.log("Form submission:", formData)

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    })

    setIsSubmitting(false)
  }

  return (
    <div className="glass-card max-w-xl mx-auto p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@company.com"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              Project Type *
            </label>
            <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
                <SelectItem value="ai-ml">AI/ML Development</SelectItem>
                <SelectItem value="blockchain">Blockchain Development</SelectItem>
                <SelectItem value="consulting">Tech Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Project Budget
            </label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="over-100k">Over $100,000</SelectItem>
                <SelectItem value="discuss">Let's Discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
            Project Timeline
          </label>
          <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
            <SelectTrigger>
              <SelectValue placeholder="When do you need this completed?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-month">Within 1 month</SelectItem>
              <SelectItem value="2-3-months">2-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-plus-months">6+ months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Project Description *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            rows={6}
            required
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full tech-gradient hover-glow font-semibold py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}