"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PricingSection() {
  const { t } = useLanguage()

  const pricingItems = [
    { service: t.pricing.items.diagnostics.service, price: t.pricing.items.diagnostics.price, note: t.pricing.items.diagnostics.note },
    { service: t.pricing.items.install.service, price: t.pricing.items.install.price, note: t.pricing.items.install.note },
    { service: t.pricing.items.clean.service, price: t.pricing.items.clean.price, note: t.pricing.items.clean.note },
    { service: t.pricing.items.virus.service, price: t.pricing.items.virus.price, note: t.pricing.items.virus.note },
    { service: t.pricing.items.ssd.service, price: t.pricing.items.ssd.price, note: t.pricing.items.ssd.note },
    { service: t.pricing.items.remote.service, price: t.pricing.items.remote.price, note: t.pricing.items.remote.note },
    { service: t.pricing.items.repair.service, price: t.pricing.items.repair.price, note: t.pricing.items.repair.note },
    { service: t.pricing.items.travel.service, price: t.pricing.items.travel.price, note: t.pricing.items.travel.note }
  ]

  return (
    <section id="cennik" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="border-b border-border bg-muted/50">
            <CardTitle className="text-center text-secondary">{t.pricing.cardTitle}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {pricingItems.map((item) => (
                <div key={item.service} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-secondary">{item.service}</p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            {t.pricing.askPrice}
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <a href="tel:+48123456789">
              {t.pricing.askButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
