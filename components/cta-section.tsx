'use client'

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            {t.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <a href="tel:+48691321515">
                <Phone className="mr-2 h-5 w-5" />
                {t.call.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="https://wa.me/691321515" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta.whatsapp}
              </a>
            </Button>
          </div>
          
          <p className="text-primary-foreground/60 text-sm mt-6">
            {t.cta.hours}
          </p>
        </div>
      </div>
    </section>
  )
}
