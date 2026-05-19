"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contract-form-modal"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

function PolishFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className} aria-hidden="true">
      <g fillRule="evenodd">
        <path fill="#fff" d="M640 480H0V0h640z" />
        <path fill="#dc143c" d="M640 480H0V240h640z" />
      </g>
    </svg>
  )
}

function EnglishFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className} aria-hidden="true">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 302 81 480H0v-60l239-178L0 64V0z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
      />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </svg>
  )
}

const languages: { code: Language; label: string; Flag: typeof PolishFlag }[] = [
  { code: "pl", label: "Polski", Flag: PolishFlag },
  { code: "en", label: "English", Flag: EnglishFlag },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  const currentLang = languages.find((l) => l.code === language)!

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img src="mixpc_logo.png" alt="MixPC" className="h-14 w-auto object-contain" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#uslugi" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
              {t.nav.services}
            </a>
            <a href="#jak-dzialamy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
              {t.nav.how}
            </a>
            <a href="#cennik" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
              {t.nav.pricing}
            </a>
            <a href="#opinie" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
              {t.nav.testimonials}
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
              {t.nav.faq}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:+48691321515" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-secondary">
              <Phone className="h-4 w-4" />
              {t.call.phone}
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <ContactFormModal triggerVariant="outline" triggerLabel="contactUs" />
              <Button asChild>
                <a href="tel:+48691321515">
                  <Phone className="mr-2 h-4 w-4" />
                  {t.call.callNow}
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Language Switcher - always visible, far right */}
            <div ref={langRef} className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 rounded-lg border border-border px-2 py-1.5 transition-colors hover:bg-muted"
                aria-label="Switch language"
              >
                <currentLang.Flag className="h-4 w-6 rounded-sm border border-border/50" />
                <span className="text-xs font-medium text-foreground">{currentLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`h-3 w-3 text-muted-foreground transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full z-50 mt-1.5 w-40 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted ${
                        language === lang.code ? "bg-primary/10 font-medium text-primary" : "text-foreground"
                      }`}
                    >
                      <lang.Flag className="h-4 w-6 rounded-sm border border-border/50" />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="py-4 border-t border-border md:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#uslugi"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t.nav.services}
              </a>
              <a
                href="#jak-dzialamy"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t.nav.how}
              </a>
              <a
                href="#cennik"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#opinie"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                {t.nav.faq}
              </a>
              <a href="tel:+48691321515" className="flex items-center gap-2 py-2 text-sm font-semibold text-secondary">
                <Phone className="h-4 w-4" />
                {t.call.phone}
              </a>
              <div className="mt-2 flex flex-col gap-2">
                <ContactFormModal triggerVariant="outline" triggerLabel="contactUs" triggerClassName="w-full" />
                <Button asChild>
                  <a href="tel:+48691321515">
                    <Phone className="mr-2 h-4 w-4" />
                    {t.call.callNow}
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
