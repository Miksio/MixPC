"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Monitor, Laptop, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const categoryIcons = [Monitor, Laptop, Wrench]

export function PricingSection() {
  const { t } = useLanguage()

  return (
    <section id="cennik" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-balance">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto">
          {t.pricing.categories.map((category, catIndex) => {
            const Icon = categoryIcons[catIndex] || Monitor
            return (
              <Card key={catIndex} className="overflow-hidden">
                <CardHeader className="border-b border-border bg-muted/50 py-4">
                  <CardTitle className="flex items-center justify-center gap-2 text-secondary text-base">
                    <Icon className="h-5 w-5 text-primary" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-muted/50 transition-colors">
                        <div className="min-w-0">
                          <p className="font-medium text-secondary text-sm">{item.service}</p>
                          <p className="text-xs text-muted-foreground">{item.note}</p>
                        </div>
                        <p className="font-bold text-primary text-sm shrink-0">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground/60 italic text-center mt-6 max-w-2xl mx-auto">
            {t.pricing.disclaimer}
          </p>
          <p className="text-sm text-muted-foreground mb-4 mt-6">
            {t.pricing.customQuote}
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <a href="tel:+48123456789">
              {t.pricing.askPrice}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
