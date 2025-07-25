import { useState } from "react"
import { ExternalLink, Github, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { useNavigate } from "react-router-dom"

export function PortfolioSection({ showAll = false }: { showAll?: boolean }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Development", "Mobile Apps", "AI/ML", "E-commerce"]

  const placeholderImage = 'https://via.placeholder.com/800x300?text=Project+Image';

  const projects = [
    {
      id: 1,
      github: 'https://github.com/TecShastra25',
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: { views: "2.5K", stars: "150", downloads: "500+" },
      featured: true
    },
    {
      id: 2,
      github: 'https://github.com/TecShastra25',
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence dashboard with machine learning insights and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      stats: { views: "1.8K", stars: "89", downloads: "200+" },
      featured: false
    },
    {
      id: 3,
      github: 'https://github.com/TecShastra25',
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      category: "Mobile Apps",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      stats: { views: "3.2K", stars: "200", downloads: "1K+" },
      featured: true
    },
    {
      id: 4,
      github: 'https://github.com/TecShastra25',
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management, appointment scheduling, and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      category: "Web Development",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      stats: { views: "1.5K", stars: "67", downloads: "150+" },
      featured: false
    },
    {
      id: 5,
      github: 'https://github.com/TecShastra25',
      title: "Smart IoT Dashboard",
      description: "IoT device management platform with real-time monitoring, alerts, and automated control systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Web Development",
      technologies: ["Angular", "Node.js", "InfluxDB", "MQTT"],
      stats: { views: "900", stars: "45", downloads: "80+" },
      featured: false
    },
    // New dummy projects
    {
      id: 6,
      github: 'https://github.com/TecShastra25',
      title: "Blockchain Voting System",
      description: "A secure blockchain-based voting platform ensuring transparency and integrity for online elections.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Blockchain",
      technologies: ["Solidity", "Ethereum", "React", "IPFS"],
      stats: { views: "2.1K", stars: "120", downloads: "340+" },
      featured: false
    },
    {
      id: 7,
      github: 'https://github.com/TecShastra25',
      title: "EdTech Learning Portal",
      description: "Interactive e-learning platform with live classes, quizzes, and student analytics for remote education.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Web Development",
      technologies: ["Next.js", "Firebase", "TypeScript", "Jitsi Meet"],
      stats: { views: "1.3K", stars: "55", downloads: "150+" },
      featured: false
    },
    {
      id: 8,
      github: 'https://github.com/TecShastra25',
      title: "Travel Booking App",
      description: "Mobile app for booking flights, hotels, and experiences with real-time price tracking and notifications.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      category: "Mobile Apps",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      stats: { views: "2.8K", stars: "170", downloads: "900+" },
      featured: true
    },
    {
      id: 9,
      github: 'https://github.com/TecShastra25',
      title: "Restaurant POS System",
      description: "Cloud-based point-of-sale system for restaurants with inventory, orders, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      category: "E-commerce",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
      stats: { views: "1.7K", stars: "82", downloads: "210+" },
      featured: false
    },
    {
      id: 10,
      github: 'https://github.com/TecShastra25',
      title: "Fitness Tracker Platform",
      description: "Comprehensive fitness platform with wearable integration, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
      category: "AI/ML",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      stats: { views: "2.0K", stars: "110", downloads: "400+" },
      featured: false
    },
    {
      id: 11,
      github: 'https://github.com/TecShastra25',
      title: "Event Management Platform",
      description: "End-to-end event planning and ticketing system with real-time updates and analytics.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      category: "Web Development",
      technologies: ["React", "Node.js", "Socket.IO", "Stripe"],
      stats: { views: "1.4K", stars: "65", downloads: "120+" },
      featured: false
    },
    {
      id: 12,
      github: 'https://github.com/TecShastra25',
      title: "Online Learning Management System",
      description: "Full-featured LMS with courses, quizzes, progress tracking, and certification.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      category: "Web Development",
      technologies: ["Vue.js", "Firebase", "Node.js", "Chart.js"],
      stats: { views: "2.2K", stars: "120", downloads: "370+" },
      featured: false
    },
    {
      id: 13,
      github: 'https://github.com/TecShastra25',
      title: "Smart Home Automation",
      description: "IoT-based home automation platform with voice control and energy analytics.",
      image: "https://images.unsplash.com/photo-1511452885600-a2cf4cebc058",
      category: "AI/ML",
      technologies: ["Python", "Raspberry Pi", "React Native", "AWS"],
      stats: { views: "1.9K", stars: "98", downloads: "260+" },
      featured: false
    },
    {
      id: 14,
      github: 'https://github.com/TecShastra25',
      title: "Logistics Tracking App",
      description: "Real-time logistics and fleet tracking app with route optimization and alerts.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      category: "Mobile Apps",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
      stats: { views: "2.6K", stars: "132", downloads: "540+" },
      featured: false
    },
    {
      id: 15,
      github: 'https://github.com/TecShastra25',
      title: "Crowdfunding Platform",
      description: "Decentralized crowdfunding platform with blockchain-based smart contracts.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Blockchain",
      technologies: ["Solidity", "React", "Web3.js", "IPFS"],
      stats: { views: "2.3K", stars: "140", downloads: "410+" },
      featured: false
    }
  ]

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span> & Case Studies
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform 
            their digital presence with innovative technology solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`${
                activeFilter === filter 
                  ? "bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300" 
                  : "bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300"
              } font-medium px-6`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll
          ? projects
          : projects.slice(0, 6))
          .filter((project) => activeFilter === "All" || project.category === activeFilter)
          .map((project, index) => (
            <a
              key={project.id}
              href={project.github || 'https://github.com/TecShastra25'}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card hover-lift group cursor-pointer transition-all duration-500 overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={(project.image ? project.image : placeholderImage) + '?auto=format&fit=crop&w=800&q=80'}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={e => { e.currentTarget.src = placeholderImage; }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="tech-gradient text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                  <div className="flex space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.stats.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300 font-semibold px-8"
              onClick={() => navigate('/portfolio')}
            >
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}