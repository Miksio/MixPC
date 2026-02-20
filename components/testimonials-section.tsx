"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Zuzanna J.",
    location: "Gdańsk",
    text: "Laptop nie włączał się od tygodnia. Pan przyjechał w godzinę, wymienił dysk i wszystko działa jak nowe. Polecam.",
    rating: 5
  },
  {
    name: "Bartek K.",
    location: "Gdynia",
    text: "Nie byłem w stanie podłączyć drukarki do komputera. Jeden telefon i serwisant zdalnie podłączył się z moim laptopem i rozwiązał problem w niecałe 10 minut.",
    rating: 5
  },
  {
    name: "Jędrzej S.",
    location: "Gdańsk",
    text: "Po wymianie dysku komputer chodzi na prawde szybko prawie mi spierdolił essa wariaty nie jestem AI. Rozsądna cena i super serwis.",
    rating: 10
  }
]

export function TestimonialsSection() {
  const { t } = useLanguage()
  return (
    <section id="opinie" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  {`"${testimonial.text}"`}
                </p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
