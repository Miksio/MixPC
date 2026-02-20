"use client"

import { Phone, Wrench, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorksSection() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: t.how.steps["1"].title,
      description: t.how.steps["1"].description
    },
    {
      number: "02",
      icon: Wrench,
      title: t.how.steps["2"].title,
      description: t.how.steps["2"].description
    },
    {
      number: "03",
      icon: ThumbsUp,
      title: t.how.steps["3"].title,
      description: t.how.steps["3"].description
    }
  ]

  return (
    <section id="jak-dzialamy" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.how.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.how.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-card shadow-lg border border-border">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
