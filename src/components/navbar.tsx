import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Link, useLocation } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-x-hidden ${
      isScrolled 
        ? "glass border-b border-border/50 backdrop-blur-xl" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex items-center group">
            <Link to="/" className="flex items-center gap-0 md:gap-2 group/logo">
              {/* Light mode logo */}
              <img
                src="/images/TecShastra_Logo-removebg-preview.png"
                alt="TecShastra Logo"
                width={48}
                height={48}
                className="block dark:hidden h-12 md:h-16 w-auto max-w-[90vw]"
                loading="eager"
              />
              {/* Dark mode (white) logo */}
              <img
                src="/images/White Logo.png"
                alt="TecShastra Logo White"
                width={48}
                height={48}
                className="hidden dark:block h-12 md:h-16 w-auto max-w-[90vw]"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-all duration-300 relative group font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-tech transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/contact">
  <Button className="tech-gradient hover-glow font-semibold px-6">
    Get Started
  </Button>
</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}