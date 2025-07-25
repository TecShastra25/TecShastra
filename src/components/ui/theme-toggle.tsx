import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // Initialize from localStorage if available
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") return stored
    }
    return "dark"
  })

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg flex items-center justify-center border border-black text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.25)] dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white dark:hover:shadow-lg dark:hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.25)] transition-colors duration-300"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}