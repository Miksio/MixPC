"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Monitor, 
  Laptop, 
  Wifi,
  Shield, 
  Cpu, 
  Wrench
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceIcons = [Laptop, Monitor, Wifi, Shield, Cpu, Wrench]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="uslugi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service: typeof t.services.items[0], index: number) => {
            const Icon = serviceIcons[index]
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
