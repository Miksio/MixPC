"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
                    <img src="mixpc_logo.png" alt="MixPC" className="h-16 md:h-18 lg:h-20 object-contain" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#uslugi" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
              Usługi
            </a>
            <a href="#jak-dzialamy" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
              Jak działamy
            </a>
            <a href="#cennik" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
              Cennik
            </a>
            <a href="#opinie" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
              Opinie
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+48123456789" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-secondary">
              <Phone className="h-4 w-4" />
              +48 123 456 789
            </a>
            <Button asChild className="hidden sm:inline-flex">
              <a href="tel:+48123456789">
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń teraz
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <a href="#uslugi" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-2">
                Usługi
              </a>
              <a href="#jak-dzialamy" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-2">
                Jak działamy
              </a>
              <a href="#cennik" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-2">
                Cennik
              </a>
              <a href="#opinie" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-2">
                Opinie
              </a>
              <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors py-2">
                FAQ
              </a>
              <Button asChild className="mt-2">
                <a href="tel:+48123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
